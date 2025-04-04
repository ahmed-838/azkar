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
  },
  {
    id: "madd-rules",
    arabicTitle: "أقسام المد وأحكامه",
    title: "Madd Rules and Rulings",
    category: "الأحكام الأساسية",
    description: "المد نوعان: أصلي وفرعي، وله ثلاثة أحكام: الوجوب والجواز واللزوم",
    poem: [
      {
        firstHalf: "والمد أصلي وفرعي له",
        secondHalf: "وسمِّ أولاً طبيعيًّا وهُو",
        explanation: "المد نوعان: أصلي (طبيعي) وفرعي"
      },
      {
        firstHalf: "ما لا توقفٌ له على سبب",
        secondHalf: "ولا بدونه الحروف تجتلب",
        explanation: "المد الطبيعي لا يحتاج إلى سبب ولا يمكن نطق الحرف بدونه"
      },
      {
        firstHalf: "بل أي حرف غير همزٍ أو سكون",
        secondHalf: "جا بعد مد فالطبيعيَّ يكون",
        explanation: "إذا جاء بعد حرف المد حرف غير الهمزة والسكون فهو مد طبيعي"
      },
      {
        firstHalf: "والآخر الفرعي موقوفٌ على",
        secondHalf: "سببْ كهمزٍ أو سكون مسجلا",
        explanation: "المد الفرعي يتوقف على وجود همز أو سكون بعده"
      },
      {
        firstHalf: "حروفه ثلاثة فَعِيها",
        secondHalf: "من لفظ واي وهي في نوحيها",
        explanation: "حروف المد ثلاثة مجموعة في كلمة (واي) وتوجد في كلمة (نوحيها)"
      },
      {
        firstHalf: "والكسر قبل اليا وقبل الواو ضم",
        secondHalf: "شرط وفتح قبل ألْفٍ يلتزم",
        explanation: "شروط حروف المد: كسر قبل الياء، وضم قبل الواو، وفتح قبل الألف"
      },
      {
        firstHalf: "واللين منها اليا وواو سكنا",
        secondHalf: "إن انفتاح قبل كلٍّ أعلنا",
        explanation: "حرفا اللين هما الياء والواو الساكنتان المفتوح ما قبلهما"
      },
      {
        firstHalf: "للمد أحكام ثلاثة تدوم",
        secondHalf: "وهي الوجوب والجواز واللزوم",
        explanation: "أحكام المد ثلاثة: واجب وجائز ولازم"
      },
      {
        firstHalf: "فواجب إن جاء همز بعد مد",
        secondHalf: "في كلْمة وذا بمتصْل يعد",
        explanation: "المد الواجب هو ما جاء بعده همز في نفس الكلمة ويسمى المد المتصل"
      },
      {
        firstHalf: "وجائز مد وقصر إن فُصِل",
        secondHalf: "كل بكلمة وهذا المنفصِل",
        explanation: "المد الجائز هو ما كان فيه الهمز في كلمة أخرى ويسمى المد المنفصل"
      },
      {
        firstHalf: "ومثل ذا إن عَرَض السكونُ",
        secondHalf: "وقفًا كتعلمون نستعينُ",
        explanation: "المد العارض للسكون يكون عند الوقف على كلمة آخرها حرف مد"
      },
      {
        firstHalf: "أو قدِّم الهمز على المد وذا",
        secondHalf: "بدلْ كآمنوا وإيمانًا خذا",
        explanation: "مد البدل هو ما تقدم فيه الهمز على حرف المد مثل: آمنوا"
      },
      {
        firstHalf: "ولازمٌ إنِ السكونُ أصِّلا",
        secondHalf: "وصلاً ووقفًا بعد مد طوِّلا",
        explanation: "المد اللازم هو ما جاء بعده سكون أصلي في الوصل والوقف"
      }
    ],
    examples: [
      {
        id: "natural-madd",
        title: "المد الطبيعي",
        description: "المد الذي لا يتوقف على سبب",
        verseText: "قَالَ - يَقُولُ - قِيلَ",
        verseReference: "أمثلة من القرآن",
        application: "يمد بمقدار حركتين فقط"
      },
      {
        id: "secondary-madd",
        title: "المد الفرعي",
        description: "المد الذي يتوقف على همز أو سكون",
        verseText: "جَاءَ - السَّمَاءِ - دَابَّةٍ",
        verseReference: "أمثلة من القرآن",
        application: "يمد بمقدار أربع أو ست حركات حسب نوع السبب"
      },
      {
        id: "leen-letters",
        title: "حروف اللين",
        description: "الواو والياء الساكنتان المفتوح ما قبلهما",
        verseText: "خَوْف - بَيْت",
        verseReference: "أمثلة من القرآن",
        application: "تنطق بلين دون مد إلا عند الوقف"
      },
      {
        id: "mandatory-madd",
        title: "المد الواجب المتصل",
        description: "المد الذي يأتي بعده همز في نفس الكلمة",
        verseText: "جَاءَ - السَّمَاءِ - سُوءَ",
        verseReference: "أمثلة من القرآن",
        application: "يمد بمقدار 4-5 حركات وجوباً"
      },
      {
        id: "permissible-madd",
        title: "المد الجائز المنفصل",
        description: "المد الذي يأتي بعده همز في كلمة أخرى",
        verseText: "يَا أَيُّهَا - فِي أَنفُسِهِمْ",
        verseReference: "أمثلة من القرآن",
        application: "يجوز مده بمقدار 2 أو 4 أو 5 حركات"
      },
      {
        id: "necessary-madd",
        title: "المد اللازم",
        description: "المد الذي يأتي بعده سكون أصلي",
        verseText: "الضَّالِّينَ - الْحَاقَّةُ",
        verseReference: "الفاتحة - الحاقة",
        application: "يمد بمقدار 6 حركات وجوباً"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  },
  {
    id: "madd-rules-types",
    arabicTitle: "أقسام المد اللازم",
    title: "Types of Necessary Madd",
    category: "المدود",
    description: "أقسام المد اللازم وأنواعه الأربعة: الكلمي المثقل، الكلمي المخفف، الحرفي المثقل، والحرفي المخفف",
    poem: [
      {
        firstHalf: "أقسام لازم لديهم أربعه",
        secondHalf: "وتلك كلْمي وحرفي معه",
        explanation: "المد اللازم له أربعة أقسام رئيسية: قسمان للكلمي وقسمان للحرفي"
      },
      {
        firstHalf: "كلاهما مخفَّف مثقَّل",
        secondHalf: "فهذه أربعة تفصَّل",
        explanation: "كل من الكلمي والحرفي ينقسم إلى مخفف ومثقل"
      }
    ],
    examples: [
      {
        id: "kalimi-muthaqqal",
        title: "الكلمي المثقل",
        description: "اجتمع حرف المد (الألف) مع السكون في كلمة واحدة، وأدغم الحرف المشدد",
        verseText: "الضَّالِّينَ",
        verseReference: "الفاتحة: 7",
        application: "يمد بمقدار ست حركات لوجود السكون المشدد بعد حرف المد"
      },
      {
        id: "kalimi-mukhaffaf",
        title: "الكلمي المخفف",
        description: "اجتمع حرف المد (الألف) مع السكون في كلمة واحدة، ولم يدغم",
        verseText: "آلْآنَ",
        verseReference: "يونس: 51",
        application: "يمد بمقدار ست حركات لوجود السكون الساكن بعد حرف المد"
      },
      {
        id: "harfi-muthaqqal",
        title: "الحرفي المثقل",
        description: "في فواتح السور، حيث يوجد حرف المد في وسط الحرف الهجائي المقطع",
        verseText: "الم",
        verseReference: "البقرة: 1",
        application: "يمد بمقدار ست حركات في الحروف المقطعة المحتوية على مد لازم"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  },
  {
    id: "lam-rules",
    arabicTitle: "أحكام لام أل ولام الفعل",
    title: "Lam Rules",
    category: "الأحكام الأساسية",
    description: "للام التعريف (أل) حالتان: الإظهار والإدغام، وللام الفعل حكم واحد وهو الإظهار مطلقاً",
    poem: [
      {
        firstHalf: "للام أل حالان قبل الأحرف",
        secondHalf: "أولاهما إظهارها فلتعرف",
        explanation: "للام التعريف حالتان: الإظهار والإدغام"
      },
      {
        firstHalf: "قبل اربعٍ مع عشْرةٍ خذ علمَه",
        secondHalf: "من ابغ حجَّك وخفْ عقيمَه",
        explanation: "حروف الإظهار القمري أربعة عشر حرفاً مجموعة في عبارة (ابغ حجك وخف عقيمه)"
      },
      {
        firstHalf: "ثانيهما إدغامها في أربعٍ",
        secondHalf: "وعشرةٍ أيضًا ورمزها فَعِ",
        explanation: "الحالة الثانية هي الإدغام في أربعة عشر حرفاً"
      },
      {
        firstHalf: "طِبْ ثم صِلْ رحمًا تَفُزْ ضِفْ ذا نِعَم",
        secondHalf: "دَعْ سُوءَ ظنِّ زُرْ شريفًا للكرم",
        explanation: "حروف الإدغام الشمسي مجموعة في هذا البيت (ط ث ص ر ت ض ذ ن د س ظ ز ش ل)"
      },
      {
        firstHalf: "واللام الاولى سمِّها قَمْريه",
        secondHalf: "واللام الاخرى سمِّها شَمْسيه",
        explanation: "تسمى لام الإظهار قمرية ولام الإدغام شمسية"
      },
      {
        firstHalf: "وأَظهِرنَّ لام فعلٍ مطلقا",
        secondHalf: "في نحو: قُلْ نَعَم، وقُلْنَا وَالْتَقى",
        explanation: "لام الفعل تظهر دائماً مهما كان الحرف الذي يليها"
      }
    ],
    examples: [
      {
        id: "qamariya",
        title: "اللام القمرية",
        description: "إظهار لام التعريف قبل الحروف القمرية",
        verseText: "الْقَمَر - الْكِتَاب - الْعَالَمِين",
        verseReference: "أمثلة من القرآن",
        application: "تظهر لام التعريف قبل الحروف القمرية وهي المجموعة في عبارة (ابغ حجك وخف عقيمه)"
      },
      {
        id: "shamsiya",
        title: "اللام الشمسية",
        description: "إدغام لام التعريف في الحروف الشمسية",
        verseText: "الشَّمْس - النُّور - الرَّحْمَن",
        verseReference: "أمثلة من القرآن",
        application: "تدغم لام التعريف في الحروف الشمسية المجموعة في عبارة (طب ثم صل رحماً...)"
      },
      {
        id: "verb-lam",
        title: "لام الفعل",
        description: "إظهار لام الفعل مطلقاً",
        verseText: "قُلْ نَعَم - قُلْنَا - الْتَقَى",
        verseReference: "أمثلة من القرآن",
        application: "تظهر لام الفعل دائماً بغض النظر عن الحرف الذي يليها"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  },
  {
    id: "similar-letters",
    arabicTitle: "المثلين والمتقاربين والمتجانسين",
    title: "Similar Letters Rules",
    category: "الأحكام الأساسية",
    description: "أحكام الحروف المتماثلة في المخرج والصفات، والمتقاربة في المخرج، والمتجانسة في المخرج دون الصفات",
    poem: [
      {
        firstHalf: "إنْ في الصفات والمخارج اتَّفق",
        secondHalf: "حرفانِ فالمثلان فيهما أحق",
        explanation: "المثلان هما الحرفان المتفقان في المخرج والصفات"
      },
      {
        firstHalf: "وإن يكونا مخرجًا تقاربًا",
        secondHalf: "وفي الصفات اختلفا يلقَّبا",
        explanation: "المتقاربان هما الحرفان المتقاربان في المخرج مع اختلاف في الصفات"
      },
      {
        firstHalf: "متْقاربين أو يكونا اتفقا",
        secondHalf: "في مخرجٍ دون الصفات حقِّقا",
        explanation: "المتجانسان هما الحرفان المتفقان في المخرج فقط دون الصفات"
      },
      {
        firstHalf: "بالمتجانسين، ثم إن سكن",
        secondHalf: "أولُ كلٍ فالصغير سَمِّيَن",
        explanation: "إذا كان الحرف الأول ساكناً سمي الإدغام صغيراً"
      },
      {
        firstHalf: "أو حرِّك الحرفان في كلٍّ فقل",
        secondHalf: "كلٌّ كبير وَافْهَمَنه بالمثل",
        explanation: "إذا كان الحرفان متحركين سمي الإدغام كبيراً"
      }
    ],
    examples: [
      {
        id: "similar-example",
        title: "المثلان",
        description: "الحروف المتماثلة في المخرج والصفات",
        verseText: "مَا سَلَكَكُم - قَالَ لَهُم",
        verseReference: "سورة المدثر - البقرة",
        application: "إدغام الحرف الأول في الثاني عند تماثلهما مثل الكاف مع الكاف واللام مع اللام"
      },
      {
        id: "close-example",
        title: "المتقاربان",
        description: "الحروف المتقاربة في المخرج",
        verseText: "قُل رَّبِّ - أَلَمْ نَخْلُقكُّم",
        verseReference: "سورة المؤمنون - المرسلات",
        application: "إدغام الحرف الأول في الثاني عند تقاربهما في المخرج مثل اللام مع الراء والقاف مع الكاف"
      },
      {
        id: "homogeneous-example",
        title: "المتجانسان",
        description: "الحروف المتجانسة في المخرج دون الصفات",
        verseText: "قَد تَّبَيَّنَ - همَّت طَّائِفَةٌ",
        verseReference: "سورة البقرة - آل عمران",
        application: "إدغام الحرف الأول في الثاني عند اتحاد المخرج واختلاف الصفات مثل الدال مع التاء والتاء مع الطاء"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  },
  {
    id: "madd-rulings",
    arabicTitle: "أحكام المد",
    title: "Madd Rulings",
    category: "المدود",
    description: "للمد ثلاثة أحكام رئيسية: الوجوب والجواز واللزوم، ولكل منها حالات وأسباب مختلفة",
    poem: [
      {
        firstHalf: "للمد أحكام ثلاثة تدوم",
        secondHalf: "وهي الوجوب والجواز واللزوم",
        explanation: "أحكام المد الرئيسية ثلاثة: واجب وجائز ولازم"
      },
      {
        firstHalf: "فواجب إن جاء همز بعد مد",
        secondHalf: "في كلْمة وذا بمتصْل يعد",
        explanation: "المد الواجب المتصل هو ما جاء فيه الهمز بعد حرف المد في نفس الكلمة"
      },
      {
        firstHalf: "وجائز مد وقصر إن فُصِل",
        secondHalf: "كل بكلمة وهذا المنفصِل",
        explanation: "المد الجائز المنفصل هو ما كان فيه حرف المد في كلمة والهمز في كلمة أخرى"
      },
      {
        firstHalf: "ومثل ذا إن عَرَض السكونُ",
        secondHalf: "وقفًا كتعلمون نستعينُ",
        explanation: "المد العارض للسكون يكون عند الوقف على كلمة آخرها حرف مد"
      },
      {
        firstHalf: "أو قدِّم الهمز على المد وذا",
        secondHalf: "بدلْ كآمنوا وإيمانًا خذا",
        explanation: "مد البدل هو ما تقدم فيه الهمز على حرف المد"
      },
      {
        firstHalf: "ولازمٌ إنِ السكونُ أصِّلا",
        secondHalf: "وصلاً ووقفًا بعد مد طوِّلا",
        explanation: "المد اللازم هو ما جاء بعده سكون أصلي في الوصل والوقف"
      }
    ],
    examples: [
      {
        id: "wajib-muttasil",
        title: "المد الواجب المتصل",
        description: "اجتماع حرف المد مع الهمز في كلمة واحدة",
        verseText: "جَاءَ - السَّمَاءِ - سُوءَ",
        verseReference: "أمثلة من القرآن",
        application: "يمد بمقدار 4-5 حركات وجوباً"
      },
      {
        id: "jaiz-munfasil",
        title: "المد الجائز المنفصل",
        description: "حرف المد في كلمة والهمز في كلمة أخرى",
        verseText: "يَا أَيُّهَا - فِي أَنفُسِهِمْ",
        verseReference: "أمثلة من القرآن",
        application: "يجوز مده بمقدار 2 أو 4 أو 5 حركات"
      },
      {
        id: "arid-sukoon",
        title: "المد العارض للسكون",
        description: "الوقف على كلمة آخرها حرف مد",
        verseText: "تَعْلَمُونَ - نَسْتَعِينُ",
        verseReference: "أمثلة من القرآن",
        application: "يجوز مده 2 أو 4 أو 6 حركات عند الوقف"
      },
      {
        id: "badal",
        title: "مد البدل",
        description: "تقدم الهمز على حرف المد",
        verseText: "آمَنُوا - إِيمَانًا",
        verseReference: "أمثلة من القرآن",
        application: "يمد بمقدار حركتين في رواية حفص"
      }
    ],
    poemReference: "متن تحفة الأطفال للجمزوري"
  },
]; 