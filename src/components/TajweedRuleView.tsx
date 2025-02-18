import { TajweedRule } from '@/data/tajweed-rules';
import { AudioPlayer } from '@/components/AudioPlayer';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

interface Props {
  rule: TajweedRule;
}

export function TajweedRuleView({ rule }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tajweed"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <IoArrowBack size={20} />
            <span>العودة إلى قائمة الأحكام</span>
          </Link>
        </div>

        <article className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-islamic">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {rule.arabicTitle}
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">التعريف والشرح</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {rule.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">تحفة الأطفال</h2>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                <div className="font-arabic text-lg leading-loose text-center space-y-4">
                  {rule.poem.map((verse, index) => (
                    <p key={index}>
                      {verse.firstHalf} {verse.secondHalf}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                  {rule.poemReference}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">أهمية الحكم</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {rule.importance}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">آيات قرآنية</h2>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                <p className="text-xl font-arabic leading-loose text-center">
                  {rule.verseText}
                </p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                  سورة {rule.surahName} - الآية {rule.verseNumber}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">الأمثلة التطبيقية</h2>
              <div className="space-y-6">
                {rule.examples.map((example) => (
                  <div 
                    key={example.id}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2 font-arabic">
                        {example.verseText}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
                        {rule.surahName} {rule.verseNumber}
                      </p>
                    </div>

                    <AudioPlayer url={example.audioUrl} />

                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      {example.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {rule.commonMistakes && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">الأخطاء الشائعة</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {rule.commonMistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
} 