'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AthkarCard } from '@/components/AthkarCard';
import { eveningAthkar } from '../../../data/evening-athkar';

export function AthkarList() {
  const [completedCount, setCompletedCount] = useState(0);

  const handleThikrComplete = () => {
    setCompletedCount(prev => prev + 1);
  };

  const progress = (completedCount / eveningAthkar.length) * 100;

  return (
    <div>
      <div className="mb-8 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            تقدم الأذكار
          </span>
          <span className="text-sm font-medium">
            {completedCount} / {eveningAthkar.length}
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
        {eveningAthkar.map((thikr) => (
          <AthkarCard 
            key={thikr.id} 
            thikr={thikr}
            type="evening"
            onComplete={handleThikrComplete}
          />
        ))}
      </div>
    </div>
  );
}
