module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/workouts.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "allWorkouts": ()=>allWorkouts,
    "availableEquipment": ()=>availableEquipment,
    "filterWorkoutsByCategoryAndEquipment": ()=>filterWorkoutsByCategoryAndEquipment,
    "getRandomWorkouts": ()=>getRandomWorkouts,
    "hasRequiredEquipment": ()=>hasRequiredEquipment
});
const allWorkouts = [
    // CHEST WORKOUTS
    {
        name: 'Chest Press Machine',
        category: 'chest',
        equipment: [
            'chest press'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=8iPEnov-l5U'
    },
    {
        name: 'Cable Crossover Flyes',
        category: 'chest',
        equipment: [
            'cable crossover machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o'
    },
    {
        name: 'Dumbbell Chest Press',
        category: 'chest',
        equipment: [
            'dumbbells',
            'weight bench'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=8iPEnov-l5U'
    },
    {
        name: 'Dumbbell Flyes',
        category: 'chest',
        equipment: [
            'dumbbells',
            'weight bench'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=eozdVDA78K0'
    },
    {
        name: 'Smith Machine Bench Press',
        category: 'chest',
        equipment: [
            'smith machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=8iPEnov-l5U'
    },
    // BACK WORKOUTS
    {
        name: 'Lat Pulldown',
        category: 'back',
        equipment: [
            'lat pulldown'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
    },
    {
        name: 'Seated Row Machine',
        category: 'back',
        equipment: [
            'seated row'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=G8l_8chR5BE'
    },
    {
        name: 'Cable Rows',
        category: 'back',
        equipment: [
            'cable crossover machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=G8l_8chR5BE'
    },
    {
        name: 'Dumbbell Rows',
        category: 'back',
        equipment: [
            'dumbbells',
            'weight bench'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=G8l_8chR5BE'
    },
    {
        name: 'Roman Chair Hyperextensions',
        category: 'back',
        equipment: [
            'roman chair'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ph3pddpKzzw'
    },
    // UPPER BODY WORKOUTS
    {
        name: 'Shoulder Press Machine',
        category: 'upper-body',
        equipment: [
            'shoulder press'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog'
    },
    {
        name: 'Triceps Press Machine',
        category: 'upper-body',
        equipment: [
            'triceps press'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=nRiJVZDpdL0'
    },
    {
        name: 'Dumbbell Shoulder Press',
        category: 'upper-body',
        equipment: [
            'dumbbells',
            'weight bench'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog'
    },
    {
        name: 'Dumbbell Lateral Raises',
        category: 'upper-body',
        equipment: [
            'dumbbells'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=3VcKaXpzqRo'
    },
    {
        name: 'Kettlebell Swings',
        category: 'upper-body',
        equipment: [
            'kettlebell'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=mKDIuUbH94Q'
    },
    {
        name: 'Assisted Pull-ups',
        category: 'upper-body',
        equipment: [
            'assisted pull-up and dip machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'
    },
    {
        name: 'Assisted Dips',
        category: 'upper-body',
        equipment: [
            'assisted pull-up and dip machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=2z8JmcrW-As'
    },
    // LOWER BODY WORKOUTS
    {
        name: 'Leg Press Machine',
        category: 'lower-body',
        equipment: [
            'leg press'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U'
    },
    {
        name: 'Leg Extension Machine',
        category: 'lower-body',
        equipment: [
            'leg extension'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=YyvSfVjQeL0'
    },
    {
        name: 'Leg Curl Machine',
        category: 'lower-body',
        equipment: [
            'leg curl'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs'
    },
    {
        name: 'Dumbbell Squats',
        category: 'lower-body',
        equipment: [
            'dumbbells'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U'
    },
    {
        name: 'Dumbbell Lunges',
        category: 'lower-body',
        equipment: [
            'dumbbells'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=3XDriUn0udo'
    },
    {
        name: 'Kettlebell Goblet Squats',
        category: 'lower-body',
        equipment: [
            'kettlebell'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=aNDUbH_Uv4g'
    },
    {
        name: 'Smith Machine Squats',
        category: 'lower-body',
        equipment: [
            'smith machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=aclHkVaku9U'
    },
    // CORE WORKOUTS
    {
        name: 'Abdominal Machine Crunches',
        category: 'core',
        equipment: [
            'abdominal machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Roman Chair Leg Raises',
        category: 'core',
        equipment: [
            'roman chair'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI'
    },
    {
        name: 'Dumbbell Russian Twists',
        category: 'core',
        equipment: [
            'dumbbells',
            'yoga mat'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Kettlebell Windmills',
        category: 'core',
        equipment: [
            'kettlebell'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Plank on Yoga Mat',
        category: 'core',
        equipment: [
            'yoga mat'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Cable Woodchoppers',
        category: 'core',
        equipment: [
            'cable crossover machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    // F45 STRENGTH WORKOUTS
    {
        name: 'F45 Panthers Strength',
        category: 'f45-strength',
        equipment: [
            'dumbbells',
            'weight bench'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
    },
    {
        name: 'F45 Leslie & Barry Home Strength',
        category: 'f45-strength',
        equipment: [
            'dumbbells'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=6gIQJWTg_jA'
    },
    {
        name: 'Kettlebell Goblet Squat',
        category: 'f45-strength',
        equipment: [
            'kettlebell'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=aNDUbH_Uv4g'
    },
    {
        name: 'Dumbbell Goblet Squat',
        category: 'f45-strength',
        equipment: [
            'dumbbells'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=6mf0oa2GGUc'
    },
    {
        name: 'Smith Machine F45 Strength',
        category: 'f45-strength',
        equipment: [
            'smith machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
    },
    {
        name: 'Cable Crossover F45 Strength',
        category: 'f45-strength',
        equipment: [
            'cable crossover machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
    },
    {
        name: 'Leg Press F45 Strength',
        category: 'f45-strength',
        equipment: [
            'leg press'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=i7rQUwsqYDg'
    },
    // FLEXIBILITY WORKOUTS
    {
        name: 'Yoga Mat Stretching',
        category: 'flexibility',
        equipment: [
            'yoga mat'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Reformer Stretching',
        category: 'flexibility',
        equipment: [
            'reformers'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Dumbbell Mobility Flow',
        category: 'flexibility',
        equipment: [
            'dumbbells'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Kettlebell Mobility',
        category: 'flexibility',
        equipment: [
            'kettlebell'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    },
    {
        name: 'Cable Stretching',
        category: 'flexibility',
        equipment: [
            'cable crossover machine'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c'
    }
];
const availableEquipment = [
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
function hasRequiredEquipment(workout) {
    return workout.equipment.every((item)=>availableEquipment.includes(item));
}
function getRandomWorkouts(workouts, count) {
    const shuffled = [
        ...workouts
    ].sort(()=>0.5 - Math.random());
    return shuffled.slice(0, count);
}
function filterWorkoutsByCategoryAndEquipment(category) {
    return allWorkouts.filter((workout)=>workout.category === category && hasRequiredEquipment(workout));
}
}),
"[project]/app/workout/[type]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>WorkoutPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$workouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/workouts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function WorkoutPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const type = params.type;
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [workoutCount, setWorkoutCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [typeCompletionCount, setTypeCompletionCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showTypeMessage, setShowTypeMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load workout count from localStorage on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedWorkouts = localStorage.getItem('workoutHistory');
        if (savedWorkouts) {
            const workouts = JSON.parse(savedWorkouts);
            const thisWeek = getWeekStart();
            const weeklyWorkouts = workouts.filter((timestamp)=>new Date(timestamp).getTime() >= thisWeek.getTime());
            setWorkoutCount(weeklyWorkouts.length);
        }
        // Load type-specific completion count
        const savedTypeCount = localStorage.getItem(`workoutType_${type}`);
        if (savedTypeCount) {
            setTypeCompletionCount(parseInt(savedTypeCount));
        }
    }, [
        type
    ]);
    // Helper function to get the start of the current week (Monday)
    const getWeekStart = ()=>{
        const now = new Date();
        const dayOfWeek = now.getDay();
        const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Monday = 1, Sunday = 0
        const monday = new Date(now);
        monday.setDate(now.getDate() - daysToSubtract);
        monday.setHours(0, 0, 0, 0);
        return monday;
    };
    // Get icon for workout type
    const getTypeIcon = (workoutType)=>{
        switch(workoutType){
            case 'upper-body':
                return '💪';
            case 'back':
                return '🔁';
            case 'lower-body':
                return '🦵';
            case 'flexibility':
                return '🧘';
            case 'chest':
                return '💪';
            case 'core':
                return '🔥';
            case 'f45-strength':
                return '🏆';
            default:
                return '💪';
        }
    };
    // Handle workout completion
    const handleWorkoutComplete = ()=>{
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
        const weeklyWorkouts = workouts.filter((ts)=>new Date(ts).getTime() >= thisWeek.getTime());
        setWorkoutCount(weeklyWorkouts.length);
        // Show success message
        setShowMessage(true);
        // Hide confetti after 3 seconds
        setTimeout(()=>{
            setShowConfetti(false);
        }, 3000);
        // Hide message after 5 seconds
        setTimeout(()=>{
            setShowMessage(false);
        }, 5000);
    };
    // Handle type-specific workout completion
    const handleTypeWorkoutComplete = ()=>{
        // Increment type completion count
        const newCount = typeCompletionCount + 1;
        setTypeCompletionCount(newCount);
        // Save to localStorage
        localStorage.setItem(`workoutType_${type}`, newCount.toString());
        // Show type-specific message
        setShowTypeMessage(true);
        // Hide message after 3 seconds
        setTimeout(()=>{
            setShowTypeMessage(false);
        }, 3000);
    };
    // Filter workouts based on category only (no equipment filtering)
    const filteredWorkouts = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$workouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allWorkouts"].filter((workout)=>workout.category === type);
    // Get first 6 workouts from filtered list
    const selectedWorkouts = filteredWorkouts.slice(0, 6);
    // Category display names
    const categoryNames = {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-block mb-4 text-white hover:text-yellow-200 transition-colors",
                            children: "← Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/app/workout/[type]/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg",
                            children: [
                                categoryNames[type] || type.charAt(0).toUpperCase() + type.slice(1),
                                " Workout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/workout/[type]/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white text-lg opacity-90 mb-6",
                            children: [
                                selectedWorkouts.length,
                                " exercises ready for you! 💪"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/workout/[type]/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 text-sm mb-2",
                                    children: "Times completed:"
                                }, void 0, false, {
                                    fileName: "[project]/app/workout/[type]/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center space-x-2",
                                    children: typeCompletionCount > 0 ? [
                                        ...Array(typeCompletionCount)
                                    ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl md:text-4xl animate-pulse",
                                            style: {
                                                animationDelay: `${index * 0.1}s`
                                            },
                                            children: getTypeIcon(type)
                                        }, index, false, {
                                            fileName: "[project]/app/workout/[type]/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/50 text-lg",
                                        children: "No completions yet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/workout/[type]/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/workout/[type]/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/workout/[type]/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 mb-8",
                    children: selectedWorkouts.map((workout, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl md:text-2xl font-bold text-white",
                                        children: workout.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/workout/[type]/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/80 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Equipment:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/workout/[type]/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            workout.equipment.join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/workout/[type]/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: workout.videoUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl text-sm md:text-base",
                                        children: "🎥 Watch Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/workout/[type]/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/workout/[type]/page.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/workout/[type]/page.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleTypeWorkoutComplete,
                        className: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95",
                        children: "✅ I Did This Workout"
                    }, void 0, false, {
                        fileName: "[project]/app/workout/[type]/page.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleWorkoutComplete,
                        className: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl md:text-2xl py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95",
                        children: "🎉 Complete All Workouts"
                    }, void 0, false, {
                        fileName: "[project]/app/workout/[type]/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                showTypeMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-semibold",
                            children: [
                                "🎉 Great job! You've done this ",
                                typeCompletionCount,
                                " times!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/workout/[type]/page.tsx",
                            lineNumber: 231,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/workout/[type]/page.tsx",
                        lineNumber: 230,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this),
                showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-16 left-1/2 transform -translate-x-1/2 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-semibold",
                            children: [
                                "🎉 You've worked out ",
                                workoutCount,
                                " days this week!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/workout/[type]/page.tsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/workout/[type]/page.tsx",
                        lineNumber: 241,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 240,
                    columnNumber: 11
                }, this),
                showConfetti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 pointer-events-none z-40",
                    children: [
                        [
                            ...Array(50)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute animate-ping",
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${1 + Math.random() * 2}s`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 bg-yellow-400 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/workout/[type]/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/workout/[type]/page.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)),
                        [
                            ...Array(30)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute animate-bounce",
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 1}s`,
                                    animationDuration: `${1 + Math.random() * 1}s`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 bg-pink-400 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/workout/[type]/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 17
                                }, this)
                            }, i + 50, false, {
                                fileName: "[project]/app/workout/[type]/page.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 251,
                    columnNumber: 11
                }, this),
                selectedWorkouts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "No exercises found 😔"
                            }, void 0, false, {
                                fileName: "[project]/app/workout/[type]/page.tsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 mb-6",
                                children: "No exercises found for this category."
                            }, void 0, false, {
                                fileName: "[project]/app/workout/[type]/page.tsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-block bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105",
                                children: "← Back to Home"
                            }, void 0, false, {
                                fileName: "[project]/app/workout/[type]/page.tsx",
                                lineNumber: 293,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/workout/[type]/page.tsx",
                        lineNumber: 286,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/workout/[type]/page.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/workout/[type]/page.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/workout/[type]/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__fb878058._.js.map