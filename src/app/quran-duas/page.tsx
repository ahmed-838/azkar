import { QuranDuas } from '../../data/quran-duas';
import { IoBook } from 'react-icons/io5';

export default function DuasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* ترويسة الصفحة */}
        <header className="text-center mb-12">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary mb-4">
            <IoBook size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            الأدعية القرآنية
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            مجموعة من الأدعية المباركة من القرآن الكريم
          </p>
        </header>

        {/* قسم الأدعية */}
        <div className="space-y-12">
          {QuranDuas.map((dua, index) => (
            <article 
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm
                border border-primary/5 hover:shadow-xl transition-all duration-300"
            >
              {/* زخرفة خلفية */}
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center rounded-3xl" />
              
              {/* محتوى الدعاء */}
              <div className="relative">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    سورة {dua.surah}
                  </h2>
                  <div className="text-sm text-primary/80 px-3 py-1 rounded-full bg-primary/10 inline-block">
                    الآية {dua.reference}
                  </div>
                </div>

                {dua.ayat.map((aya, ayaIndex) => (
                  <p 
                    key={ayaIndex}
                    className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-4 font-quran"
                  >
                    {aya}
                  </p>
                ))}
              </div>

              {/* شريط تزييني */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5">
                <div className="h-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
