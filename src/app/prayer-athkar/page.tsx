import { PrayerList } from './components/PrayerList';

export default function PrayerAthkarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4">
            أذكار الصلوات
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            الأذكار المستحبة بعد كل صلاة من الصلوات الخمس
          </p>
        </header>
        
        <PrayerList />
      </div>
    </div>
  );
} 