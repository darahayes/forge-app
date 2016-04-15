angular.module('PRServiceModule', ['ngStorage', 'workoutServiceModule'])

.factory('prService', function($rootScope, $localStorage) {
  var workouts = $localStorage.workouts;

  function get_history(exercise) {
    console.log('GET HISTORY', exercise)
    var history = {name: exercise, performances: [], pbs: {}}

    //Find all workouts where that exercise was performed
    workouts = _.filter(workouts, function(workout) {
      return _.find(workout.exercises, {name: exercise})
    })

    _.forEach(workouts, function(workout) {

      _.forEach(workout.exercises, function(x) {
        if (x.name === exercise) {
          //push the sets performed
          history.performances.push({date: workout.date, sets: x.sets})
          //for each set we see if they have performed those reps before
          _.forEach(x.sets, function(set) {
            var pb = history.pbs[set.reps]
            if (!pb || set.weight > pb.weight) {
              //if they havent add that set as the pb
              history.pbs[set.reps] = {
                reps: set.reps || 0,
                weight: set.weight || 0,
                unit: set.unit,
                date: workout.date
              }
            }
          })
        }
      })
    });
    console.log('history', JSON.stringify(history, null, 2))
    _.reverse(history.performances)
    return history
  }

  return {
    get_history: get_history
  }

})
