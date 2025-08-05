'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  allWorkouts, 
  type Workout 
} from '../../workouts';

export default function WorkoutPage() {
  const params = useParams();
  const type = params.type as string;
  const [showConfetti, setShowConfetti] = useState(false);
  const [workoutCount, setWorkoutCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [typeCompletionCount, setTypeCompletionCount] = useState(0);
  const [showTypeMessage, setShowTypeMessage] = useState(false);

  // Load workout count from localStorage on component mount
  useEffect(() => {
    const savedWorkouts = localStorage.getItem('workoutHistory');
    if (savedWorkouts) {
      const workouts = JSON.parse(savedWorkouts);
      const thisWeek = getWeekStart();
      const weeklyWorkouts = workouts.filter((timestamp: number) => 
        new Date(timestamp).getTime() >= thisWeek.getTime()
      );
      setWorkoutCount(weeklyWorkouts.length);
    }

    // Load type-specific completion count
    const savedTypeCount = localStorage.getItem(`workoutType_${type}`);
    if (savedTypeCount) {
      setTypeCompletionCount(parseInt(savedTypeCount));
    }
  }, [type]);

  // Helper function to get the start of the current week (Monday)
  const getWeekStart = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Monday = 1, Sunday = 0
    const monday = new Date(now);
    monday.setDate(now.getDate() - daysToSubtract);
    monday.setHours(0, 0, 0, 0);
    return monday;
  };

  // Get icon for workout type
  const getTypeIcon = (workoutType: string) => {
    switch (workoutType) {
      case 'upper-body': return '💪';
      case 'back': return '🔁';
      case 'lower-body': return '🦵';
      case 'flexibility': return '🧘';
      case 'chest': return '💪';
      case 'core': return '🔥';
      case 'f45-strength': return '🏆';
      default: return '💪';
    }
  };

  // Handle workout completion
  const handleWorkoutComplete = () => {
    // Show confetti animation
    setShowConfetti(true);
    
    // Save timestamp to localStorage
    const timestamp = Date.now();
    const savedWorkouts = localStorage.getItem('workoutHistory');
    const workouts = savedWorkouts ? JSON.parse(savedWorkouts) : [];
    workouts.push(timestamp);
    localStorage.setItem('workoutHistory', JSON.stringify(workouts));
    
    // Update workout count
    const thisWeek = getWeekStart();
    const weeklyWorkouts = workouts.filter((ts: number) => 
      new Date(ts).getTime() >= thisWeek.getTime()
    );
    setWorkoutCount(weeklyWorkouts.length);
    
    // Show success message
    setShowMessage(true);
    
    // Hide confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
    
    // Hide message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  // Handle type-specific workout completion
  const handleTypeWorkoutComplete = () => {
    // Increment type completion count
    const newCount = typeCompletionCount + 1;
    setTypeCompletionCount(newCount);
    
    // Save to localStorage
    localStorage.setItem(`workoutType_${type}`, newCount.toString());
    
    // Show type-specific message
    setShowTypeMessage(true);
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowTypeMessage(false);
    }, 3000);
  };

  // Filter workouts based on category only (no equipment filtering)
  const filteredWorkouts = allWorkouts.filter((workout: Workout) => 
    workout.category === type
  );

  // Get first 6 workouts from filtered list
  const selectedWorkouts = filteredWorkouts.slice(0, 6);

  // Category display names
  const categoryNames: { [key: string]: string } = {
    'chest': 'Chest',
    'back': 'Back',
    'upper-body': 'Upper Body',
    'lower-body': 'Lower Body',
    'core': 'Core',
    'f45-strength': 'F45 Strength',
    'flexibility': 'Balance & Flexibility',
    'random': 'Random Mix',
    'strength': 'Strength Training'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link 
            href="/" 
            className="inline-block mb-4 text-white hover:text-yellow-200 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            {categoryNames[type] || type.charAt(0).toUpperCase() + type.slice(1)} Workout
          </h1>
          <p className="text-white text-lg opacity-90 mb-6">
            {selectedWorkouts.length} exercises ready for you! 💪
          </p>

          {/* Completion Icons Row */}
          <div className="mb-6">
            <p className="text-white/80 text-sm mb-2">Times completed:</p>
            <div className="flex justify-center items-center space-x-2">
              {typeCompletionCount > 0 ? (
                [...Array(typeCompletionCount)].map((_, index) => (
                  <span 
                    key={index}
                    className="text-3xl md:text-4xl animate-pulse"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {getTypeIcon(type)}
                  </span>
                ))
              ) : (
                <span className="text-white/50 text-lg">No completions yet</span>
              )}
            </div>
          </div>
        </div>

        {/* Workout Cards - Vertical List */}
        <div className="space-y-4 mb-8">
          {selectedWorkouts.map((workout: Workout, index: number) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Exercise Name */}
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {workout.name}
                </h3>
                
                {/* Equipment */}
                <p className="text-white/80 text-sm">
                  <span className="font-semibold">Equipment:</span> {workout.equipment.join(', ')}
                </p>

                {/* Watch Demo Link */}
                <a
                  href={workout.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl text-sm md:text-base"
                >
                  🎥 Watch Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* I Did This Workout Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleTypeWorkoutComplete}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            ✅ I Did This Workout
          </button>
        </div>

        {/* Workout Complete Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleWorkoutComplete}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            🎉 Complete All Workouts
          </button>
        </div>

        {/* Type-specific Success Message */}
        {showTypeMessage && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg animate-bounce">
              <p className="text-lg font-semibold">
                🎉 Great job! You've done this {typeCompletionCount} times!
              </p>
            </div>
          </div>
        )}

        {/* Success Message */}
        {showMessage && (
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg animate-bounce">
              <p className="text-lg font-semibold">
                🎉 You've worked out {workoutCount} days this week!
              </p>
            </div>
          </div>
        )}

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-40">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
            ))}
            {[...Array(30)].map((_, i) => (
              <div
                key={i + 50}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1}s`,
                  animationDuration: `${1 + Math.random() * 1}s`,
                }}
              >
                <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
              </div>
            ))}
          </div>
        )}

        {/* No workouts found message */}
        {selectedWorkouts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                No exercises found 😔
              </h3>
              <p className="text-white/80 mb-6">
                No exercises found for this category.
              </p>
              <Link 
                href="/"
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 