export interface Workout {
  name: string;
  category: 'chest' | 'back' | 'upper-body' | 'lower-body' | 'core' | 'f45-strength' | 'flexibility';
  equipment: string[];
  videoUrl: string;
}

export const allWorkouts: Workout[] = [
  // CHEST WORKOUTS
  {
    name: 'Chest Press Machine',
    category: 'chest',
    equipment: ['chest press'],
    videoUrl: 'https://www.youtube.com/watch?v=8iPEnov-l5U'
  },
  {
    name: 'Cable Crossover Flyes',
    category: 'chest',
    equipment: ['cable crossover machine'],
    videoUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o'
  },
  {
    name: 'Dumbbell Chest Press',
    category: 'chest',
    equipment: ['dumbbells', 'weight bench'],
    videoUrl: 'https://www.youtube.com/watch?v=8iPEnov-l5U'
  },
  {
    name: 'Dumbbell Flyes',
    category: 'chest',
    equipment: ['dumbbells', 'weight bench'],
    videoUrl: 'https://www.youtube.com/watch?v=eozdVDA78K0'
  },
  {
    name: 'Smith Machine Bench Press',
    category: 'chest',
    equipment: ['smith machine'],
    videoUrl: 'https://www.youtube.com/watch?v=8iPEnov-l5U'
  },

  // BACK WORKOUTS
  {
    name: 'Lat Pulldown',
    category: 'back',
    equipment: ['lat pulldown'],
    videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
  },
  {
    name: 'Seated Row Machine',
    category: 'back',
    equipment: ['seated row'],
    videoUrl: 'https://www.youtube.com/watch?v=G8l_8chR5BE'
  },
  {
    name: 'Cable Rows',
    category: 'back',
    equipment: ['cable crossover machine'],
    videoUrl: 'https://www.youtube.com/watch?v=G8l_8chR5BE'
  },
  {
    name: 'Dumbbell Rows',
    category: 'back',
    equipment: ['dumbbells', 'weight bench'],
    videoUrl: 'https://www.youtube.com/watch?v=G8l_8chR5BE'
  },
  {
    name: 'Roman Chair Hyperextensions',
    category: 'back',
    equipment: ['roman chair'],
    videoUrl: 'https://www.youtube.com/watch?v=ph3pddpKzzw'
  },

  // UPPER BODY WORKOUTS
  {
    name: 'Shoulder Press Machine',
    category: 'upper-body',
    equipment: ['shoulder press'],
    videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog'
  },
  {
    name: 'Triceps Press Machine',
    category: 'upper-body',
    equipment: ['triceps press'],
    videoUrl: 'https://www.youtube.com/watch?v=nRiJVZDpdL0'
  },
  {
    name: 'Dumbbell Shoulder Press',
    category: 'upper-body',
    equipment: ['dumbbells', 'weight bench'],
    videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog'
  },
  {
    name: 'Dumbbell Lateral Raises',
    category: 'upper-body',
    equipment: ['dumbbells'],
    videoUrl: 'https://www.youtube.com/watch?v=3VcKaXpzqRo'
  },
  {
    name: 'Kettlebell Swings',
    category: 'upper-body',
    equipment: ['kettlebell'],
    videoUrl: 'https://www.youtube.com/watch?v=mKDIuUbH94Q'
  },
  {
    name: 'Assisted Pull-ups',
    category: 'upper-body',
    equipment: ['assisted pull-up and dip machine'],
    videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
  },
  {
    name: 'Assisted Dips',
    category: 'upper-body',
    equipment: ['assisted pull-up and dip machine'],
    videoUrl: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
  },

  // LOWER BODY WORKOUTS
  {
    name: 'Leg Press Machine',
    category: 'lower-body',
    equipment: ['leg press'],
    videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U'
  },
  {
    name: 'Leg Extension Machine',
    category: 'lower-body',
    equipment: ['leg extension'],
    videoUrl: 'https://www.youtube.com/watch?v=YyvSfVjQeL0'
  },
  {
    name: 'Leg Curl Machine',
    category: 'lower-body',
    equipment: ['leg curl'],
    videoUrl: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs'
  },
  {
    name: 'Dumbbell Squats',
    category: 'lower-body',
    equipment: ['dumbbells'],
    videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U'
  },
  {
    name: 'Dumbbell Lunges',
    category: 'lower-body',
    equipment: ['dumbbells'],
    videoUrl: 'https://www.youtube.com/watch?v=3XDriUn0udo'
  },
  {
    name: 'Kettlebell Goblet Squats',
    category: 'lower-body',
    equipment: ['kettlebell'],
    videoUrl: 'https://www.youtube.com/watch?v=aNDUbH_Uv4g'
  },
  {
    name: 'Smith Machine Squats',
    category: 'lower-body',
    equipment: ['smith machine'],
    videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U'
  },

  // CORE WORKOUTS
  {
    name: 'Abdominal Machine Crunches',
    category: 'core',
    equipment: ['abdominal machine'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Roman Chair Leg Raises',
    category: 'core',
    equipment: ['roman chair'],
    videoUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI'
  },
  {
    name: 'Dumbbell Russian Twists',
    category: 'core',
    equipment: ['dumbbells', 'yoga mat'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Kettlebell Windmills',
    category: 'core',
    equipment: ['kettlebell'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Plank on Yoga Mat',
    category: 'core',
    equipment: ['yoga mat'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Cable Woodchoppers',
    category: 'core',
    equipment: ['cable crossover machine'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },

  // F45 STRENGTH WORKOUTS
  {
    name: 'F45 Panthers Strength',
    category: 'f45-strength',
    equipment: ['dumbbells', 'weight bench'],
    videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
  },
  {
    name: 'F45 Leslie & Barry Home Strength',
    category: 'f45-strength',
    equipment: ['dumbbells'],
    videoUrl: 'https://www.youtube.com/watch?v=6gIQJWTg_jA'
  },
  {
    name: 'Kettlebell Goblet Squat',
    category: 'f45-strength',
    equipment: ['kettlebell'],
    videoUrl: 'https://www.youtube.com/watch?v=aNDUbH_Uv4g'
  },
  {
    name: 'Dumbbell Goblet Squat',
    category: 'f45-strength',
    equipment: ['dumbbells'],
    videoUrl: 'https://www.youtube.com/watch?v=6mf0oa2GGUc'
  },
  {
    name: 'Smith Machine F45 Strength',
    category: 'f45-strength',
    equipment: ['smith machine'],
    videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
  },
  {
    name: 'Cable Crossover F45 Strength',
    category: 'f45-strength',
    equipment: ['cable crossover machine'],
    videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
  },
  {
    name: 'Leg Press F45 Strength',
    category: 'f45-strength',
    equipment: ['leg press'],
    videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
  },

  // FLEXIBILITY WORKOUTS
  {
    name: 'Yoga Mat Stretching',
    category: 'flexibility',
    equipment: ['yoga mat'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Reformer Stretching',
    category: 'flexibility',
    equipment: ['reformers'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Dumbbell Mobility Flow',
    category: 'flexibility',
    equipment: ['dumbbells'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Kettlebell Mobility',
    category: 'flexibility',
    equipment: ['kettlebell'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  },
  {
    name: 'Cable Stretching',
    category: 'flexibility',
    equipment: ['cable crossover machine'],
    videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
  }
];

// Available equipment for filtering
export const availableEquipment = [
  'yoga mat',
  'reformers',
  'leg press',
  'leg curl',
  'leg extension',
  'abdominal machine',
  'chest press',
  'shoulder press',
  'smith machine',
  'lat pulldown',
  'triceps press',
  'seated row',
  'cable crossover machine',
  'assisted pull-up and dip machine',
  'roman chair',
  'dumbbells',
  'weight bench',
  'kettlebell'
];

// Helper function to check if all equipment is available
export function hasRequiredEquipment(workout: Workout): boolean {
  return workout.equipment.every(item => availableEquipment.includes(item));
}

// Helper function to shuffle array and get random items
export function getRandomWorkouts(workouts: Workout[], count: number): Workout[] {
  const shuffled = [...workouts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to filter workouts by category and equipment
export function filterWorkoutsByCategoryAndEquipment(category: string): Workout[] {
  return allWorkouts.filter(workout => 
    workout.category === category && hasRequiredEquipment(workout)
  );
} 