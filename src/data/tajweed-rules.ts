export interface TajweedExample {
  id: number;
  verseText: string;
  verseReference: string;
  audioUrl: string;
}

export interface TajweedRule {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  category: 
    | "إدغام الحروف"
    | "أحكام النون الساكنة والتنوين"
    | "أحكام الميم الساكنة"
    | "أحكام المد في التجويد"
    | "احكام الراءات"
    | "أحكام الوقف والابتداء"
    | "متون التجويد";
  verseText: string;
  surahName: string;
  verseNumber: string;
  poem: PoemVerse[];
  poemReference: string;
  application?: string;
}

export interface PoemVerse {
  firstHalf: string;
  secondHalf: string;
  explanation?: string;
}

export const tajweedRules: TajweedRule[] = [
  {
    id: "idgham-huroof",
    title: "إدغام الحروف",
    arabicTitle: "إدغام الحروف",
    category: "إدغام الحروف",
    description: "إدخال حرف ساكن في حرف متحرك بحيث يصيران حرفاً واحداً مشدداً",
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

  },
  {
    id: "noon-sakinah",
    title: "أحكام النون الساكنة والتنوين",
    arabicTitle: "أحكام النون الساكنة والتنوين",
    category: "أحكام النون الساكنة والتنوين",
    description: "للنون الساكنة والتنوين أربعة أحكام: الإظهار والإدغام والإقلاب والإخفاء",
    verseText: "مِن بَعْدِ مَا جَاءَكَ مِنَ الْعِلْمِ",
    surahName: "البقرة",
    verseNumber: "120",
    application: "النون الساكنة والتنوين يتم استخدامها في القرآن الكريم في أغلب الآيات",
    poem: [
      {
        firstHalf: "لِلنُّونِ إِنْ تَسْكُنْ وَلِلتَّنْوِينِ",
        secondHalf: "أَرْبَعُ أَحْكَامٍ فَخُذْ تَبْيِينِي",
        explanation: "للنون الساكنة والتنوين أربعة أحكام سيتم شرحها في الأبيات التالية"
      },
      {
        firstHalf: "فَالأَوَّلُ الإِظْهَارُ قَبْلَ أَحْرُفِ",
        secondHalf: "لِلْحَلْقِ سِتٍّ رُتِّبَتْ فَلْتَعْرِفِ",
        explanation: "الحكم الأول هو الإظهار، ويكون قبل ستة أحرف من حروف الحلق"
      },
      {
        firstHalf: "هَمْزٌ فَهَاءٌ ثُمَّ عَيْنٌ حَاءُ",
        secondHalf: "مُهْمَلَتَانِ ثُمَّ غَيْنٌ خَاءُ",
        explanation: "حروف الحلق الستة هي: الهمزة والهاء والعين والحاء والغين والخاء"
      },
      {
        firstHalf: "وَالثَّانِ إِدْغَامٌ بِسِتَّةٍ أَتَتْ",
        secondHalf: "فِي يَرْمُلُونَ عِنْدَهُمْ قَدْ ثَبَتَتْ",
        explanation: "الحكم الثاني هو الإدغام، ويكون في ستة أحرف مجموعة في كلمة (يرملون)"
      },
      {
        firstHalf: "لَكِنَّهَا قِسْمَانِ قِسْمٌ يُدْغَمَا",
        secondHalf: "فِيهِ بِغُنَّةٍ بِيَنْمُو عُلِمَا",
        explanation: "الإدغام نوعان: إدغام بغنة في أحرف (ينمو) وإدغام بغير غنة في (الراء واللام)"
      },
      {
        firstHalf: "إِلَّا إِذَا كَانَ بِكَلْمَةٍ فَلَا",
        secondHalf: "تُدْغِمْ كَدُنْيَا ثُمَّ صِنْوَانٍ تَلَا",
        explanation: "لا يتم الإدغام إذا اجتمع الحرفان في كلمة واحدة مثل: دنيا وصنوان"
      },
      {
        firstHalf: "وَالثَّانِي إِدْغَامٌ بِغَيْرِ غُنَّهْ",
        secondHalf: "فِي اللَّامِ وَالرَّا ثُمَّ كَرِّرَنَّهْ",
        explanation: "النوع الثاني من الإدغام هو بغير غنة ويكون في حرفي اللام والراء"
      },
      {
        firstHalf: "وَالثَّالِثُ الإِقْلَابُ عِنْدَ الْبَاءِ",
        secondHalf: "مِيمًا بِغُنَّةٍ مَعَ الإِخْفَاءِ",
        explanation: "الحكم الثالث هو الإقلاب، وهو قلب النون الساكنة أو التنوين ميماً عند حرف الباء"
      },
      {
        firstHalf: "وَالرَّابِعُ الإِخْفَاءُ عِنْدَ الْفَاضِلِ",
        secondHalf: "مِنَ الْحُرُوفِ وَاجِبٌ لِلْفَاضِلِ",
        explanation: "الحكم الرابع هو الإخفاء، ويكون عند باقي الحروف غير المذكورة في الأحكام السابقة"
      },
      {
        firstHalf: "فِي خَمْسَةٍ مِنْ بَعْدِ عَشْرٍ رَمْزُهَا",
        secondHalf: "فِي كَلِمِ هَذَا الْبَيْتِ قَدْ ضَمَّنْتُهَا",
        explanation: "حروف الإخفاء خمسة عشر حرفاً، سيتم ذكرها في البيت التالي"
      },
      {
        firstHalf: "صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا",
        secondHalf: "دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمَا",
        explanation: "حروف الإخفاء هي: (ص، ذ، ث، ك، ج، ش، ق، س، د، ط، ز، ف، ت، ض، ظ)"
      }
    ],
    poemReference: "متن تحفة الأطفال - الإمام سليمان الجمزوري",
  },
  {
    id: "madd",
    title: "أحكام المد",
    arabicTitle: "أحكام المد",
    category: "أحكام المد في التجويد",
    description: "المد هو إطالة الصوت بحرف من حروف المد الثلاثة عند وجود سبب للمد",
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
  },
  {
    id: "raa",
    title: "أحكام الراءات",
    arabicTitle: "أحكام الراءات",
    category: "احكام الراءات",
    description: "للراء حالتان: التفخيم والترقيق، ولكل منهما مواضع محددة",
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
  },
  {
    id: "waqf",
    title: "الوقف والابتداء",
    arabicTitle: "الوقف والابتداء",
    category: "أحكام الوقف والابتداء",
    description: "علم يُعرف به مواضع الوقف والابتداء في القرآن الكريم",
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
  },
  {
    id: "mutoon",
    title: "متون التجويد",
    arabicTitle: "متون التجويد",
    category: "متون التجويد",
    description: "المنظومات الشعرية التي تضم قواعد علم التجويد",
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
  }
]; 