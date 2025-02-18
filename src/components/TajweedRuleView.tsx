'use client';

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
                <div className="font-arabic text-lg leading-loose space-y-8">
                  {rule.poem.map((verse, index) => (
                    <div key={index} className="space-y-4">
                      <p className="text-center">
                        {verse.firstHalf} {verse.secondHalf}
                      </p>
                      {verse.explanation && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 pr-6 border-r-2 border-primary/20">
                          {verse.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
                  {rule.poemReference}
                </p>
              </div>
            </div>

          </div>
        </article>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            الأحكام التفصيلية
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {rule.examples.map((example) => (
              <div 
                key={example.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-islamic"
              >
                <div className="space-y-6">
                  {/* عنوان الحكم */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">
                      {example.title}
                    </h3>

                  </div>

                  {/* وصف الحكم */}
                  <p className="text-gray-600 dark:text-gray-400">
                    {example.description}
                  </p>

                  {/* كيفية التطبيق */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                    <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                      كيفية التطبيق
                    </h4>
                    <p className="text-emerald-600 dark:text-emerald-400">
                      {example.application}
                    </p>
                  </div>

                  {/* مثال من القرآن */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2 font-arabic">
                        {example.verseText}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-left mb-4">
                        {example.verseReference}
                      </p>
                      {example.audioUrl && (
                        <AudioPlayer url={example.audioUrl} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 