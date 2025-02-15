// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { PrayerThikr } from '@/data/prayer-athkar';

// interface ThikrCardProps {
//   thikr: PrayerThikr;
//   onComplete?: () => void;
// }

// export function ThikrCard({ thikr, onComplete }: ThikrCardProps) {
//   const [remainingCount, setRemainingCount] = useState(thikr.count);
//   const [completed, setCompleted] = useState(false);
//   const [showBenefit, setShowBenefit] = useState(false);

//   useEffect(() => {
//     const savedCount = localStorage.getItem(`prayer-thikr-${thikr.id}`);
//     if (savedCount) {
//       setRemainingCount(parseInt(savedCount));
//       setCompleted(parseInt(savedCount) === 0);
//     }
//   }, [thikr.id]);

//   const handleCount = () => {
//     if (remainingCount > 0) {
//       const newCount = remainingCount - 1;
//       setRemainingCount(newCount);
//       localStorage.setItem(`prayer-thikr-${thikr.id}`, newCount.toString());
      
//       if (newCount === 0) {
//         setCompleted(true);
//         onComplete?.();
//       }
//     }
//   };

//   const handleReset = () => {
//     setRemainingCount(thikr.count);
//     setCompleted(false);
//     localStorage.setItem(`prayer-thikr-${thikr.id}`, thikr.count.toString());
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`relative p-6 rounded-lg shadow-lg transition-all duration-300
//         ${completed 
//           ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
//           : 'bg-white dark:bg-gray-800'}`}
//     >
//       <div className="space-y-4">
//         <div className="flex justify-between items-start gap-4">
//           <p className="text-lg leading-relaxed">{thikr.text}</p>
//           <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
//             {thikr.reference}
//           </span>
//         </div>

//         {thikr.benefit && (
//           <div 
//             className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
//             onClick={() => setShowBenefit(!showBenefit)}
//           >
//             <span className="text-primary">الفضل: </span>
//             {thikr.benefit}
//           </div>
//         )}

//         <div className="flex justify-between items-center">
//           <div className="flex gap-2">
//             <button
//               onClick={handleCount}
//               disabled={remainingCount === 0}
//               className={`px-4 py-2 rounded-lg transition-all duration-300
//                 ${remainingCount > 0 
//                   ? 'bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg' 
//                   : 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'}`}
//             >
//               <span>تسبيح</span>
//               {completed && (
//                 <motion.span
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="text-green-500 mr-2"
//                 >
//                   ✓
//                 </motion.span>
//               )}
//             </button>
//             <button
//               onClick={handleReset}
//               className="p-2 text-gray-600 hover:text-primary dark:text-gray-400 
//                        dark:hover:text-primary transition-colors"
//             >
//               إعادة
//             </button>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <motion.span 
//               key={remainingCount}
//               initial={{ scale: 1.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="text-2xl font-medium"
//             >
//               {remainingCount}
//             </motion.span>
//             <span className="text-sm text-gray-600 dark:text-gray-400">
//               المتبقي
//             </span>
//           </div>
//         </div>
//       </div>

//       {completed && (
//         <motion.div
//           initial={{ width: '0%' }}
//           animate={{ width: '100%' }}
//           className="absolute bottom-0 left-0 h-1 bg-green-500"
//         />
//       )}
//     </motion.div>
//   );
// } 