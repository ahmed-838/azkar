'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { prayers } from '@/data/prayer-athkar';
import { IoMoon, IoSunny, IoTime, IoChevronBack } from 'react-icons/io5';

export function PrayerList() {
  const getPrayerIcon = (prayerId: string) => {
    switch (prayerId) {
      case 'fajr':
        return <IoSunny className="rotate-180" size={24} />;
      case 'dhuhr':
      case 'asr':
        return <IoSunny size={24} />;
      case 'maghrib':
      case 'isha':
        return <IoMoon size={24} />;
      default:
        return <IoSunny size={24} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prayers.map((prayer, index) => (
          <Link 
            key={prayer.id}
            href={`/prayer-athkar/${prayer.id}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[200px] overflow-hidden rounded-3xl transition-all duration-500
                bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90
                hover:shadow-2xl hover:shadow-primary/20 border border-primary/5
                hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* نمط زخرفي إسلامي */}
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center" />

              <div className="relative h-full p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary">
                      {getPrayerIcon(prayer.id)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        صلاة {prayer.name}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <IoTime className="text-primary/60" size={16} />
                        <span>{prayer.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center
                              group-hover:bg-primary/20 transition-colors">
                    <IoChevronBack className="text-primary group-hover:translate-x-0.5 transition-transform" size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
} 