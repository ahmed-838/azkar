export interface TajweedExample {
  id: number;
  verseText: string;
  verseReference: string;
  audioUrl: string;
  explanation: string;
}

export interface TajweedRule {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  category: 
    | "مخارج وصفات الحروف"
    | "إدغام الحروف"
    | "أحكام النون الساكنة والتنوين"
    | "أحكام الميم الساكنة"
    | "أحكام المد في التجويد"
    | "احكام الراءات"
    | "أحكام الوقف والابتداء"
    | "متون التجويد";
  importance: string;
  verseText: string;
  surahName: string;
  verseNumber: string;
  poem: PoemVerse[];
  poemReference: string;
  examples: TajweedExample[];
  commonMistakes: string[];
}

export interface PoemVerse {
  firstHalf: string;
  secondHalf: string;
}

export const tajweedRules: TajweedRule[] = [
  {
    id: "makharij",
    title: "مخارج وصفات الحروف",
    arabicTitle: "مخارج وصفات الحروف",
    category: "مخارج وصفات الحروف",
    description: "المخارج هي مواضع خروج الحروف من الفم واللسان والشفتين والحلق",
    importance: "معرفة مخارج الحروف أساس النطق الصحيح للقرآن الكريم",
    verseText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    surahName: "الفاتحة",
    verseNumber: "1",
    poem: [
      {
        firstHalf: "مَخَارِجُ الحُرُوفِ سَبْعَةَ عَشَرْ",
        secondHalf: "عَلَى الَّذِي يَخْتَارُهُ مَنِ اخْتَبَرْ"
      }
    ],
    poemReference: "متن الجزرية - ابن الجزري",
    examples: [
      {
        id: 1,
        verseText: "الْحَمْدُ",
        verseReference: "الفاتحة: 1",
        audioUrl: "/audio/tajweed/makharij/example1.mp3",
        explanation: "مثال على مخرج حرف الحاء من الحلق"
      }
    ],
    commonMistakes: [
      "الخلط بين مخرج الحاء والهاء",
      "عدم إخراج الحروف من مخارجها الصحيحة"
    ]
  },
  {
    id: "idgham-huroof",
    title: "إدغام الحروف",
    arabicTitle: "إدغام الحروف",
    category: "إدغام الحروف",
    description: "إدخال حرف ساكن في حرف متحرك بحيث يصيران حرفاً واحداً مشدداً",
    importance: "يساعد في تحقيق الانسجام الصوتي وتسهيل النطق",
    verseText: "قُل رَّبِّ",
    surahName: "المؤمنون",
    verseNumber: "93",
    poem: [
      {
        firstHalf: "وَالثَّانِ إِدْغَامٌ بِمِثْلٍ كُرِّرَا",
        secondHalf: "وَمُتَقَارِبٍ وَمُتَجَانِسَا"
      }
    ],
    poemReference: "متن تحفة الأطفال",
    examples: [
      {
        id: 1,
        verseText: "قُل رَّبِّ",
        verseReference: "المؤمنون: 93",
        audioUrl: "/audio/tajweed/idgham-huroof/example1.mp3",
        explanation: "إدغام اللام في الراء"
      }
    ],
    commonMistakes: [
      "عدم إدغام الحرفين بشكل كامل",
      "إظهار الحرف الأول"
    ]
  },
  {
    id: "noon-sakinah",
    title: "أحكام النون الساكنة والتنوين",
    arabicTitle: "أحكام النون الساكنة والتنوين",
    category: "أحكام النون الساكنة والتنوين",
    description: "للنون الساكنة والتنوين أربعة أحكام: الإظهار والإدغام والإقلاب والإخفاء",
    importance: "من أهم أحكام التجويد وأكثرها وروداً في القرآن الكريم",
    verseText: "مِن بَعْدِ مَا جَاءَكَ مِنَ الْعِلْمِ",
    surahName: "البقرة",
    verseNumber: "120",
    poem: [
      {
        firstHalf: "لِلنُّونِ إِنْ تَسْكُنْ وَلِلتَّنْوِينِ",
        secondHalf: "أَرْبَعُ أَحْكَامٍ فَخُذْ تَبْيِينِي"
      },
      {
        firstHalf: "فَالأَوَّلُ الإِظْهَارُ قَبْلَ أَحْرُفِ",
        secondHalf: "لِلْحَلْقِ سِتٍّ رُتِّبَتْ فَلْتَعْرِفِ"
      }
    ],
    poemReference: "متن تحفة الأطفال - الإمام سليمان الجمزوري",
    examples: [
      {
        id: 1,
        verseText: "مِنْ خَيْرٍ",
        verseReference: "البقرة: 105",
        audioUrl: "/audio/tajweed/noon-sakinah/example1.mp3",
        explanation: "إظهار النون الساكنة عند حرف الخاء"
      }
    ],
    commonMistakes: [
      "عدم إظهار النون الساكنة عند حروف الحلق",
      "الخلط بين أحكام النون الساكنة المختلفة",
      "عدم مراعاة الغنة في مواضعها"
    ]
  },
  {
    id: "madd",
    title: "أحكام المد",
    arabicTitle: "أحكام المد",
    category: "أحكام المد في التجويد",
    description: "المد هو إطالة الصوت بحرف من حروف المد الثلاثة عند وجود سبب للمد",
    importance: "يساهم في جمال التلاوة وضبط المعاني",
    verseText: "قَالُوا آمَنَّا",
    surahName: "البقرة",
    verseNumber: "14",
    poem: [
      {
        firstHalf: "وَالْمَدُّ أَصْلِيٌّ وَفَرْعِيٌّ لَهُ",
        secondHalf: "وَسَمِّ أَوَّلاً طَبِيعِيًّا وَلَهْ"
      }
    ],
    poemReference: "متن الجزرية",
    examples: [
      {
        id: 1,
        verseText: "قَالُوا",
        verseReference: "البقرة: 14",
        audioUrl: "/audio/tajweed/madd/example1.mp3",
        explanation: "مد طبيعي بمقدار حركتين"
      }
    ],
    commonMistakes: [
      "المد أكثر من المقدار المطلوب",
      "قصر المد الواجب"
    ]
  },
  {
    id: "raa",
    title: "أحكام الراءات",
    arabicTitle: "أحكام الراءات",
    category: "احكام الراءات",
    description: "للراء حالتان: التفخيم والترقيق، ولكل منهما مواضع محددة",
    importance: "نطق حرف الراء بالشكل الصحيح حسب موقعه",
    verseText: "رَبِّ الْعَالَمِينَ",
    surahName: "الفاتحة",
    verseNumber: "2",
    poem: [
      {
        firstHalf: "وَرَقِّقَنْ رَاءً إِذَا مَا كُسِرَتْ",
        secondHalf: "أَوْ كَانَتْ السَّاكِنَةُ مِنْ بَعْدِ كَسْرْ"
      }
    ],
    poemReference: "متن تحفة الأطفال",
    examples: [
      {
        id: 1,
        verseText: "فِرْعَوْنَ",
        verseReference: "القصص: 3",
        audioUrl: "/audio/tajweed/raa/example1.mp3",
        explanation: "ترقيق الراء الساكنة بعد كسر"
      }
    ],
    commonMistakes: [
      "تفخيم الراء المكسورة",
      "ترقيق الراء المفتوحة"
    ]
  },
  {
    id: "waqf",
    title: "الوقف والابتداء",
    arabicTitle: "الوقف والابتداء",
    category: "أحكام الوقف والابتداء",
    description: "علم يُعرف به مواضع الوقف والابتداء في القرآن الكريم",
    importance: "فهم المعاني وضبط التلاوة وتجنب اللبس في المعنى",
    verseText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    surahName: "الفاتحة",
    verseNumber: "2",
    poem: [
      {
        firstHalf: "وَالْوَقْفُ تَامٌ وَكَافٍ وَحَسَنْ",
        secondHalf: "وَقَبِيحٌ وَلَهُ أَيْضاً سُنَنْ"
      }
    ],
    poemReference: "متن الجزرية",
    examples: [
      {
        id: 1,
        verseText: "الْحَمْدُ لِلَّهِ ۚ",
        verseReference: "الفاتحة: 2",
        audioUrl: "/audio/tajweed/waqf/example1.mp3",
        explanation: "وقف تام لتمام المعنى"
      }
    ],
    commonMistakes: [
      "الوقف في مواضع غير مناسبة",
      "الابتداء من موضع يخل بالمعنى"
    ]
  },
  {
    id: "mutoon",
    title: "متون التجويد",
    arabicTitle: "متون التجويد",
    category: "متون التجويد",
    description: "المنظومات الشعرية التي تضم قواعد علم التجويد",
    importance: "حفظ وضبط قواعد التجويد بشكل منظم وميسر",
    verseText: "وَبَعْدُ: هَذَا الْعِلْمُ لَا يُجْهَلُ",
    surahName: "متن الجزرية",
    verseNumber: "المقدمة",
    poem: [
      {
        firstHalf: "يَقُولُ رَاجِي رَحْمَةِ الْغَفُورِ",
        secondHalf: "مُحَمَّدٌ هُوَ ابْنُ الْجَزَرِي"
      }
    ],
    poemReference: "متن الجزرية - ابن الجزري",
    examples: [
      {
        id: 1,
        verseText: "وَبَعْدُ: هَذَا الْعِلْمُ لَا يُجْهَلُ",
        verseReference: "متن الجزرية",
        audioUrl: "/audio/tajweed/mutoon/example1.mp3",
        explanation: "مقدمة متن الجزرية في علم التجويد"
      }
    ],
    commonMistakes: [
      "عدم فهم معاني المتون",
      "الخلط بين قواعد المتون المختلفة"
    ]
  }
]; 