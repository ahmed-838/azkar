import { prayers } from '@/data/prayer-athkar';
import { AthkarList } from '@/app/evening-athkar/components/AthkarList';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return prayers.map((prayer) => ({
    id: prayer.id,
  }));
}

export default function PrayerPage({ params }: { params: { id: string } }) {
  const prayer = prayers.find((p) => p.id === params.id);

  if (!prayer) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4">
            أذكار صلاة {prayer.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {prayer.time}
          </p>
        </header>
        
        <AthkarList />
      </div>
    </div>
  );
} 