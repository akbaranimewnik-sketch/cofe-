// Rich Coffee and Restaurant Data for AURA Coffee & Bistro

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Barchasi', icon: 'Sparkles' },
  { id: 'hot-coffee', name: 'Issiq Qahvalar', icon: 'Coffee' },
  { id: 'cold-coffee', name: 'Muzdek Ichimliklar', icon: 'CupSoda' },
  { id: 'breakfast', name: 'Nonushta & Brunch', icon: 'Sun' },
  { id: 'main-dishes', name: 'Asosiy Taomlar', icon: 'UtensilsCrossed' },
  { id: 'desserts', name: 'Shirinlik & Pishiriq', icon: 'Cake' }
];

export const MENU_ITEMS = [
  // Hot Coffees
  {
    id: 'hc-1',
    name: 'Aura Signature Velvet Latte',
    category: 'hot-coffee',
    price: 38000,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bosh Barista Tavsiyasi",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    description: 'Efiopiya Yirgacheffe donalaridan tayyorlangan, kadife krem suti, Madagaskar vanili va oltin karamel chiziqlari bilan uyg\'unlashgan nozik ta\'m.',
    ingredients: ['100% Arabica Double Shot', 'Bug\'langan ipakdek sut', 'Madagaskar vanil ekstrakti', 'Uyda tayyorlangan karamel'],
    calories: '185 kkal',
    prepTime: '4-5 daqiqa',
    options: {
      milk: ['Oddiy sut', 'Suli suti (+6 000 so\'m)', 'Bodom suti (+8 000 so\'m)', 'Kokos suti (+7 000 so\'m)'],
      sugar: ['Oddiy (100%)', 'Yarim shakar (50%)', 'Shakarsiz (0%)', 'Asal bilan (+4 000 so\'m)'],
      shot: ['Standart (2 shot)', 'Yengil (1 shot)', 'Extra kuchli (3 shot, +6 000 so\'m)']
    }
  },
  {
    id: 'hc-2',
    name: 'Ispancha Oltin Cortado',
    category: 'hot-coffee',
    price: 32000,
    rating: 4.8,
    reviewsCount: 98,
    badge: "Klassika",
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    description: 'Teng miqdordagi kuchli espresso va iliq quyuq sut uyg\'unligi, dolchin va muskat yong\'og\'i xushbo\'yligi bilan.',
    ingredients: ['Kolumbiya Supremo Espresso', 'Qizdirilgan ipakdek sut', 'Dolchin va kardamon'],
    calories: '95 kkal',
    prepTime: '3 daqiqa',
    options: {
      milk: ['Oddiy sut', 'Suli suti (+6 000 so\'m)', 'Bodom suti (+8 000 so\'m)'],
      sugar: ['Oddiy', 'Shakarsiz', 'Jigarrang shakar'],
      shot: ['Standart', 'Extra shot (+6 000 so\'m)']
    }
  },
  {
    id: 'hc-3',
    name: 'Caramel Hazelnut Cappuccino',
    category: 'hot-coffee',
    price: 36000,
    rating: 4.9,
    reviewsCount: 215,
    badge: "Top Sotuvda",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    description: 'Qalin va mayin sut ko\'pigi, qovurilgan funduk yong\'og\'i siroplari va dengiz tuzi qo\'shilgan maxsus karamel qatlami.',
    ingredients: ['Espresso Blend', 'Mikroko\'pikli sut', 'Funduk ekstrakti', 'Sho\'r karamel sousi'],
    calories: '210 kkal',
    prepTime: '4 daqiqa',
    options: {
      milk: ['Oddiy sut', 'Suli suti (+6 000 so\'m)', 'Bodom suti (+8 000 so\'m)'],
      sugar: ['Oddiy', 'Yarim shakar', 'Shakarsiz'],
      shot: ['Standart', 'Extra kuchli (+6 000 so\'m)']
    }
  },
  {
    id: 'hc-4',
    name: 'An\'anaviy Qumda Pishirilgan Turk Qahvasi',
    category: 'hot-coffee',
    price: 28000,
    rating: 4.7,
    reviewsCount: 84,
    badge: "Sharqona",
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?auto=format&fit=crop&w=800&q=80',
    description: 'Issiq qumda sekinlik bilan qaynatilgan, qalin ko\'pikli, yonida turk lokumi va muzdek tog\' suvi bilan taqdim etiladi.',
    ingredients: ['Yangi maydalangan Arabica', 'Kardamon nafasi', 'Pistali Turk lokumi'],
    calories: '15 kkal',
    prepTime: '6-8 daqiqa',
    options: {
      sugar: ['Shakarsiz (Sade)', 'O\'rtacha (Orta)', 'Shirin (Şekerli)'],
      shot: ['Bitta jyezva (1 kishilik)', 'Katta jyezva (2 kishilik, +18 000 so\'m)']
    }
  },

  // Cold Drinks
  {
    id: 'cc-1',
    name: 'Cascara Cold Brew & Tonic',
    category: 'cold-coffee',
    price: 42000,
    rating: 4.9,
    reviewsCount: 167,
    badge: "Super Tetiklantiruvchi",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    description: '24 soat davomida sovuq usulda damlangan kofe, premium botanik tonik, yangi laym va bibariya barglari bilan serviz qilinadi.',
    ingredients: ['24h Cold Brew konsentrati', 'Artisan tonik', 'Laym sharbati', 'Yangi bibariya'],
    calories: '65 kkal',
    prepTime: '2 daqiqa',
    options: {
      sugar: ['Shakarsiz', 'Yengil shakarli'],
      ice: ['Muz ko\'p', 'Muz me\'yorda', 'Muzsiz']
    }
  },
  {
    id: 'cc-2',
    name: 'Iced Vanilla Oat Matcha Latte',
    category: 'cold-coffee',
    price: 44000,
    rating: 4.8,
    reviewsCount: 130,
    badge: "Yapon Sere-Monial",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    description: 'Uji (Kyoto) mintaqasidan keltirilgan A-darajali yashil matcha, xushbo\'y vanil va kremli suli suti bilan muz ustida qatlamli ko\'rinish.',
    ingredients: ['Kyoto Ceremonial Matcha', 'Barista Oatly suli suti', 'Madagaskar vanil', 'Kristall muz'],
    calories: '140 kkal',
    prepTime: '4 daqiqa',
    options: {
      milk: ['Suli suti', 'Bodom suti', 'Oddiy sut'],
      sugar: ['Yengil shakar', 'Shakarsiz', 'Agava siropli (+5 000 so\'m)']
    }
  },
  {
    id: 'cc-3',
    name: 'Caramel Cloud Frappuccino',
    category: 'cold-coffee',
    price: 45000,
    rating: 4.9,
    reviewsCount: 189,
    badge: "Trend",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    description: 'Muzdek kofe, qaymoq, ezilgan pechenye va shokolad bo\'lakchalari miksi, tepasida bulutdek yengil qaymoq qatlami bilan.',
    ingredients: ['Espresso frappe bazasi', 'Qaymoq', 'Oltin toffee karamel', 'Shokolad maydalari'],
    calories: '320 kkal',
    prepTime: '5 daqiqa',
    options: {
      milk: ['Oddiy sut', 'Suli suti (+6 000 so\'m)', 'Bodom suti (+8 000 so\'m)'],
      sugar: ['Oddiy', 'Yarim shakar']
    }
  },

  // Breakfast & Brunch
  {
    id: 'bf-1',
    name: 'Avocado Toast & Pochlangan Tuxum',
    category: 'breakfast',
    price: 54000,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Nonushta Xiti",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    description: 'Tandirdan uzilgan sourdough nonda pishirilgan krispi non, ezilgan Hass avokadosi, 2 ta mayin pochlangan tuxum, feta pishlog\'i va chili bo\'lakchalari.',
    ingredients: ['Artisan Sourdough noni', 'Hass avokado pyuresi', 'Ferma tuxumi', 'Feta pishlog\'i', 'Qora kunjut va mikrogreen'],
    calories: '420 kkal',
    prepTime: '10 daqiqa',
    options: {
      extras: ['Qizil ikra (+18 000 so\'m)', 'Qovurilgan bekon (+15 000 so\'m)', 'Qo\'shimcha tuxum (+6 000 so\'m)']
    }
  },
  {
    id: 'bf-2',
    name: 'Fransuzcha Brioche & Mevali Toast',
    category: 'breakfast',
    price: 49000,
    rating: 4.8,
    reviewsCount: 178,
    badge: "Shirin Nonushta",
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
    description: 'Sariyog\'li tillarang brioche noni, dolchinli sutda pishirilgan, yangi qulupnay, chernika, zarang (maple) siropi va maskarpone kremi bilan.',
    ingredients: ['Uy brioche noni', 'Maskarpone kremi', 'Zarang (maple) siropi', 'Yangi rezavorlar'],
    calories: '390 kkal',
    prepTime: '10 daqiqa',
    options: {
      syrup: ['Zarang (Maple) siropi', 'Eritilgan Nutella (+8 000 so\'m)', 'Asal']
    }
  },
  {
    id: 'bf-3',
    name: 'Royal Croissant Salmon & Truffle',
    category: 'breakfast',
    price: 62000,
    rating: 5.0,
    reviewsCount: 224,
    badge: "Shefning Maxsusi",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Parijcha qat-qat mayin kruassan, yengil tuzlangan losos balig\'i, trufl moyli krem-chiz, bodring va rukkola barglari.',
    ingredients: ['Fransuz kruassani', 'Atlantika lososi', 'Trufel sousi', 'Filadelfiya pishlog\'i', 'Yangi rukkola'],
    calories: '480 kkal',
    prepTime: '8 daqiqa',
    options: {
      extras: ['Pochlangan tuxum (+6 000 so\'m)', 'Avokado qo\'shish (+12 000 so\'m)']
    }
  },

  // Main Dishes
  {
    id: 'md-1',
    name: 'Ribeye Steak & Truffle Sariyoqli',
    category: 'main-dishes',
    price: 135000,
    rating: 5.0,
    reviewsCount: 280,
    badge: "Premium Gurman",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Black Angus yosh buqa go\'shti, qovurilgan baby kartoshkalar, bibariya va xushbo\'y qora trufel sariyog\'i sousida.',
    ingredients: ['Black Angus Ribeye (300g)', 'Qora trufel sariyog\'i', 'Baby kartoshka', 'Grilda pishgan sabzavotlar'],
    calories: '690 kkal',
    prepTime: '18-20 daqiqa',
    options: {
      doneness: ['Medium (Tavsiya etiladi)', 'Medium Rare', 'Medium Well', 'Well Done'],
      sauce: ['Qora trufel sousi', 'Qalampirli sous (Pepper sauce)', 'Qo\'ziqorinli krem sous']
    }
  },
  {
    id: 'md-2',
    name: 'Truffle Fettuccine & Parmigiano',
    category: 'main-dishes',
    price: 78000,
    rating: 4.8,
    reviewsCount: 165,
    badge: "Italiya Retsepti",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80',
    description: 'Uyda qo\'lda tayyorlangan yangi pasta, oq sharobda dimlangan yovvoyi qo\'ziqorinlar, mayin qaymoq va 24 oylik Parmigiano Reggiano pishlog\'i.',
    ingredients: ['Yangi tayyorlangan fettuccine', 'Shampinyon va porcini qo\'ziqorinlari', 'Parmigiano Reggiano DOP', 'Trufel moyi'],
    calories: '530 kkal',
    prepTime: '12 daqiqa',
    options: {
      cheese: ['Standart pishloq', 'Extra pishloq (+10 000 so\'m)'],
      meat: ['Go\'shtsiz (Vegetarian)', 'Grill tovuq filesi bilan (+15 000 so\'m)', 'Krevetkalar bilan (+28 000 so\'m)']
    }
  },
  {
    id: 'md-3',
    name: 'Norvegiya Losos Teriyaki',
    category: 'main-dishes',
    price: 118000,
    rating: 4.9,
    reviewsCount: 140,
    badge: "Dengiz Taomi",
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    description: 'Qovurilgan Norvegiya losos filesi, xushbo\'y teriyaki glazuri, jasmin guruchi va bug\'da pishirilgan krispi brokkoli.',
    ingredients: ['Yangi losos balig\'i (220g)', 'Uy teriyaki sousi', 'Jasmin guruchi', 'Brokkoli va kunjut'],
    calories: '560 kkal',
    prepTime: '15 daqiqa',
    options: {
      side: ['Jasmin guruchi', 'Kartoshka pyuresi', 'Yangi aralash salat']
    }
  },

  // Desserts
  {
    id: 'ds-1',
    name: 'San Sebastian Cheesecake & Belorusskiy Shokolad',
    category: 'desserts',
    price: 45000,
    rating: 5.0,
    reviewsCount: 420,
    badge: "1-Raqamli Xit",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    description: 'Ispaniyaning San-Sebastyan shahri usulida kuydirilgan, o\'rtasi kremdek eriydigan pishloqli desert, ustidan iliq Belgiya sutli shokoladi quyiladi.',
    ingredients: ['Krem-chiz pishlog\'i', 'Ferma qaymog\'i', 'Belgiya sutli shokoladi', 'Yangi malina'],
    calories: '410 kkal',
    prepTime: '2 daqiqa',
    options: {
      chocolate: ['Sutli shokolad', 'Qora achchiq shokolad', 'Oq shokolad', 'Pistali pasta (+12 000 so\'m)']
    }
  },
  {
    id: 'ds-2',
    name: 'Pistachio Tiramisu Milano',
    category: 'desserts',
    price: 48000,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Shef Ixtirosi",
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    description: 'Savoyardi biskviti yangi espresso va Amaretto bilan to\'yintirilgan, Sitsiliya pistasining kremli maskarpone qatlami va yashil pista parchalari.',
    ingredients: ['Savoyardi biskvit', 'Sitsiliya pistasi pastasi', 'Maskarpone kremi', 'Espresso qatlam'],
    calories: '370 kkal',
    prepTime: '3 daqiqa',
    options: {
      topping: ['Yashil pista maydalari', 'Kakao va pista uyg\'unligi']
    }
  },
  {
    id: 'ds-3',
    name: 'Iliq Shokoladli Lava Cake & Muzqaymoq',
    category: 'desserts',
    price: 42000,
    rating: 4.8,
    reviewsCount: 175,
    badge: "Issiq & Muzdek",
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    description: '70% Belgiya shokoladidan tayyorlangan issiq keks, kesganda ichidan shokolad daryo bo\'lib oqadi. Yonida Madagaskar vanilli muzqaymoq.',
    ingredients: ['70% Callebaut shokoladi', 'Vanilli muzqaymoq', 'Yalpiz bargi', 'Shakar kukuni'],
    calories: '460 kkal',
    prepTime: '10 daqiqa',
    options: {
      icecream: ['Vanilli muzqaymoq', 'Pistali muzqaymoq (+6 000 so\'m)', 'Shokoladli muzqaymoq']
    }
  }
];

