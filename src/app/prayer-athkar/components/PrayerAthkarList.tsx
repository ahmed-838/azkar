'use client';

import { AthkarCard } from '@/components/AthkarCard';
import { PrayerThikr } from '@/data/prayer-athkar';

interface Props {
  athkar: PrayerThikr[];
}

export function PrayerAthkarList({ athkar }: Props) {
  if (!athkar || athkar.length === 0) {
    return <div>لا توجد أذكار</div>;
  }

  return (
    <div className="space-y-6">
      {athkar.map((thikr) => (
        <AthkarCard 
          key={thikr.id}
          thikr={thikr}
          type="evening"
        />
      ))}
    </div>
  );
} 