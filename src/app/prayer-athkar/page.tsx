import Link from 'next/link';
import { prayers } from '@/data/prayer-athkar';
import { IoPlay } from 'react-icons/io5';

export default function PrayerAthkarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary mb-4">
            <IoPlay size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            أذكار الصلوات
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            الأذكار المستحبة بعد كل صلاة مفروضة
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prayers.map((prayer) => (
            <Link 
              key={prayer.id}
              href={`/prayer-athkar/${prayer.id}`}
            >
              <div className="group relative overflow-hidden rounded-3xl transition-all duration-500
                bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90
                hover:shadow-2xl hover:shadow-primary/20 border border-primary/5
                hover:scale-[1.02] active:scale-[0.98] p-6"
              >
                {/* نمط زخرفي إسلامي */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center" />
                
                <div className="relative space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    صلاة {prayer.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {prayer.time}
                  </p>
                  <p className="text-sm text-primary">
                    {prayer.athkar.length} أذكار
                  </p>
                </div>

                {/* شريط تزييني */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5">
                  <div className="h-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 
                              group-hover:from-primary/20 group-hover:via-primary/40 group-hover:to-primary/20
                              transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 