angular.module('Calendar', ['Workouts'])

.factory('$calendar', function(WorkoutService) {

    var month_labels = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var today = new Date();
    var this_month = today.getMonth();
    var this_year = today.getFullYear();

    console.log('today', today.getDate());
    console.log('this_month', this_month);
    console.log('this_year', this_year);

    function build_month(month, year) {
      var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      //find the previous month 0...11
      var previous_month = (month >= 1) ? month-1 : 11;
      var previous_year = (previous_month === 11) ? year - 1 : year;

      //find the next month 0...1
      var next_month = (month < 11) ? month+1 : 0;
      var next_year = (next_month === 0) ? year + 1: year;


      //get the first date of the month 
      var first_day = new Date(year, month, 1);
      
      // finds the weekday the first day falls on
      //0...6 have to account for 0 = sunday
      var offset = first_day.getDay() -1;
      var first_day_index = (offset > -1) ? offset : 6;

      var weeks = []
      
      //calculates what number the very first day
      //in the calendar we get a negative number
      //if last month
      var day =  first_day.getDate() - first_day_index -1;
      do {
        var week = [];
        weeks.push(week);
        for (var i = 0; i <=6; i++) {
          if (day < 0) {
            week[i] = {date: get_days_in_month(previous_month, year) + day +1, month: previous_month, year: previous_year, other_month: true}
          }
          else if (day <= get_days_in_month(month, year)) {
            if (day === 0) { day++; }
            week[i] = {year: year, date: day, month: month}
          }
          else {
            week[i] = {date: (day - get_days_in_month(month, year)), month: next_month, year: next_year, other_month: true}
          }
          if (week[i].year === this_year && week[i].date === today.getDate() && week[i].month === this_month) {
              week[i].today = true;
          }
          day++;
        }

      } while (day <= get_days_in_month(month, year))
      return weeks;

      function get_days_in_month(month, year) {
        //leap year check
        if(month === 1 && (year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
          return 29;
        }
        return days_in_month[month];
      }
    }

    return {
        build_month: build_month,
        month_labels: month_labels,
        today: today,
        month: this_month,
        year: this_year
    }

})