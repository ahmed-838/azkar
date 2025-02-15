'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AthkarCard } from '@/components/AthkarCard';
import { morningAthkar } from '@/data/morning-athkar';

export function AthkarList() {
  const [completedCount, setCompletedCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleThikrComplete = () => {
    setCompletedCount(prev => prev + 1);
  };

  const categories = Array.from(new Set(morningAthkar.map(thikr => thikr.category)));
  const filteredAthkar = selectedCategory 
    ? morningAthkar.filter(thikr => thikr.category === selectedCategory)
    : morningAthkar;

  const progress = (completedCount / morningAthkar.length) * 100;

  return (
    <div>
      <div className="mb-8 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            تقدم الأذكار
          </span>
          <span className="text-sm font-medium">
            {completedCount} / {morningAthkar.length}
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

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm transition-colors
            ${!selectedCategory 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300'}`}
        >
          الكل
        </button>
        {categories.map(category => (
          category && (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors
                ${selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          )
        ))}
      </div>

      <div className="space-y-6">
        {filteredAthkar.map((thikr) => (
          <AthkarCard 
            key={thikr.id} 
            thikr={thikr}
            type="morning"
            onComplete={handleThikrComplete}
          />
        ))}
      </div>
    </div>
  );
}
