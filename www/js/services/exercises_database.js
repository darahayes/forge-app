angular.module('exercisesDBModule', [])

.factory('exercisesDB', function() {
  var db = [
  {
    "name": "3/4 Sit-Up",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Ab Crunch Machine",
    "main_target": "Abdominals",
    "equipment": "Machine"
  },
  {
    "name": "Ab Roller",
    "main_target": "Abdominals",
    "equipment": "Other",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Advanced Kettlebell Windmill",
    "main_target": "Abdominals",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Shoulders"
    ]
  },
  {
    "name": "Air Bike",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Alternate Hammer Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Alternate Heel Touchers",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Alternate Incline Dumbbell Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Alternating Cable Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Alternating Deltoid Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Alternating Floor Press",
    "main_target": "Chest",
    "equipment": "Kettlebells",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Alternating Hang Clean",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Biceps",
      "Calves",
      "Forearms",
      "Glutes",
      "Lower Back",
      "Traps"
    ]
  },
  {
    "name": "Alternating Kettlebell Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Alternating Kettlebell Row",
    "main_target": "Back",
    "equipment": "Kettlebells",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Alternating Renegade Row",
    "main_target": "Back",
    "equipment": "Kettlebells",
    "tags": [
      "Abdominals",
      "Biceps",
      "Chest",
      "Lats",
      "Triceps"
    ]
  },
  {
    "name": "Anti-Gravity Press",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Middle Back",
      "Traps",
      "Triceps"
    ]
  },
  {
    "name": "Arnold Dumbbell Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Around The Worlds",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Back Flyes - With Bands",
    "main_target": "Shoulders",
    "equipment": "Bands",
    "tags": [
      "Middle Back",
      "Triceps"
    ]
  },
  {
    "name": "Balance Board",
    "main_target": "Legs",
    "equipment": "Other",
    "tags": [
      "Hamstrings",
      "Quadriceps"
    ]
  },
  {
    "name": "Ball Leg Curl",
    "main_target": "Legs",
    "equipment": "Exercise Ball",
    "tags": [
      "Calves",
      "Glutes"
    ]
  },
  {
    "name": "Band Assisted Pull-Up",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Abdominals",
      "Forearms",
      "Middle Back"
    ]
  },
  {
    "name": "Band Pull Apart",
    "main_target": "Shoulders",
    "equipment": "Bands",
    "tags": [
      "Middle Back",
      "Traps"
    ]
  },
  {
    "name": "Band Skull Crusher",
    "main_target": "Arms",
    "equipment": "Bands"
  },
  {
    "name": "Barbell Ab Rollout",
    "main_target": "Abdominals",
    "equipment": "Barbell",
    "tags": [
      "Lower Back",
      "Shoulders"
    ]
  },
  {
    "name": "Barbell Ab Rollout - On Knees",
    "main_target": "Abdominals",
    "equipment": "Barbell",
    "tags": [
      "Lower Back",
      "Shoulders"
    ]
  },
  {
    "name": "Barbell Bench Press - Medium Grip",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Barbell Curl",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Barbell Curls Lying Against An Incline",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Barbell Deadlift",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Forearms",
      "Glutes",
      "Hamstrings",
      "Lats",
      "Middle Back",
      "Quadriceps",
      "Traps"
    ]
  },
  {
    "name": "Barbell Full Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Barbell Guillotine Bench Press",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Barbell Hack Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Forearms",
      "Hamstrings"
    ]
  },
  {
    "name": "Barbell Incline Bench Press - Medium Grip",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Barbell Incline Shoulder Raise",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Chest"
    ]
  },
  {
    "name": "Barbell Lunge",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Barbell Rear Delt Row",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats",
      "Middle Back"
    ]
  },
  {
    "name": "Barbell Rollout from Bench",
    "main_target": "Abdominals",
    "equipment": "Barbell",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Barbell Seated Calf Raise",
    "main_target": "Legs",
    "equipment": "Barbell"
  },
  {
    "name": "Barbell Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Triceps"
    ]
  },
  {
    "name": "Barbell Shrug",
    "main_target": "Back",
    "equipment": "Barbell"
  },
  {
    "name": "Barbell Shrug Behind The Back",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Forearms",
      "Middle Back"
    ]
  },
  {
    "name": "Barbell Side Bend",
    "main_target": "Abdominals",
    "equipment": "Barbell",
    "tags": [
      "Lower Back"
    ]
  },
  {
    "name": "Barbell Side Split Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Barbell Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Barbell Squat To A Bench",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Barbell Step Ups",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Quadriceps"
    ]
  },
  {
    "name": "Barbell Walking Lunge",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Battling Ropes",
    "main_target": "Shoulders",
    "equipment": "Other",
    "tags": [
      "Chest",
      "Forearms"
    ]
  },
  {
    "name": "Bench Dips",
    "main_target": "Arms",
    "equipment": "Body Only",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Bench Press - With Bands",
    "main_target": "Chest",
    "equipment": "Bands",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Bent Over Barbell Row",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Bent Over Dumbbell Rear Delt Raise With Head On Bench",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Bent Over Low-Pulley Side Lateral",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Lower Back",
      "Middle Back",
      "Traps"
    ]
  },
  {
    "name": "Bent Over One-Arm Long Bar Row",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats",
      "Lower Back",
      "Traps"
    ]
  },
  {
    "name": "Bent Over Two-Arm Long Bar Row",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Bent Over Two-Dumbbell Row",
    "main_target": "Back",
    "equipment": "Dumbbell",
    "tags": [
      "Biceps",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Bent Over Two-Dumbbell Row With Palms In",
    "main_target": "Back",
    "equipment": "Dumbbell",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Bent Press",
    "main_target": "Abdominals",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Lower Back",
      "Quadriceps",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Bent-Arm Barbell Pullover",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Shoulders",
      "Triceps",
      "Lats"
    ]
  },
  {
    "name": "Bent-Arm Dumbbell Pullover",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Lats",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Bent-Knee Hip Raise",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Body Tricep Press",
    "main_target": "Arms",
    "equipment": "Body Only"
  },
  {
    "name": "Body-Up",
    "main_target": "Arms",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Forearms"
    ]
  },
  {
    "name": "Bodyweight Flyes",
    "main_target": "Chest",
    "equipment": "E-Z Curl Bar",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Bodyweight Mid Row",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Bodyweight Squat",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Bodyweight Walking Lunge",
    "main_target": "Legs",
    "equipment": "None",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Bosu Ball Cable Crunch With Side Bends",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Bottoms Up",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Bottoms-Up Clean From The Hang Position",
    "main_target": "Arms",
    "equipment": "Kettlebells",
    "tags": [
      "Biceps",
      "Shoulders"
    ]
  },
  {
    "name": "Box Squat with Chains",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Abductors",
      "Adductors",
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Bradford/Rocky Presses",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Butt Lift (Bridge)",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Butt-Ups",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Butterfly",
    "main_target": "Chest",
    "equipment": "Machine"
  },
  {
    "name": "Cable Chest Press",
    "main_target": "Chest",
    "equipment": "Cable",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Cable Crossover",
    "main_target": "Chest",
    "equipment": "Cable",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Cable Crunch",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Cable Deadlifts",
    "main_target": "Legs",
    "equipment": "Cable",
    "tags": [
      "Forearms",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Cable Hammer Curls - Rope Attachment",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Cable Hip Adduction",
    "main_target": "Legs",
    "equipment": "Cable"
  },
  {
    "name": "Cable Incline Pushdown",
    "main_target": "Back",
    "equipment": "Cable"
  },
  {
    "name": "Cable Incline Triceps Extension",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Cable Internal Rotation",
    "main_target": "Shoulders",
    "equipment": "Cable"
  },
  {
    "name": "Cable Iron Cross",
    "main_target": "Chest",
    "equipment": "Cable"
  },
  {
    "name": "Cable Judo Flip",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Cable Lying Triceps Extension",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Cable One Arm Tricep Extension",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Cable Preacher Curl",
    "main_target": "Arms",
    "equipment": "Cable",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Cable Rear Delt Fly",
    "main_target": "Shoulders",
    "equipment": "Cable"
  },
  {
    "name": "Cable Reverse Crunch",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Cable Rope Overhead Triceps Extension",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Cable Rope Rear-Delt Rows",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Cable Russian Twists",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Cable Seated Crunch",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Cable Seated Lateral Raise",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Middle Back",
      "Traps"
    ]
  },
  {
    "name": "Cable Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Cable Shrugs",
    "main_target": "Back",
    "equipment": "Cable"
  },
  {
    "name": "Cable Wrist Curl",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Calf Press",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Calf Press On The Leg Press Machine",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Calf Raise On A Dumbbell",
    "main_target": "Legs",
    "equipment": "Dumbbell"
  },
  {
    "name": "Calf Raises - With Bands",
    "main_target": "Legs",
    "equipment": "Bands"
  },
  {
    "name": "Calf-Machine Shoulder Shrug",
    "main_target": "Back",
    "equipment": "Machine"
  },
  {
    "name": "Car Drivers",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Chair Squat",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Chin-Up",
    "main_target": "Back",
    "equipment": "Body Only",
    "tags": [
      "Biceps",
      "Forearms",
      "Middle Back"
    ]
  },
  {
    "name": "Clean and Press",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Abdominals",
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back",
      "Middle Back",
      "Quadriceps",
      "Traps",
      "Triceps",
      "Shoulders"
    ]
  },
  {
    "name": "Clock Push-Up",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Close-Grip Barbell Bench Press",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Close-Grip Dumbbell Press",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Close-Grip EZ Bar Curl",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Close-Grip EZ-Bar Curl with Band",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Close-Grip EZ-Bar Press",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Close-Grip Front Lat Pulldown",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Close-Grip Push-Up off of a Dumbbell",
    "main_target": "Arms",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Close-Grip Standing Barbell Curl",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Cocoons",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Concentration Curls",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Cross Body Hammer Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Cross Over - With Bands",
    "main_target": "Chest",
    "equipment": "Bands",
    "tags": [
      "Biceps",
      "Shoulders"
    ]
  },
  {
    "name": "Cross-Body Crunch",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Crunch - Hands Overhead",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Crunch - Legs On Exercise Ball",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Crunches",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Cuban Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Traps"
    ]
  },
  {
    "name": "Dead Bug",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Decline Barbell Bench Press",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Decline Close-Grip Bench To Skull Crusher",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Decline Crunch",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Decline Dumbbell Bench Press",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Decline Dumbbell Flyes",
    "main_target": "Chest",
    "equipment": "Dumbbell"
  },
  {
    "name": "Decline Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Decline EZ Bar Triceps Extension",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Decline Oblique Crunch",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Decline Push-Up",
    "main_target": "Chest",
    "equipment": "None",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Decline Reverse Crunch",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Decline Smith Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Dip Machine",
    "main_target": "Arms",
    "equipment": "Machine",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Dips - Chest Version",
    "main_target": "Chest",
    "equipment": "Other",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Dips - Triceps Version",
    "main_target": "Arms",
    "equipment": "Body Only",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Donkey Calf Raises",
    "main_target": "Legs",
    "equipment": "Other"
  },
  {
    "name": "Double Kettlebell Alternating Hang Clean",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Biceps",
      "Calves",
      "Forearms",
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Traps"
    ]
  },
  {
    "name": "Double Kettlebell Jerk",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "Double Kettlebell Push Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "Double Kettlebell Snatch",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Quadriceps"
    ]
  },
  {
    "name": "Double Kettlebell Windmill",
    "main_target": "Abdominals",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Downward Facing Balance",
    "main_target": "Legs",
    "equipment": "Exercise Ball",
    "tags": [
      "Abdominals",
      "Hamstrings"
    ]
  },
  {
    "name": "Drag Curl",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Dumbbell Alternate Bicep Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Dumbbell Bench Press",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Dumbbell Bench Press with Neutral Grip",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Dumbbell Bicep Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Dumbbell Clean",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Calves",
      "Forearms",
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Shoulders",
      "Traps"
    ]
  },
  {
    "name": "Dumbbell Flyes",
    "main_target": "Chest",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell Incline Row",
    "main_target": "Back",
    "equipment": "Dumbbell",
    "tags": [
      "Biceps",
      "Forearms",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Dumbbell Incline Shoulder Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Dumbbell Lunges",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Dumbbell Lying One-Arm Rear Lateral Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Middle Back"
    ]
  },
  {
    "name": "Dumbbell Lying Pronation",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell Lying Rear Lateral Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell Lying Supination",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell One-Arm Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Dumbbell One-Arm Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell One-Arm Upright Row",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Biceps",
      "Traps"
    ]
  },
  {
    "name": "Dumbbell Prone Incline Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Biceps"
    ]
  },
  {
    "name": "Dumbbell Rear Lunge",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Dumbbell Scaption",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Traps"
    ]
  },
  {
    "name": "Dumbbell Seated One-Leg Calf Raise",
    "main_target": "Legs",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Dumbbell Shrug",
    "main_target": "Back",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell Side Bend",
    "main_target": "Abdominals",
    "equipment": "Dumbbell"
  },
  {
    "name": "Dumbbell Squat",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Dumbbell Squat To A Bench",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Dumbbell Step Ups",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Dumbbell Tricep Extension -Pronated Grip",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Elbow to Knee",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Elevated Back Lunge",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Elevated Cable Rows",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Middle Back",
      "Traps"
    ]
  },
  {
    "name": "Exercise Ball Crunch",
    "main_target": "Abdominals",
    "equipment": "Exercise Ball"
  },
  {
    "name": "Exercise Ball Pull-In",
    "main_target": "Abdominals",
    "equipment": "Exercise Ball"
  },
  {
    "name": "Extended Range One-Arm Kettlebell Floor Press",
    "main_target": "Chest",
    "equipment": "Kettlebells",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "External Rotation",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "External Rotation with Band",
    "main_target": "Shoulders",
    "equipment": "Bands"
  },
  {
    "name": "External Rotation with Cable",
    "main_target": "Shoulders",
    "equipment": "Cable"
  },
  {
    "name": "EZ-Bar Curl",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar"
  },
  {
    "name": "EZ-Bar Skullcrusher",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Face Pull",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Middle Back"
    ]
  },
  {
    "name": "Finger Curls",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Flat Bench Cable Flyes",
    "main_target": "Chest",
    "equipment": "Cable"
  },
  {
    "name": "Flat Bench Leg Pull-In",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Flat Bench Lying Leg Raise",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Flexor Incline Dumbbell Curls",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Floor Glute-Ham Raise",
    "main_target": "Legs",
    "equipment": "None",
    "tags": [
      "Calves",
      "Glutes"
    ]
  },
  {
    "name": "Flutter Kicks",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Freehand Jump Squat",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Frog Sit-Ups",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Front Barbell Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Front Barbell Squat To A Bench",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Front Cable Raise",
    "main_target": "Shoulders",
    "equipment": "Cable"
  },
  {
    "name": "Front Dumbbell Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Front Incline Dumbbell Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Front Plate Raise",
    "main_target": "Shoulders",
    "equipment": "Other"
  },
  {
    "name": "Front Raise And Pullover",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Lats",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Front Squat (Clean Grip)",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Abdominals",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Front Squats With Two Kettlebells",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes"
    ]
  },
  {
    "name": "Front Two-Dumbbell Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Full Range-Of-Motion Lat Pulldown",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Gironda Sternum Chins",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Glute Kickback",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Goblet Squat",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Shoulders"
    ]
  },
  {
    "name": "Gorilla Chin/Crunch",
    "main_target": "Abdominals",
    "equipment": "Body Only",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Hack Squat",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Hammer Curls",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Hammer Grip Incline DB Bench Press",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Handstand Push-Ups",
    "main_target": "Shoulders",
    "equipment": "Body Only",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Hanging Leg Raise",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Hanging Pike",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "High Cable Curls",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Hip Extension with Bands",
    "main_target": "Legs",
    "equipment": "Bands",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Hip Flexion with Band",
    "main_target": "Legs",
    "equipment": "Bands"
  },
  {
    "name": "Hyperextensions (Back Extensions)",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Hyperextensions With No Hyperextension Bench",
    "main_target": "Back",
    "equipment": "Body Only",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Incline Barbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Incline Bench Pull",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Incline Cable Chest Press",
    "main_target": "Chest",
    "equipment": "Cable",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Incline Cable Flye",
    "main_target": "Chest",
    "equipment": "Cable",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Incline Dumbbell Bench With Palms Facing In",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Incline Dumbbell Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Incline Dumbbell Flyes",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Incline Dumbbell Flyes - With A Twist",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Incline Dumbbell Press",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Incline Hammer Curls",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Incline Inner Biceps Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Incline Push-Up",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Incline Push-Up Close-Grip",
    "main_target": "Arms",
    "equipment": "Body Only",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Incline Push-Up Medium",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Incline Push-Up Reverse Grip",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Incline Push-Up Wide",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Internal Rotation with Band",
    "main_target": "Shoulders",
    "equipment": "Bands"
  },
  {
    "name": "Inverted Row",
    "main_target": "Back",
    "equipment": "None",
    "tags": [
      "Lats"
    ]
  },
  {
    "name": "Inverted Row with Straps",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Iron Cross",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Chest",
      "Glutes",
      "Hamstrings",
      "Lower Back",
      "Quadriceps",
      "Traps"
    ]
  },
  {
    "name": "Isometric Wipers",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Jackknife Sit-Up",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Janda Sit-Up",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Jefferson Squats",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back",
      "Traps"
    ]
  },
  {
    "name": "JM Press",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Kettlebell Arnold Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Kettlebell Dead Clean",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Traps"
    ]
  },
  {
    "name": "Kettlebell Figure 8",
    "main_target": "Abdominals",
    "equipment": "Kettlebells",
    "tags": [
      "Hamstrings",
      "Shoulders"
    ]
  },
  {
    "name": "Kettlebell Hang Clean",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Lower Back",
      "Shoulders",
      "Traps"
    ]
  },
  {
    "name": "Kettlebell One-Legged Deadlift",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Lower Back"
    ]
  },
  {
    "name": "Kettlebell Pass Between The Legs",
    "main_target": "Abdominals",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Shoulders"
    ]
  },
  {
    "name": "Kettlebell Pirate Ships",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Abdominals"
    ]
  },
  {
    "name": "Kettlebell Pistol Squat",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Shoulders"
    ]
  },
  {
    "name": "Kettlebell Seated Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Kettlebell Seesaw Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Kettlebell Sumo High Pull",
    "main_target": "Back",
    "equipment": "Kettlebells",
    "tags": [
      "Adductors",
      "Glutes",
      "Hamstrings",
      "Quadriceps",
      "Shoulders"
    ]
  },
  {
    "name": "Kettlebell Thruster",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "Kettlebell Turkish Get-Up (Lunge style)",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Abdominals",
      "Hamstrings",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "Kettlebell Turkish Get-Up (Squat style)",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Abdominals",
      "Calves",
      "Hamstrings",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "Kettlebell Windmill",
    "main_target": "Abdominals",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Kipping Muscle Up",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Abdominals",
      "Biceps",
      "Forearms",
      "Middle Back",
      "Shoulders",
      "Traps",
      "Triceps"
    ]
  },
  {
    "name": "Knee/Hip Raise On Parallel Bars",
    "main_target": "Abdominals",
    "equipment": "Other"
  },
  {
    "name": "Kneeling Cable Crunch With Alternating Oblique Twists",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Kneeling Cable Triceps Extension",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Kneeling High Pulley Row",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Kneeling Single-Arm High Pulley Row",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Landmine 180's",
    "main_target": "Abdominals",
    "equipment": "Barbell",
    "tags": [
      "Glutes",
      "Lower Back",
      "Shoulders"
    ]
  },
  {
    "name": "Landmine Linear Jammer",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Abdominals",
      "Calves",
      "Chest",
      "Hamstrings",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "Lateral Raise - With Bands",
    "main_target": "Shoulders",
    "equipment": "Bands"
  },
  {
    "name": "Leg Extensions",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Leg Lift",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Leg Press",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Leg Pull-In",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Leg-Over Floor Press",
    "main_target": "Chest",
    "equipment": "Kettlebells",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Leverage Chest Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Leverage Deadlift",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Leverage Decline Chest Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Leverage High Row",
    "main_target": "Back",
    "equipment": "Machine",
    "tags": [
      "Lats"
    ]
  },
  {
    "name": "Leverage Incline Chest Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Leverage Iso Row",
    "main_target": "Back",
    "equipment": "Machine",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Leverage Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Machine",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Leverage Shrug",
    "main_target": "Back",
    "equipment": "Machine",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "London Bridges",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Forearms",
      "Middle Back"
    ]
  },
  {
    "name": "Low Cable Crossover",
    "main_target": "Chest",
    "equipment": "Cable",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Low Cable Triceps Extension",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Low Pulley Row To Neck",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back",
      "Traps"
    ]
  },
  {
    "name": "Lunge Pass Through",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Quadriceps"
    ]
  },
  {
    "name": "Lunge Sprint",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Lying Cable Curl",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Lying Cambered Barbell Row",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats",
      "Traps"
    ]
  },
  {
    "name": "Lying Close-Grip Bar Curl On High Pulley",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Lying Close-Grip Barbell Triceps Extension Behind The Head",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Lying Close-Grip Barbell Triceps Press To Chin",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar"
  },
  {
    "name": "Lying Dumbbell Tricep Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Lying High Bench Barbell Curl",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Lying Leg Curls",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Lying Machine Squat",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Lying One-Arm Lateral Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Lying Rear Delt Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Lying Supine Dumbbell Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Lying T-Bar Row",
    "main_target": "Back",
    "equipment": "Machine",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Lying Triceps Press",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar"
  },
  {
    "name": "Machine Bench Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Machine Bicep Curl",
    "main_target": "Arms",
    "equipment": "Machine"
  },
  {
    "name": "Machine Preacher Curls",
    "main_target": "Arms",
    "equipment": "Machine"
  },
  {
    "name": "Machine Shoulder (Military) Press",
    "main_target": "Shoulders",
    "equipment": "Machine",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Machine Triceps Extension",
    "main_target": "Arms",
    "equipment": "Machine"
  },
  {
    "name": "Middle Back Shrug",
    "main_target": "Back",
    "equipment": "Dumbbell"
  },
  {
    "name": "Mixed Grip Chin",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Muscle Up",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Abdominals",
      "Biceps",
      "Forearms",
      "Middle Back",
      "Shoulders",
      "Traps",
      "Triceps"
    ]
  },
  {
    "name": "Narrow Stance Hack Squats",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Narrow Stance Leg Press",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Narrow Stance Squats",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Natural Glute Ham Raise",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Calves",
      "Glutes",
      "Lower Back"
    ]
  },
  {
    "name": "Neck Press",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Oblique Crunches",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Oblique Crunches - On The Floor",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "One Arm Chin-Up",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Forearms",
      "Lats"
    ]
  },
  {
    "name": "One Arm Dumbbell Bench Press",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "One Arm Dumbbell Preacher Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "One Arm Floor Press",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "One Arm Lat Pulldown",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "One Arm Pronated Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "One Arm Supinated Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "One Leg Barbell Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "One-Arm Dumbbell Row",
    "main_target": "Back",
    "equipment": "Dumbbell",
    "tags": [
      "Biceps",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "One-Arm Flat Bench Dumbbell Flye",
    "main_target": "Chest",
    "equipment": "Dumbbell"
  },
  {
    "name": "One-Arm High-Pulley Cable Side Bends",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "One-Arm Incline Lateral Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "One-Arm Kettlebell Clean",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Lower Back",
      "Shoulders",
      "Traps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Clean and Jerk",
    "main_target": "Shoulders",
    "equipment": "Kettlebells"
  },
  {
    "name": "One-Arm Kettlebell Floor Press",
    "main_target": "Chest",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Jerk",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Military Press To The Side",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Para Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Push Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Row",
    "main_target": "Back",
    "equipment": "Kettlebells",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "One-Arm Kettlebell Snatch",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back",
      "Traps",
      "Triceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Split Jerk",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Split Snatch",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Hamstrings",
      "Quadriceps"
    ]
  },
  {
    "name": "One-Arm Kettlebell Swings",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Lower Back",
      "Shoulders"
    ]
  },
  {
    "name": "One-Arm Long Bar Row",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "One-Arm Medicine Ball Slam",
    "main_target": "Abdominals",
    "equipment": "Medicine Ball",
    "tags": [
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "One-Arm Open Palm Kettlebell Clean",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Forearms",
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Shoulders"
    ]
  },
  {
    "name": "One-Arm Overhead Kettlebell Squats",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Shoulders"
    ]
  },
  {
    "name": "One-Arm Side Deadlift",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Abdominals",
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back",
      "Traps"
    ]
  },
  {
    "name": "One-Arm Side Laterals",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "One-Legged Cable Kickback",
    "main_target": "Legs",
    "equipment": "Cable",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Open Palm Kettlebell Clean",
    "main_target": "Legs",
    "equipment": "Kettlebells",
    "tags": [
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Shoulders"
    ]
  },
  {
    "name": "Otis-Up",
    "main_target": "Abdominals",
    "equipment": "Other",
    "tags": [
      "Chest",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Overhead Cable Curl",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Pallof Press",
    "main_target": "Abdominals",
    "equipment": "Cable",
    "tags": [
      "Chest",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Pallof Press With Rotation",
    "main_target": "Abdominals",
    "equipment": "Cable",
    "tags": [
      "Chest",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Palms-Down Dumbbell Wrist Curl Over A Bench",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Palms-Down Wrist Curl Over A Bench",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Palms-Up Barbell Wrist Curl Over A Bench",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Palms-Up Dumbbell Wrist Curl Over A Bench",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Parallel Bar Dip",
    "main_target": "Arms",
    "equipment": "Other",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Physioball Hip Bridge",
    "main_target": "Legs",
    "equipment": "Exercise Ball",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Plank",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Plate Pinch",
    "main_target": "Arms",
    "equipment": "Other"
  },
  {
    "name": "Plate Twist",
    "main_target": "Abdominals",
    "equipment": "Other"
  },
  {
    "name": "Platform Hamstring Slides",
    "main_target": "Legs",
    "equipment": "Other",
    "tags": [
      "Glutes"
    ]
  },
  {
    "name": "Plie Dumbbell Squat",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Abdominals",
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Plyo Kettlebell Pushups",
    "main_target": "Chest",
    "equipment": "Kettlebells",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Power Clean",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Forearms",
      "Glutes",
      "Lower Back",
      "Middle Back",
      "Quadriceps",
      "Shoulders",
      "Traps",
      "Triceps"
    ]
  },
  {
    "name": "Power Partials",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Preacher Curl",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Preacher Hammer Dumbbell Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Press Sit-Up",
    "main_target": "Abdominals",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Prone Manual Hamstring",
    "main_target": "Legs",
    "equipment": "None"
  },
  {
    "name": "Pull Through",
    "main_target": "Legs",
    "equipment": "Cable",
    "tags": [
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Pullups",
    "main_target": "Back",
    "equipment": "Body Only",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Push Up to Side Plank",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Push-Up Wide",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Abdominals",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Push-Ups - Close Triceps Position",
    "main_target": "Arms",
    "equipment": "Body Only",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Push-Ups With Feet Elevated",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Push-Ups With Feet On An Exercise Ball",
    "main_target": "Chest",
    "equipment": "Exercise Ball",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Pushups",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Pushups (Close and Wide Hand Positions)",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Reverse Barbell Curl",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Reverse Barbell Preacher Curls",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Reverse Cable Curl",
    "main_target": "Arms",
    "equipment": "Cable",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Reverse Crunch",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Reverse Flyes",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Reverse Flyes With External Rotation",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Reverse Grip Bent-Over Rows",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Reverse Grip Triceps Pushdown",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Reverse Hyperextension",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes"
    ]
  },
  {
    "name": "Reverse Machine Flyes",
    "main_target": "Shoulders",
    "equipment": "Machine"
  },
  {
    "name": "Reverse Plate Curls",
    "main_target": "Arms",
    "equipment": "Other",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Reverse Triceps Bench Press",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Ring Dips",
    "main_target": "Arms",
    "equipment": "Other",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Rocking Standing Calf Raise",
    "main_target": "Legs",
    "equipment": "Barbell"
  },
  {
    "name": "Rocky Pull-Ups/Pulldowns",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Romanian Deadlift",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Lower Back"
    ]
  },
  {
    "name": "Rope Climb",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Forearms",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Rope Crunch",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Rope Straight-Arm Pulldown",
    "main_target": "Back",
    "equipment": "Cable"
  },
  {
    "name": "Russian Twist",
    "main_target": "Abdominals",
    "equipment": "Body Only",
    "tags": [
      "Lower Back"
    ]
  },
  {
    "name": "Scapular Pull-Up",
    "main_target": "Back",
    "equipment": "None",
    "tags": [
      "Lats",
      "Middle Back"
    ]
  },
  {
    "name": "Seated Band Hamstring Curl",
    "main_target": "Legs",
    "equipment": "Other"
  },
  {
    "name": "Seated Barbell Military Press",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Seated Barbell Twist",
    "main_target": "Abdominals",
    "equipment": "Barbell"
  },
  {
    "name": "Seated Bent-Over One-Arm Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Bent-Over Rear Delt Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Bent-Over Two-Arm Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Cable Rows",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Seated Cable Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Seated Calf Raise",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Seated Close-Grip Concentration Barbell Curl",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Seated Dumbbell Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Dumbbell Inner Biceps Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Dumbbell Palms-Down Wrist Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Dumbbell Palms-Up Wrist Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Dumbbell Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Seated Flat Bench Leg Pull-In",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Seated Leg Curl",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Seated Leg Tucks",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Seated One-arm Cable Pulley Rows",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Lats",
      "Traps"
    ]
  },
  {
    "name": "Seated One-Arm Dumbbell Palms-Down Wrist Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Palm-Up Barbell Wrist Curl",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Seated Palms-Down Barbell Wrist Curl",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Seated Side Lateral Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Triceps Press",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "See-Saw Press (Alternating Side Press)",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Abdominals",
      "Triceps"
    ]
  },
  {
    "name": "Shotgun Row",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Shoulder Press - With Bands",
    "main_target": "Shoulders",
    "equipment": "Bands",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Side Bridge",
    "main_target": "Abdominals",
    "equipment": "Body Only",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Side Jackknife",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Side Lateral Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Side Laterals to Front Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Traps"
    ]
  },
  {
    "name": "Side To Side Chins",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Forearms",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Single Dumbbell Raise",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms",
      "Traps"
    ]
  },
  {
    "name": "Single Leg Glute Bridge",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Hamstrings"
    ]
  },
  {
    "name": "Single-Arm Cable Crossover",
    "main_target": "Chest",
    "equipment": "Cable"
  },
  {
    "name": "Single-Arm Linear Jammer",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Chest",
      "Triceps"
    ]
  },
  {
    "name": "Single-Arm Push-Up",
    "main_target": "Chest",
    "equipment": "Body Only",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Single-Leg High Box Squat",
    "main_target": "Legs",
    "equipment": "Other",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Single-Leg Leg Extension",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Sit-Up",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Sled Overhead Backward Walk",
    "main_target": "Shoulders",
    "equipment": "Other",
    "tags": [
      "Calves",
      "Middle Back",
      "Quadriceps"
    ]
  },
  {
    "name": "Sled Overhead Triceps Extension",
    "main_target": "Arms",
    "equipment": "Other"
  },
  {
    "name": "Sled Reverse Flye",
    "main_target": "Shoulders",
    "equipment": "Other"
  },
  {
    "name": "Sled Row",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Smith Incline Shoulder Raise",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Chest"
    ]
  },
  {
    "name": "Smith Machine Behind the Back Shrug",
    "main_target": "Back",
    "equipment": "Machine",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Smith Machine Bench Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Smith Machine Bent Over Row",
    "main_target": "Back",
    "equipment": "Machine",
    "tags": [
      "Biceps",
      "Lats",
      "Shoulders"
    ]
  },
  {
    "name": "Smith Machine Calf Raise",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Smith Machine Close-Grip Bench Press",
    "main_target": "Arms",
    "equipment": "Machine",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Smith Machine Decline Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Smith Machine Hang Power Clean",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Shoulders",
      "Traps"
    ]
  },
  {
    "name": "Smith Machine Hip Raise",
    "main_target": "Abdominals",
    "equipment": "Machine"
  },
  {
    "name": "Smith Machine Incline Bench Press",
    "main_target": "Chest",
    "equipment": "Machine",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Smith Machine Leg Press",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Smith Machine One-Arm Upright Row",
    "main_target": "Shoulders",
    "equipment": "Machine",
    "tags": [
      "Biceps",
      "Traps"
    ]
  },
  {
    "name": "Smith Machine Overhead Shoulder Press",
    "main_target": "Shoulders",
    "equipment": "Machine",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Smith Machine Pistol Squat",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Smith Machine Reverse Calf Raises",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Smith Machine Squat",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Smith Machine Stiff-Legged Deadlift",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Glutes",
      "Lower Back"
    ]
  },
  {
    "name": "Smith Machine Upright Row",
    "main_target": "Back",
    "equipment": "Machine",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Smith Single-Leg Split Squat",
    "main_target": "Legs",
    "equipment": "Machine",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Snatch Pull",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Lower Back",
      "Quadriceps",
      "Traps"
    ]
  },
  {
    "name": "Speed Band Overhead Triceps",
    "main_target": "Arms",
    "equipment": "Bands"
  },
  {
    "name": "Speed Squats",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Spell Caster",
    "main_target": "Abdominals",
    "equipment": "Dumbbell",
    "tags": [
      "Glutes",
      "Shoulders"
    ]
  },
  {
    "name": "Spider Crawl",
    "main_target": "Abdominals",
    "equipment": "Body Only",
    "tags": [
      "Chest",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Spider Curl",
    "main_target": "Arms",
    "equipment": "E-Z Curl Bar"
  },
  {
    "name": "Split Squat with Dumbbells",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Squat Jerk",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Squat with Plate Movers",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Abductors",
      "Adductors",
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Squats - With Bands",
    "main_target": "Legs",
    "equipment": "Bands",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Standing Alternating Dumbbell Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Standing Barbell Calf Raise",
    "main_target": "Legs",
    "equipment": "Barbell"
  },
  {
    "name": "Standing Barbell Press Behind Neck",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Standing Bent-Over One-Arm Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Standing Bent-Over Two-Arm Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Standing Biceps Cable Curl",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Standing Bradford Press",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Standing Cable Chest Press",
    "main_target": "Chest",
    "equipment": "Cable",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Standing Cable Lift",
    "main_target": "Abdominals",
    "equipment": "Cable",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Standing Cable Wood Chop",
    "main_target": "Abdominals",
    "equipment": "Cable",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Standing Calf Raises",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Standing Concentration Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Standing Dumbbell Calf Raise",
    "main_target": "Legs",
    "equipment": "Dumbbell"
  },
  {
    "name": "Standing Dumbbell Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Standing Dumbbell Reverse Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Standing Dumbbell Straight-Arm Front Delt Raise Above Head",
    "main_target": "Shoulders",
    "equipment": "Dumbbell"
  },
  {
    "name": "Standing Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Standing Dumbbell Upright Row",
    "main_target": "Back",
    "equipment": "Dumbbell",
    "tags": [
      "Biceps",
      "Shoulders"
    ]
  },
  {
    "name": "Standing Front Barbell Raise Over Head",
    "main_target": "Shoulders",
    "equipment": "Barbell"
  },
  {
    "name": "Standing Inner-Biceps Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Standing Leg Curl",
    "main_target": "Legs",
    "equipment": "Machine"
  },
  {
    "name": "Standing Low-Pulley Deltoid Raise",
    "main_target": "Shoulders",
    "equipment": "Cable",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Standing Low-Pulley One-Arm Triceps Extension",
    "main_target": "Arms",
    "equipment": "Cable",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Standing Military Press",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Standing Olympic Plate Hand Squeeze",
    "main_target": "Arms",
    "equipment": "Other",
    "tags": [
      "Biceps"
    ]
  },
  {
    "name": "Standing One-Arm Cable Curl",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Standing One-Arm Dumbbell Curl Over Incline Bench",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Standing One-Arm Dumbbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Standing Overhead Barbell Triceps Extension",
    "main_target": "Arms",
    "equipment": "Barbell",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Standing Palm-In One-Arm Dumbbell Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Standing Palms-In Dumbbell Press",
    "main_target": "Shoulders",
    "equipment": "Dumbbell",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Standing Palms-Up Barbell Behind The Back Wrist Curl",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Standing Rope Crunch",
    "main_target": "Abdominals",
    "equipment": "Cable"
  },
  {
    "name": "Standing Towel Triceps Extension",
    "main_target": "Arms",
    "equipment": "Body Only"
  },
  {
    "name": "Step-up with Knee Raise",
    "main_target": "Legs",
    "equipment": "Body Only",
    "tags": [
      "Hamstrings",
      "Quadriceps"
    ]
  },
  {
    "name": "Stiff Leg Barbell Good Morning",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Stiff-Legged Barbell Deadlift",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Glutes",
      "Lower Back"
    ]
  },
  {
    "name": "Stiff-Legged Dumbbell Deadlift",
    "main_target": "Legs",
    "equipment": "Dumbbell",
    "tags": [
      "Glutes",
      "Lower Back"
    ]
  },
  {
    "name": "Straight Bar Bench Mid Rows",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Straight Raises on Incline Bench",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Traps"
    ]
  },
  {
    "name": "Straight-Arm Dumbbell Pullover",
    "main_target": "Chest",
    "equipment": "Dumbbell",
    "tags": [
      "Lats",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Straight-Arm Pulldown",
    "main_target": "Back",
    "equipment": "Cable"
  },
  {
    "name": "Suspended Fallout",
    "main_target": "Abdominals",
    "equipment": "Other",
    "tags": [
      "Chest",
      "Lower Back",
      "Shoulders"
    ]
  },
  {
    "name": "Suspended Push-Up",
    "main_target": "Chest",
    "equipment": "Other",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Suspended Reverse Crunch",
    "main_target": "Abdominals",
    "equipment": "Other"
  },
  {
    "name": "Suspended Row",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Suspended Split Squat",
    "main_target": "Legs",
    "equipment": "Other",
    "tags": [
      "Abductors",
      "Adductors",
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Svend Press",
    "main_target": "Chest",
    "equipment": "Other",
    "tags": [
      "Forearms",
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "T-Bar Row with Handle",
    "main_target": "Back",
    "equipment": "Barbell",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Tate Press",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Trap Bar Deadlift",
    "main_target": "Legs",
    "equipment": "Other",
    "tags": [
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Tricep Dumbbell Kickback",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Triceps Overhead Extension with Rope",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Triceps Pushdown",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Triceps Pushdown - Rope Attachment",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Triceps Pushdown - V-Bar Attachment",
    "main_target": "Arms",
    "equipment": "Cable"
  },
  {
    "name": "Tuck Crunch",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Two-Arm Dumbbell Preacher Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell"
  },
  {
    "name": "Two-Arm Kettlebell Clean",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back",
      "Traps"
    ]
  },
  {
    "name": "Two-Arm Kettlebell Jerk",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Calves",
      "Quadriceps",
      "Triceps"
    ]
  },
  {
    "name": "Two-Arm Kettlebell Military Press",
    "main_target": "Shoulders",
    "equipment": "Kettlebells",
    "tags": [
      "Triceps"
    ]
  },
  {
    "name": "Two-Arm Kettlebell Row",
    "main_target": "Back",
    "equipment": "Kettlebells",
    "tags": [
      "Biceps",
      "Lats"
    ]
  },
  {
    "name": "Underhand Cable Pulldowns",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Upright Barbell Row",
    "main_target": "Shoulders",
    "equipment": "Barbell",
    "tags": [
      "Traps"
    ]
  },
  {
    "name": "Upright Cable Row",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Upright Row - With Bands",
    "main_target": "Back",
    "equipment": "Bands",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "V-Bar Pulldown",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "V-Bar Pullup",
    "main_target": "Back",
    "equipment": "Body Only",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Weighted Ball Hyperextension",
    "main_target": "Back",
    "equipment": "Exercise Ball",
    "tags": [
      "Glutes",
      "Hamstrings",
      "Middle Back"
    ]
  },
  {
    "name": "Weighted Ball Side Bend",
    "main_target": "Abdominals",
    "equipment": "Exercise Ball"
  },
  {
    "name": "Weighted Bench Dip",
    "main_target": "Arms",
    "equipment": "Other",
    "tags": [
      "Chest",
      "Shoulders"
    ]
  },
  {
    "name": "Weighted Crunches",
    "main_target": "Abdominals",
    "equipment": "Medicine Ball"
  },
  {
    "name": "Weighted Jump Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Weighted Pull Ups",
    "main_target": "Back",
    "equipment": "Other",
    "tags": [
      "Biceps",
      "Middle Back"
    ]
  },
  {
    "name": "Weighted Sissy Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Weighted Sit-Ups - With Bands",
    "main_target": "Abdominals",
    "equipment": "Other"
  },
  {
    "name": "Weighted Squat",
    "main_target": "Legs",
    "equipment": "Other",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Wide Stance Barbell Squat",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings",
      "Lower Back"
    ]
  },
  {
    "name": "Wide-Grip Barbell Bench Press",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Wide-Grip Decline Barbell Bench Press",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Wide-Grip Decline Barbell Pullover",
    "main_target": "Chest",
    "equipment": "Barbell",
    "tags": [
      "Shoulders",
      "Triceps"
    ]
  },
  {
    "name": "Wide-Grip Lat Pulldown",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Wide-Grip Pulldown Behind The Neck",
    "main_target": "Back",
    "equipment": "Cable",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Wide-Grip Rear Pull-Up",
    "main_target": "Back",
    "equipment": "Body Only",
    "tags": [
      "Biceps",
      "Middle Back",
      "Shoulders"
    ]
  },
  {
    "name": "Wide-Grip Standing Barbell Curl",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Wind Sprints",
    "main_target": "Abdominals",
    "equipment": "Body Only"
  },
  {
    "name": "Wrist Roller",
    "main_target": "Arms",
    "equipment": "Other",
    "tags": [
      "Shoulders"
    ]
  },
  {
    "name": "Wrist Rotations with Straight Bar",
    "main_target": "Arms",
    "equipment": "Barbell"
  },
  {
    "name": "Zercher Squats",
    "main_target": "Legs",
    "equipment": "Barbell",
    "tags": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ]
  },
  {
    "name": "Zottman Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  },
  {
    "name": "Zottman Preacher Curl",
    "main_target": "Arms",
    "equipment": "Dumbbell",
    "tags": [
      "Forearms"
    ]
  }
]
  return { db: db }
})
