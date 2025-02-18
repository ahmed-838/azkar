import { tajweedRules } from '@/data/tajweed-rules';
import Link from 'next/link';
import { IoBook } from 'react-icons/io5';

export default function TajweedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary mb-4">
            <IoBook size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            تعلم أحكام التجويد
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            دليلك الشامل لتعلم أحكام التجويد وتطبيقها في تلاوة القرآن الكريم
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tajweedRules.map((rule) => (
            <Link 
              key={rule.id}
              href={`/tajweed/${rule.id}`}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500
                bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90
                hover:shadow-2xl hover:shadow-primary/20 border border-primary/5
                hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center" />
              
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {rule.arabicTitle}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-primary/80">
                      <span className="px-3 py-1 rounded-full bg-primary/10">
                        {rule.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {rule.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span>{rule.examples.length} أمثلة تطبيقية</span>
                  </div>
                </div>

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