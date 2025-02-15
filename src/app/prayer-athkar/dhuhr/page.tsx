import { prayers } from '@/data/prayer-athkar';
import { PrayerAthkarList } from '../components/PrayerAthkarList';
import { IoPlay } from 'react-icons/io5';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export default function DhuhrAthkarPage() {
  const prayer = prayers.find(p => p.id === 'dhuhr')!;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-left">
          <Link 
            href="/prayer-athkar"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <IoArrowBack size={20} />
            <span>العودة إلى قائمة الصلوات</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary mb-4">
            <IoPlay size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            أذكار صلاة {prayer.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {prayer.time}
          </p>
        </header>
        
        <div className="relative">
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center" />
          <PrayerAthkarList athkar={prayer.athkar} />
        </div>
      </div>
    </div>
  );
}