export const COFFEE_BEANS = [
  {
    name: 'Ethiopia Yirgacheffe G1',
    roast: 'Yengil / O\'rta (Light-Medium)',
    notes: 'Yasmin guli, bergamot, qulupnay va asal ta\'mi',
    altitude: '1,900 - 2,200 m',
    process: 'Yuvilgan (Washed)',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Colombia Geisha Reserve',
    roast: 'O\'rta (Medium)',
    notes: 'Shaftoli, apelsin guli, toffee karamel va qora choy',
    altitude: '1,750 - 2,050 m',
    process: 'Natural Anaerobic',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Brazil Cerrado Mineiro',
    roast: 'To\'q / Boy (Medium-Dark)',
    notes: 'Qovurilgan yong\'oq, qora shokolad, quyuq jigarrang shakar',
    altitude: '1,100 - 1,250 m',
    process: 'Pulped Natural',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80'
  }
];

export const TABLES = [
  { id: 'T-1', name: 'Stol 1', type: 'Deraza yonida', capacity: 2, icon: 'Users' },
  { id: 'T-2', name: 'Stol 2', type: 'Deraza yonida', capacity: 2, icon: 'Users' },
  { id: 'T-3', name: 'Stol 3', type: 'Romantik burchak', capacity: 2, icon: 'Heart' },
  { id: 'T-4', name: 'Stol 4', type: 'Katta oilaviy zal', capacity: 4, icon: 'Users' },
  { id: 'T-5', name: 'Stol 5', type: 'Katta oilaviy zal', capacity: 6, icon: 'Users' },
  { id: 'T-6', name: 'Stol 6', type: 'Ochiq osmon terassasi', capacity: 4, icon: 'Sun' },
  { id: 'T-7', name: 'Stol 7', type: 'VIP Maxsus xona', capacity: 8, icon: 'Crown' },
  { id: 'T-8', name: 'Stol 8', type: 'Barista bar hisoblagichi', capacity: 2, icon: 'Coffee' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Nodira Salimova',
    role: 'Gastronomiya Bloggeri',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'AURA shahardagi eng sevimli kofe maskanimga aylandi! Ularning Signature Velvet Latte qahvasi shunchaki asar. Atmosfera esa ish uchrashuvlari va xordiq uchun tengsiz darajada go\'zal.',
    date: '2 kun oldin'
  },
  {
    id: 2,
    name: 'Jasur Mirzayev',
    role: 'IT Arxitektor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Toshkentda haqiqiy Specialty darajadagi Efiopiya va Kolumbiya donalarini to\'g\'ri ekstraksiya qiladigan kamdan-kam joy. Ribeye steyki va xizmat ko\'rsatish madaniyati hayratda qoldiradi.',
    date: '1 hafta oldin'
  },
  {
    id: 3,
    name: 'Madina & Sherzod',
    role: 'Doimiy Mehmonlar',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Biz to\'y yilligimizni VIP zalda nishonladik. Stol bezagi, shamlar va San Sebastian cheezkeyki ertaknamo edi. Xodimlar har bir detalga e\'tibor qaratishdi, rahmat!',
    date: '2 hafta oldin'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'atmosphere',
    title: 'Elegent Kechki Interyer',
    subtitle: 'Issiq chiroqlar va qulay charmli o\'rindiqlar',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    category: 'coffee',
    title: 'Latte Art Nozikligi',
    subtitle: 'Chempion baristalarimiz qo\'l mehnati',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    category: 'food',
    title: 'Shef Taomlari',
    subtitle: 'Har bir likopchada nozik san\'at',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    category: 'atmosphere',
    title: 'Yashil Terassa Zali',
    subtitle: 'Tabiat bilan uyg\'un toza havo maydoni',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    category: 'coffee',
    title: 'Qahva Donalari Laboratoriyasi',
    subtitle: 'Muntazam qovurish va degustatsiya jarayoni',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    category: 'food',
    title: 'Artisan Shirinliklar',
    subtitle: 'Har tong yangi pishiriladigan pishiriqlar',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80'
  }
];

export const FLAVOR_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Bugun sizning kayfiyatingiz qanday yoki qanday quvvat kerak?",
    options: [
      { text: "Tiniq aql va kuchli quvvat (Kofein zarbasi kerak)", value: 'strong' },
      { text: "Xotirjam, muloyim va iliq hordiq", value: 'smooth' },
      { text: "Muzdek tetiklik va yangilanish", value: 'refreshing' },
      { text: "Shirin lazzat va o'zimni erkalash", value: 'sweet' }
    ]
  },
  {
    id: 2,
    question: "Ta'm profilida sizga nima ko'proq yoqadi?",
    options: [
      { text: "To'yingan qora shokolad va yong'oq notalari", value: 'chocolate' },
      { text: "Karamel, vanil va ipakdek qaymoq", value: 'creamy' },
      { text: "Yengil mevalar, gul xushbo'yligi va sitrus", value: 'fruity' },
      { text: "To'yimli taom yoki pishiriq bilan birga ichish", value: 'pairing' }
    ]
  }
];

