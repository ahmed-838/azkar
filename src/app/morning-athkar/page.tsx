import { AthkarList } from './components/AthkarList';
import { IoSunny } from 'react-icons/io5';

export default function MorningAthkarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary mb-4">
            <IoSunny size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            أذكار الصباح
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            مجموعة من الأذكار والأدعية المستحبة في الصباح، تُقال بعد صلاة الفجر إلى طلوع الشمس
          </p>
        </header>
        
        <div className="relative">
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/mosque-pattern.svg')] bg-repeat bg-center" />
          <AthkarList />
        </div>
      </div>
    </div>
  );
}
