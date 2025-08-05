import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-4">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 drop-shadow-lg">
        🏋️ Yichen's Fun Workout Game
      </h1>
      
      {/* Buttons Container */}
      <div className="w-full max-w-md space-y-4">
        {/* Surprise Me Button */}
        <Link href="/workout/random" className="block">
          <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-xl md:text-2xl py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
            🎲 Surprise Me
          </button>
        </Link>
        
        {/* Upper Body Button */}
        <Link href="/workout/upper-body" className="block">
          <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold text-xl md:text-2xl py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
            💪 Upper Body
          </button>
        </Link>
        
        {/* Back Button */}
        <Link href="/workout/back" className="block">
          <button className="w-full bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600 text-white font-bold text-xl md:text-2xl py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
            🔁 Back
          </button>
        </Link>
        
        {/* Lower Body Button */}
        <Link href="/workout/lower-body" className="block">
          <button className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-bold text-xl md:text-2xl py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
            🦵 Lower Body
          </button>
        </Link>
        
        {/* Balance & Flexibility Button */}
        <Link href="/workout/flexibility" className="block">
          <button className="w-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold text-xl md:text-2xl py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
            🧘 Balance & Flexibility
          </button>
        </Link>
        
        {/* F45 Strength Button */}
        <Link href="/workout/f45-strength" className="block">
          <button className="w-full bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold text-xl md:text-2xl py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
            🏆 F45 Strength
          </button>
        </Link>
      </div>
      
      {/* Fun subtitle */}
      <p className="text-white text-lg md:text-xl text-center mt-8 opacity-90">
        Choose your adventure! 🚀
      </p>
    </div>
  );
}
