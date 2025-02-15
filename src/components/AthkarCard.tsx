'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoRepeat, IoCheckmark, IoInformation, IoBookmark } from 'react-icons/io5';
import { Thikr } from '@/data/morning-athkar';

interface AthkarCardProps {
  thikr: Thikr;
  type: 'morning' | 'evening';
  onComplete?: () => void;
}

export function AthkarCard({ thikr, type, onComplete }: AthkarCardProps) {
  const [remainingCount, setRemainingCount] = useState(thikr.count);
  const [completed, setCompleted] = useState(false);
  const [showBenefit, setShowBenefit] = useState(false);

  useEffect(() => {
    const savedCount = localStorage.getItem(`${type}-thikr-${thikr.id}`);
    if (savedCount) {
      setRemainingCount(parseInt(savedCount));
      setCompleted(parseInt(savedCount) === 0);
    }
  }, [thikr.id, type]);

  const handleCount = () => {
    if (remainingCount > 0) {
      const newCount = remainingCount - 1;
      setRemainingCount(newCount);
      localStorage.setItem(`${type}-thikr-${thikr.id}`, newCount.toString());
      
      if (newCount === 0) {
        setCompleted(true);
        onComplete?.();
      }
    }
  };

  const handleReset = () => {
    setRemainingCount(thikr.count);
    setCompleted(false);
    localStorage.setItem(`${type}-thikr-${thikr.id}`, thikr.count.toString());
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative group overflow-hidden rounded-3xl transition-all duration-500
        ${completed 
          ? 'bg-gradient-to-br from-green-50/90 to-green-100/90 dark:from-green-900/20 dark:to-green-800/20' 
          : 'bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90'}
        hover:shadow-2xl hover:shadow-primary/20 border border-primary/5`}
    >
      {/* نمط زخرفي إسلامي */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center" />

      <div className="relative p-6 md:p-8 space-y-5">
        {/* علامة الإكمال */}
        <AnimatePresence>
          {completed && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-4 left-4 bg-green-500/90 text-white p-2 rounded-full shadow-lg backdrop-blur-sm"
            >
              <IoCheckmark size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* محتوى الذكر */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl md:text-2xl leading-relaxed font-arabic font-medium">{thikr.text}</h3>
            <IoBookmark className="text-primary/30 hover:text-primary/60 transition-colors" size={24} />
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {thikr.reference && (
              <span className="px-4 py-1.5 rounded-full text-sm bg-primary/10 text-primary/90 font-medium">
                {thikr.reference}
              </span>
            )}
            {thikr.category && (
              <span className="px-4 py-1.5 rounded-full text-sm bg-gray-100/80 dark:bg-gray-700/50">
                {thikr.category}
              </span>
            )}
            {thikr.benefit && (
              <button
                onClick={() => setShowBenefit(!showBenefit)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm
                         bg-gray-100/80 dark:bg-gray-700/50 hover:bg-primary/10 
                         text-gray-600 dark:text-gray-300 hover:text-primary transition-all"
              >
                <IoInformation size={16} />
                فضل الذكر
              </button>
            )}
          </div>
        </div>

        {/* فضل الذكر */}
        <AnimatePresence>
          {showBenefit && thikr.benefit && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10
                        border border-primary/10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <IoInformation className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {thikr.benefit}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* أزرار التحكم والعداد */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleCount}
              disabled={remainingCount === 0}
              className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                remainingCount > 0 
                  ? 'bg-gradient-to-br from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'
                  : 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'
              }`}
            >
              {completed ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2 font-medium"
                >
                  <IoCheckmark size={22} />
                  تم التسبيح
                </motion.span>
              ) : (
                <span className="font-medium">تسبيح</span>
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleReset}
              className="p-4 rounded-xl text-gray-600 hover:text-primary dark:text-gray-400 
                       dark:hover:text-primary transition-colors hover:bg-primary/10"
            >
              <IoRepeat size={22} />
            </motion.button>
          </div>
          
          <div className="flex flex-col items-end">
            <motion.div 
              key={remainingCount}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-primary"
            >
              {remainingCount}
            </motion.div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              العدد المتبقي
            </span>
          </div>
        </div>
      </div>

      {/* شريط التقدم */}
      {completed && (
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-400"
        />
      )}
    </motion.div>
  );
}
