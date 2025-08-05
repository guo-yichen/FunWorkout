# 🏋️ Yichen's Fun Workout Game

A modern, mobile-friendly fitness app built with Next.js and Tailwind CSS that helps you stay motivated and track your workout progress with fun animations and comprehensive exercise tracking.

## ✨ Features

### 🎯 Workout Categories
- **💪 Upper Body** - Shoulder presses, triceps work, assisted pull-ups
- **🔁 Back** - Lat pulldowns, seated rows, cable rows, hyperextensions
- **🦵 Lower Body** - Leg press, extensions, squats, lunges
- **🧘 Balance & Flexibility** - Stretching and mobility exercises
- **🎲 Surprise Me** - Random workout selection
- **🏆 F45 Strength** - High-intensity strength training

### 📊 Progress Tracking
- **Workout Completion Icons** - Visual representation of how many times you've completed each workout type
- **Weekly Progress** - Track how many days you've worked out this week
- **Persistent Storage** - All progress saved in localStorage
- **Real-time Updates** - See your progress update immediately

### 🎨 Interactive Features
- **Confetti Animations** - Celebrate your workout completions
- **Hover Effects** - Smooth animations and visual feedback
- **Responsive Design** - Works perfectly on mobile and desktop
- **Video Demonstrations** - YouTube links for proper exercise form

### 🏋️ Exercise Database
- **42+ Exercises** across 7 categories
- **Equipment Matching** - Shows exercises based on available gym equipment
- **Real Video Links** - Proper demonstration videos for each exercise
- **Equipment Types**:
  - Machines (chest press, leg press, lat pulldown, etc.)
  - Free weights (dumbbells, kettlebells)
  - Accessories (yoga mat, reformers)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FunWorkout
   ```

2. **Navigate to the project directory**
   ```bash
   cd my-fitness-game
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal)

## 📱 How to Use

### 1. Choose Your Workout
- Select from the main menu of workout categories
- Each button navigates to a specific workout type
- "Surprise Me" gives you a random workout selection

### 2. View Exercises
- Each workout page shows up to 6 exercises
- Exercise cards display:
  - Exercise name
  - Required equipment
  - Video demonstration link

### 3. Track Your Progress
- Click "✅ I Did This Workout" to mark completion
- See completion icons update in real-time
- View your weekly workout count

### 4. Complete Workouts
- Use "🎉 Complete All Workouts" for general tracking
- Enjoy confetti animations and success messages
- Track your progress over time

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **State Management**: React hooks (useState, useEffect)
- **Storage**: localStorage for persistence
- **Animations**: CSS animations and Tailwind utilities

## 📁 Project Structure

```
my-fitness-game/
├── app/
│   ├── page.tsx                 # Home page with workout categories
│   ├── workouts.ts              # Exercise database and utilities
│   ├── workout/
│   │   └── [type]/
│   │       └── page.tsx         # Dynamic workout pages
│   ├── globals.css              # Global styles and Tailwind imports
│   └── layout.tsx               # Root layout
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🎯 Key Features Explained

### Workout Tracking System
- **Type-specific tracking**: Each workout category has its own completion counter
- **Weekly tracking**: General workout completion tracking for the current week
- **Visual feedback**: Icons and animations provide immediate feedback
- **Persistent storage**: All data saved locally in the browser

### Exercise Database
- **Comprehensive coverage**: 42+ exercises across all major muscle groups
- **Equipment-based filtering**: Shows exercises based on available equipment
- **Real video links**: YouTube demonstrations for proper form
- **Categorized organization**: Easy to find exercises by muscle group

### User Experience
- **Mobile-first design**: Optimized for touch devices
- **Smooth animations**: Hover effects, transitions, and celebrations
- **Intuitive navigation**: Clear buttons and easy-to-understand interface
- **Progress motivation**: Visual progress tracking keeps users engaged

## 🔧 Customization

### Adding New Exercises
Edit `app/workouts.ts` to add new exercises:
```typescript
{
  name: 'Exercise Name',
  category: 'category-name',
  equipment: ['equipment1', 'equipment2'],
  videoUrl: 'https://youtube.com/watch?v=...'
}
```

### Modifying Equipment
Update the `availableEquipment` array in `app/workouts.ts` to match your gym setup.

### Styling Changes
The app uses Tailwind CSS - modify classes in the components to change appearance.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** for the amazing React framework
- **Tailwind CSS** for the utility-first styling
- **YouTube** for exercise demonstration videos
- **F45** for inspiration on high-intensity training

---

**Made with ❤️ by Yichen** - Keep pushing your limits! 💪
