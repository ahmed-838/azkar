'use client';

import Link from 'next/link';
import { IoSunny, IoMoon, IoPlay, IoTime, IoBook, IoMic, IoPause } from 'react-icons/io5';
import { motion } from 'framer-motion';

const sections = [
  {
    title: "أذكار الصباح",
    href: "/morning-athkar",
    description: "مجموعة من الأذكار والأدعية المستحبة في الصباح",
    icon: <IoSunny size={24} />,
    time: "من طلوع الفجر إلى طلوع الشمس"
  },
  {
    title: "أذكار المساء",
    href: "/evening-athkar",
    description: "مجموعة من الأذكار والأدعية المستحبة في المساء",
    icon: <IoMoon size={24} />,
    time: "من العصر إلى غروب الشمس"
  },
  {
    title: "أذكار بعد الصلاة",
    href: "/prayer-athkar",
    description: "الأذكار المستحبة بعد كل صلاة",
    icon: <IoPlay size={24} />,
    time: "بعد كل صلاة مفروضة"
  },
  {
    title: "الأدعية المأثورة من القرآن الكريم",
    href: "/quran-duas",
    description: "مجموعة من الأدعية المأثورة عن النبي ﷺ",
    icon: <IoBook size={24} />,
    time: "أدعية لكل وقت وحال"
  }
];

// إضافة مصفوفة جديدة للقسم الخاص بتعليم القرآن
const quranLearning = [
  {
    title: "تعلم التجويد",
    href: "/tajweed",
    description: "تعلم أحكام التجويد الأساسية وقواعد التلاوة الصحيحة",
    icon: <IoBook size={24} />,
    time: "دروس تفاعلية مع التطبيق العملي"
  },
  {
    title: "مخارج الحروف",
    href: "/pronunciation",
    description: "تعلم النطق الصحيح للحروف العربية ومخارجها",
    icon: <IoMic size={24} />,
    time: "تدريبات صوتية مع التصحيح"
  },
  {
    title: "أحكام الوقف والابتداء",
    href: "/stop-rules",
    description: "تعلم علامات الوقف وأحكامه في القرآن الكريم",
    icon: <IoPause size={24} />,
    time: "دروس نظرية وتطبيقية"
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">الأذكار اليومية</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            مجموعة من الأذكار والأدعية المستحبة في اليوم والليلة
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Link 
              key={section.href}
              href={section.href}
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
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {section.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <IoTime className="text-primary/60" size={16} />
                          <span>{section.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>

                  {/* شريط تزييني */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5">
                    <div className="h-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 
                                group-hover:from-primary/20 group-hover:via-primary/40 group-hover:to-primary/20
                                transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* خط فاصل مزخرف */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-dashed border-primary/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-gray-900 px-4 text-primary/60 text-sm">
              ⚜️
            </span>
          </div>
        </div>

        {/* القسم الثاني: تعليم القرآن */}
        <div className="mb-16">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">خيركم من تعلم القرآن وعلمه</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              دروس وبرامج تعليمية لتحسين تلاوتك وفهمك للقرآن الكريم
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quranLearning.map((item, index) => (
              <Link 
                key={item.href}
                href={item.href}
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
                  {/* نفس تنسيق البطاقات السابقة */}
                  <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center" />

                  <div className="relative h-full p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </h2>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                            <IoTime className="text-primary/60" size={16} />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>

                    {/* شريط تزييني */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5">
                      <div className="h-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 
                                  group-hover:from-primary/20 group-hover:via-primary/40 group-hover:to-primary/20
                                  transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
