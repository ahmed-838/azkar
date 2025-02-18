export interface TajweedExample {
  id: string;
  title: string;
  description: string;
  verseText: string;
  verseReference: string;
  audioUrl?: string;
  application: string;
}

export interface TajweedRule {
  id: string;
  arabicTitle: string;
  title: string;
  category: string;
  description: string;
  poem: PoemVerse[];
  examples: TajweedExample[];
  poemReference: string;
}

export interface PoemVerse {
  firstHalf: string;
  secondHalf: string;
  explanation?: string;
}

export const tajweedRules: TajweedRule[] = [
  {
    id: "noon-sakinah",
    arabicTitle: "أحكام النون الساكنة والتنوين",
    title: "Noon Sakinah Rules",
    category: "الأحكام الأساسية",
    description: "النون الساكنة والتنوين لهما أربعة أحكام رئيسية: الإظهار، الإدغام، الإقلاب، والإخفاء",
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
    examples: [
      {
        id: "idhar",
        title: "الإظهار",
        description: "إظهار النون الساكنة عند حروف الحلق الستة (ء ه ع ح غ خ)",
        verseText: "مَنْ آمَنَ",
        verseReference: "البقرة: 62",
        audioUrl: "/audio/ayat/104008.mp3",
        application: "عند النطق نظهر النون الساكنة بوضوح عند حروف الحلق دون غنة زائدة"
      },
      {
        id: "idgham",
        title: "الإدغام",
        description: "إدغام النون الساكنة في حروف (يرملون)",
        verseText: "مِن رَّبِّهِمْ",
        verseReference: "البقرة: 5",
        audioUrl: "/audio/ayat/104008.mp3",
        application: "تدغم النون الساكنة في الحرف الذي يليها مع غنة في (ينمو) وبدون غنة في (ل ر)"
      },
      {
        id: "iqlab",
        title: "الإقلاب",
        description: "قلب النون الساكنة ميماً عند حرف الباء",
        verseText: "مِنۢ بَعْدِ",
        verseReference: "البقرة: 27",
        audioUrl: "/audio/ayat/104008.mp3",
        application: "تقلب النون الساكنة ميماً مع الغنة عند حرف الباء"
      },
      {
        id: "ikhfa",
        title: "الإخفاء",
        description: "إخفاء النون الساكنة عند الحروف المتبقية",
        verseText: "مِن قَبْلِكَ",
        verseReference: "البقرة: 4",
        audioUrl: "/audio/ayat/104008.mp3",
        application: "تخفى النون الساكنة عند باقي الحروف مع غنة"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  },
  {
    id: "mushaddad-noon-meem",
    arabicTitle: "أحكام النون والميم المشدَّدتين",
    title: "Mushaddad Noon and Meem Rules",
    category: "الأحكام الأساسية",
    description: "النون والميم المشددتان لهما حكم واحد وهو الغنة المشددة",
    poem: [
      {
        firstHalf: "وغنَّ ميمًا ثم نونًا شدِّدا",
        secondHalf: "وسمِّ كلاًّ حرف غنة بدا",
        explanation: "يجب إظهار الغنة في النون والميم المشددتين"
      }
    ],
    examples: [
      {
        id: "mushaddad-example",
        title: "الغنة في النون والميم المشددتين",
        description: "إظهار الغنة في النون والميم المشددتين",
        verseText: "إِنَّ - ثُمَّ",
        verseReference: "أمثلة عامة",
        application: "نظهر الغنة بمقدار حركتين في النون والميم المشددتين"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  },
  {
    id: "sakinah-meem",
    arabicTitle: "أحكام الميم الساكنة",
    title: "Sakinah Meem Rules",
    category: "الأحكام الأساسية",
    description: "للميم الساكنة ثلاثة أحكام: الإخفاء الشفوي، الإدغام المتماثل، والإظهار الشفوي",
    poem: [
      {
        firstHalf: "والميم إن تسكن تَجِي قبل الهجا",
        secondHalf: "لا ألف لينةٍ لذي الحجا",
        explanation: "بيان أن الميم الساكنة تأتي قبل الحروف الهجائية ما عدا الألف اللينة"
      },
      {
        firstHalf: "أحكامها ثلاثةٌ لمن ضبط",
        secondHalf: "إخفاء ادغام وإظهار فقط",
        explanation: "للميم الساكنة ثلاثة أحكام: الإخفاء والإدغام والإظهار"
      },
      {
        firstHalf: "فالأول الإخفاء عند الباء",
        secondHalf: "وسمِّه الشفْوي للقراء",
        explanation: "الحكم الأول هو الإخفاء الشفوي عند حرف الباء"
      },
      {
        firstHalf: "والثاني إدغام بمثلها أتى",
        secondHalf: "وسمِّ إدغامًا صغيرًا يا فتى",
        explanation: "الحكم الثاني هو الإدغام المتماثل عند الميم"
      },
      {
        firstHalf: "والثالث الإظهار في البقيه",
        secondHalf: "من أحرف وسمِّها شفويه",
        explanation: "الحكم الثالث هو الإظهار الشفوي عند باقي الحروف"
      },
      {
        firstHalf: "واحذر لدى واوٍ وفا أن تختفي",
        secondHalf: "لقربها ولاتحاد فاعرفِ",
        explanation: "التنبيه على عدم إخفاء الميم الساكنة عند الواو والفاء رغم قربهما في المخرج"
      }
    ],
    examples: [
      {
        id: "meem-ikhfa",
        title: "الإخفاء الشفوي",
        description: "إخفاء الميم الساكنة عند الباء",
        verseText: "هُم بِهِ",
        verseReference: "مثال عام",
        application: "تخفى الميم الساكنة عند الباء مع الغنة"
      },
      {
        id: "meem-idgham",
        title: "الإدغام المتماثل",
        description: "إدغام الميم الساكنة في الميم",
        verseText: "لَهُم مَّا",
        verseReference: "مثال عام",
        application: "تدغم الميم الساكنة في الميم التي بعدها"
      },
      {
        id: "meem-idhar",
        title: "الإظهار الشفوي",
        description: "إظهار الميم الساكنة عند باقي الحروف",
        verseText: "عَلَيْهِمْ غَيْرِ",
        verseReference: "مثال عام",
        application: "تظهر الميم الساكنة عند جميع الحروف ما عدا الباء والميم"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  }
]; 