'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrayerThikr } from '@/data/prayer-athkar';
import { ThikrCard } from '@/components/ThikrCard';

interface PrayerAthkarListProps {
  athkar: PrayerThikr[];
}

export function PrayerAthkarList({ athkar }: PrayerAthkarListProps) {
  const [completedCount, setCompletedCount] = useState(0);

  const handleThikrComplete = () => {
    setCompletedCount(prev => prev + 1);
  };

  const progress = (completedCount / athkar.length) * 100;

  return (
    <div className="space-y-8">
      <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg sticky top-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            تقدم الأذكار
          </span>
          <span className="text-sm font-medium">
            {completedCount} / {athkar.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-primary"
          />
        </div>
      </div>

      <div className="space-y-6">
        {athkar.map((thikr) => (
          <ThikrCard 
            key={thikr.id} 
            thikr={thikr}
            onComplete={handleThikrComplete}
          />
        ))}
      </div>
    </div>
  );
} 