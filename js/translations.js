/**
 * ALLORD CAR - Luxury Limousine Booking Engine
 * Bilingual Translation Dictionary (Arabic & English)
 */

const translations = {
  ar: {
    meta: {
      title: "ALLORD CAR | ليموزين ونقل سياحي فاخر في مصر",
      description: "خدمة الليموزين الأولى في مصر - استقبال وتوديع المطارات، سفريات المحافظات، وزفاف العرسان بأرقى أسطول سيارات فاخر وسائقين محترفين."
    },
    nav: {
      brand: "ALLORD CAR",
      tagline: "ليموزين الفخامة",
      home: "الرئيسية",
      services: "خدماتنا",
      fleet: "أسطول السيارات",
      booking: "احجز رحلتك",
      whyUs: "لماذا ALLORD",
      testimonials: "آراء عملائنا",
      contact: "اتصل بنا",
      bookNowBtn: "احجز الآن ✦",
      installApp: "تثبيت التطبيق 📲",
      callUs: "اتصل الآن"
    },
    hero: {
      badge: "★ خدمة الليموزين الملكية الأولى في مصر",
      title: "ALLORD CAR",
      subtitle: "الفخامة والراحة في كل رحلة",
      description: "نقدم لكم أعلى درجات الرفاهية والأمان مع أحدث أسطول ليموزين وسائقين محترفين. استقبال المطارات، السفريات بين المحافظات، وأرقى سيارات زفاف العرسان على مدار 24 ساعة.",
      ctaBooking: "احجز رحلتك الآن",
      ctaFleet: "استكشف الأسطول",
      stat1Val: "100%",
      stat1Lbl: "التزام بالمواعيد",
      stat2Val: "24/7",
      stat2Lbl: "دعم وخدمة متواصلة",
      stat3Val: "50+",
      stat3Lbl: "سيارة فاخرة حديثة",
      stat4Val: "10K+",
      stat4Lbl: "عميل VIP سعيد"
    },
    quickBook: {
      title: "الحجز السريع",
      serviceLabel: "نوع الخدمة",
      serviceOptAirport: "استقبال وتوديع مطار",
      serviceOptIntercity: "سفريات بين المحافظات",
      serviceOptWedding: "زفاف ومناسبات خاصة",
      serviceOptVIP: "خدمات رجال الأعمال بالساعة",
      pickupLabel: "مكان الانطلاق",
      pickupPlaceholder: "مثال: مطار القاهرة، المعادي، الشيخ زايد...",
      destinationLabel: "الوجهة",
      destinationPlaceholder: "مثال: الإسكندرية، الساحل الشمالي، فندق الفورسيزونز...",
      dateLabel: "التاريخ والوقت",
      submitBtn: "متابعة الحجز الذكي ❯"
    },
    services: {
      sectionBadge: "خدماتنا الراقية",
      title: "حلول تنقل فاخرة صُممت لراحتكم",
      subtitle: "نضع بين أيديكم خبرة سنوات في تقديم أرقى خدمات الليموزين والنقل السياحي في جمهورية مصر العربية.",
      airportTitle: "رحلات واستقبال المطارات",
      airportDesc: "استقبال وتوديع VIP في مطارات القاهرة، برج العرب، سفنكس، وشرم الشيخ. تتبع دقيق لمواعيد الرحلات مع لافتة استقبال باسم العميل ومساعدة في الأمتعة.",
      airportFeature1: "تتبع مواعيد الطائرات لحظياً",
      airportFeature2: "خدمة الاستقبال والترحيب VIP",
      airportFeature3: "سائق خاص في انتظارك بالصالة",
      
      intercityTitle: "السفريات والرحلات بين المحافظات",
      intercityDesc: "سافر براحة تامة وأمان مطلق بين كافة محافظات مصر: الإسكندرية، الساحل الشمالي، العين السخنة، الغردقة، الصعيد. سيارات مجهزة بأقصى وسائل الراحة.",
      intercityFeature1: "طرق وسفر سلس بأحدث الموديلات",
      intercityFeature2: "ضيافة وانترنت Wi-Fi فائق السرعة",
      intercityFeature3: "سائقون محترفون بمعرفة كاملة بالطرق",

      weddingTitle: "زفاف العرسان والمناسبات الخاصة",
      weddingDesc: "اجعل ليلة العمر لا تُنسى مع أرقى سيارات الزفاف والليموزين الممتد المزينة بأناقة متناهية، مع سائق بزي رسمي يليق بفخامة مناسبتكم.",
      weddingFeature1: "تزيين احترافي فاخر حسب الطلب",
      weddingFeature2: "مرافقة كاملة طوال يوم الزفاف",
      weddingFeature3: "سيارات كشف وليموزين كلاسيكي وحديث",

      vipCorporateTitle: "تأجير لرجال الأعمال والشركات",
      vipCorporateDesc: "خدمة النقل التنفيذي المخصصة للمؤتمرات، الوفود الدبلوماسية، والاجتماعات الهامة. سرية تامة وأعلى مستويات الدقة والبروتوكول.",
      vipCorporateFeature1: "سرية تامة وخصوصية مطلقة",
      vipCorporateFeature2: "حجوزات بالساعة أو باليوم الكامل",
      vipCorporateFeature3: "عقود مخصصة للشركات والوفود",
      bookServiceBtn: "طلب هذه الخدمة"
    },
    fleet: {
      sectionBadge: "أسطولنا الحصري",
      title: "نخبة السيارات الفارهة الأكثر فخامة",
      subtitle: "سيارات موديل السنة بحالة الوكالة، معقمة ومجهزة بكافة وسائل الراحة والترفيه التكنولوجي.",
      tabAll: "جميع السيارات",
      tabSedan: "سيدان فاخرة",
      tabSuv: "دفع رباعي VIP",
      tabLimousine: "ليموزين مناسبات",
      capacityPassenger: "ركاب",
      capacityLuggage: "حقائب",
      reserveBtn: "احجز هذه السيارة",
      featuresTitle: "مزايا الرفاهية:"
    },
    bookingForm: {
      sectionBadge: "نظام الحجز الذكي",
      title: "احجز رحلتك الفاخرة عبر واتساب",
      subtitle: "أدخل بيانات رحلتك وسيتم توليد رسالة حجز رسمية ومفصلة ونقلك مباشرة إلى محادثة واتساب مع فريق خدمة عملاء ALLORD CAR للتأكيد الفوري.",
      labelName: "الاسم الكريم",
      placeholderName: "أدخل اسمك بالكامل",
      labelPhone: "رقم الهاتف / الواتساب",
      placeholderPhone: "+20 1XX XXX XXXX",
      labelService: "نوع الخدمة المطلوبة",
      labelVehicle: "السيارة المفضلة",
      vehicleSelectPrompt: "اختر السيارة المفضلة (أو اتركها مفتوحة)",
      labelPickup: "نقطة الانطلاق (عنوان أو مطار)",
      placeholderPickup: "مثال: صالة 3 مطار القاهرة، أو مدينتي، أو التجمع...",
      labelDropoff: "وجهة الوصول",
      placeholderDropoff: "مثال: سموحة الإسكندرية، مراسي الساحل الشمالي، فندق...",
      labelDateTime: "تاريخ ووقت الرحلة",
      labelNotes: "ملاحظات إضافية / رقم الرحلة الجوية",
      placeholderNotes: "أي متطلبات خاصة (مقعد أطفال، لافتة استقبال باسم معين، موعد هبوط الطائرة...)",
      submitWhatsApp: "تأكيد الحجز عبر واتساب فوراً 📲",
      guarantee: "🔒 حجزك مؤكد ومباشر مع الإدارة بدون وسيط | رقم الحجز المباشر: 01114085092"
    },
    whyUs: {
      sectionBadge: "التميز والريادة",
      title: "لماذا يختار النخبة ALLORD CAR؟",
      subtitle: "نحن لا نقدم مجرد وسيلة مواصلات، بل نصنع تجربة تنقل راقية ومريحة تبقى في ذاكرتك.",
      f1Title: "سائقون ببروتوكول احترافي",
      f1Desc: "فريق من أمهر السائقين ذوي الخبرة الواسعة، يرتدون زياً رسمياً أنيقاً ويلتزمون بأعلى معايير الخصوصية واللباقة.",
      f2Title: "انضباط 100% في المواعيد",
      f2Desc: "ندرك تماماً قيمة وقتك؛ سيارتك في انتظارك قبل الموعد المحدد بـ 15 دقيقة مع تتبع حي ومباشر لحركة السير.",
      f3Title: "أسطول حديث ومجهز بالكامل",
      f3Desc: "جميع سياراتنا موديلات حديثة ومجهزة بخدمة Wi-Fi مجانية، شواحن ذكية، مياه معدنية، وتعقيم شامل قبل كل رحلة.",
      f4Title: "أسعار تنافسية وشفافة",
      f4Desc: "أفضل قيمة مقابل فخامة الخدمة دون أي رسوم خفية أو مفاجآت. أسعار ثابتة ومنافسة مع فواتير رسمية عند الطلب.",
      f5Title: "تغطية كاملة لجميع المحافظات",
      f5Desc: "خدماتنا تغطي القاهرة الكبرى، الإسكندرية، الساحل الشمالي، الغردقة، شرم الشيخ وكافة أنحاء جمهورية مصر العربية.",
      f6Title: "أمان مطلق وخصوصية",
      f6Desc: "زجاج معتم للخصوصية، أنظمة أمان متطورة، وسرية تامة لمعلومات وبيانات كافة عملائنا الكرام."
    },
    testimonials: {
      sectionBadge: "شهادات نعتز بها",
      title: "ماذا يقول عملاء ALLORD CAR؟",
      subtitle: "نفخر بثقة كبار الشخصيات، رجال الأعمال، والعائلات الراقية الذين شاركونا رحلاتهم.",
      t1Text: "خدمة راقية جداً في استقبال مطار القاهرة. السائق كان في انتظاري باللافتة والسيارة مرسيدس S-Class نظيفة كأنها خارجة من المعرض. احترافية تضاهي كبرى شركات الليموزين في أوروبا.",
      t1Author: "م. طارق العوضي",
      t1Role: "رجل أعمال - دبي / القاهرة",
      t2Text: "حجزت سيارة كاديلاك إسكاليد لرحلة الساحل الشمالي مع عائلتي. القيادة كانت غاية في السلاسة والأمان، والمقاعد مريحة للغاية للأطفال. بالتأكيد خياري الدائم في مصر.",
      t2Author: "د. سامح عبد الوهاب",
      t2Role: "استشاري واستاذ جامعي",
      t3Text: "تعاملت مع ALLORD CAR في موكب زفافنا. الالتزام بالموعد والديكور الرائع للسيارة كان سبباً رئيسياً في راحة بالنا في يوم مهم جداً. شكراً لكل الفريق ولخدمة العملاء السريعة على واتساب.",
      t3Author: "كريم ونورهان",
      t3Role: "عرسان - القاهرة"
    },
    footer: {
      brandDesc: "ALLORD CAR هي الشركة الرائدة في خدمات الليموزين، استقبال المطارات، السفريات، وتأجير السيارات الفاخرة بسائق في مصر. فخامة وأمان على مدار الساعة.",
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا",
      contactHeading: "بيانات التواصل المباشر",
      phoneLabel: "الهاتف / واتساب:",
      phoneVal: "+20 111 408 5092",
      serviceAreaLabel: "منطقة التغطية:",
      serviceAreaVal: "القاهرة، الإسكندرية، الساحل الشمالي، شرم الشيخ، وكافة محافظات مصر",
      hoursLabel: "ساعات العمل:",
      hoursVal: "خدمة عملاء وحجوزات متاحة 24/7 طوال أيام الأسبوع",
      copyright: "جميع الحقوق محفوظة © 2025 ALLORD CAR لخدمات الليموزين والنقل الفاخر.",
      craftedWith: "الفخامة والراحة في كل رحلة"
    },
    whatsappMsg: {
      greeting: "السلام عليكم، أرغب في حجز ليموزين مع ALLORD CAR 🚗✨",
      detailsTitle: "📋 تفاصيل الحجز:",
      clientName: "👤 الاسم:",
      phone: "📱 رقم التواصل:",
      serviceType: "🏷️ نوع الخدمة:",
      vehicle: "🚘 السيارة المطلوبة:",
      pickup: "📍 مكان الانطلاق:",
      dropoff: "🏁 وجهة الوصول:",
      dateTime: "🕒 التاريخ والوقت:",
      notes: "📝 ملاحظات خاصة:",
      footer: "يرجى تأكيد التوافر والسعر. شكراً لكم!"
    }
  },

  en: {
    meta: {
      title: "ALLORD CAR | Luxury Limousine & Chauffeur Services in Egypt",
      description: "Egypt's premier VIP limousine and chauffeur service. Airport transfers, intercity long-distance luxury travel, and VIP weddings with an elite fleet."
    },
    nav: {
      brand: "ALLORD CAR",
      tagline: "Luxury Limousine",
      home: "Home",
      services: "Services",
      fleet: "Our Fleet",
      booking: "Book Ride",
      whyUs: "Why ALLORD",
      testimonials: "Reviews",
      contact: "Contact",
      bookNowBtn: "Book Now ✦",
      installApp: "Install App 📲",
      callUs: "Call Now"
    },
    hero: {
      badge: "★ Egypt's Premier VIP Limousine & Chauffeur Service",
      title: "ALLORD CAR",
      subtitle: "The Pinnacle of Luxury & Comfort",
      description: "Experience world-class luxury, absolute discretion, and flawless punctuality with our state-of-the-art fleet and executive chauffeurs. 24/7 airport transfers, intercity luxury trips, and royal wedding transport.",
      ctaBooking: "Book Your Ride Now",
      ctaFleet: "Explore Our Fleet",
      stat1Val: "100%",
      stat1Lbl: "On-Time Guarantee",
      stat2Val: "24/7",
      stat2Lbl: "Concierge & Support",
      stat3Val: "50+",
      stat3Lbl: "Luxury Modern Fleet",
      stat4Val: "10K+",
      stat4Lbl: "Satisfied VIP Clients"
    },
    quickBook: {
      title: "Quick Reservation",
      serviceLabel: "Service Type",
      serviceOptAirport: "Airport VIP Transfer",
      serviceOptIntercity: "Intercity / Long Distance",
      serviceOptWedding: "Wedding & Special Events",
      serviceOptVIP: "Hourly Executive Chauffeur",
      pickupLabel: "Pickup Location",
      pickupPlaceholder: "e.g., Cairo Airport Terminal 3, Maadi, New Cairo...",
      destinationLabel: "Destination",
      destinationPlaceholder: "e.g., Alexandria, North Coast, Four Seasons Hotel...",
      dateLabel: "Date & Time",
      submitBtn: "Proceed with Smart Booking ❯"
    },
    services: {
      sectionBadge: "Exclusive Services",
      title: "Tailored Luxury Transportation Solutions",
      subtitle: "Crafted to meet the highest international VIP standards for discerning corporate, diplomatic, and leisure travelers in Egypt.",
      airportTitle: "Airport VIP Transfers",
      airportDesc: "Punctual meet & greet services at Cairo International, Borg El Arab, Sphinx, and Sharm El Sheikh airports. Real-time flight tracking, baggage assistance, and terminal greeting.",
      airportFeature1: "Real-time automated flight tracking",
      airportFeature2: "Nameplate VIP terminal greeting",
      airportFeature3: "Dedicated chauffeur waiting at arrivals",

      intercityTitle: "Intercity & Long Distance Travel",
      intercityDesc: "Travel with sublime ease between Cairo, Alexandria, the North Coast (Marassi/Hacienda), Red Sea resorts, and Upper Egypt. Uncompromising safety and supreme cabin luxury.",
      intercityFeature1: "Smooth travel in latest vehicle models",
      intercityFeature2: "Complimentary Wi-Fi and chilled refreshments",
      intercityFeature3: "Experienced, route-certified chauffeurs",

      weddingTitle: "VIP Weddings & Special Events",
      weddingDesc: "Make your grand entrance unforgettable. Impeccably detailed luxury sedans and stretch limousines with floral styling and tuxedo-attired chauffeurs for your special celebration.",
      weddingFeature1: "Custom luxury floral decoration on request",
      weddingFeature2: "Full-day dedicated bridal convoy escort",
      weddingFeature3: "Convertibles, classic and stretch limos",

      vipCorporateTitle: "Corporate & Executive Chauffeur",
      vipCorporateDesc: "Discreet, high-security executive transportation for corporate summits, visiting delegations, and business leaders. On-board executive amenities for work on the move.",
      vipCorporateFeature1: "Strict privacy and non-disclosure protocol",
      vipCorporateFeature2: "Flexible hourly or multi-day reservations",
      vipCorporateFeature3: "Customized corporate invoicing solutions",
      bookServiceBtn: "Request This Service"
    },
    fleet: {
      sectionBadge: "Our Luxury Fleet",
      title: "The World's Most Prestigious Automobiles",
      subtitle: "Current model-year vehicles maintained to showroom standards, sanitized, and outfitted with top-tier comfort and entertainment technologies.",
      tabAll: "All Vehicles",
      tabSedan: "Luxury Sedans",
      tabSuv: "VIP SUVs",
      tabLimousine: "Royal Limousines",
      capacityPassenger: "Passengers",
      capacityLuggage: "Luggage",
      reserveBtn: "Reserve This Vehicle",
      featuresTitle: "VIP Cabin Amenities:"
    },
    bookingForm: {
      sectionBadge: "Smart Reservation System",
      title: "Instant VIP WhatsApp Booking",
      subtitle: "Provide your travel details below. Our system will generate an official itinerary and connect you directly with ALLORD CAR concierge on WhatsApp for instant confirmation.",
      labelName: "Full Name",
      placeholderName: "Enter your full name",
      labelPhone: "Phone / WhatsApp Number",
      placeholderPhone: "+20 1XX XXX XXXX",
      labelService: "Selected Service",
      labelVehicle: "Vehicle Preference",
      vehicleSelectPrompt: "Select preferred vehicle (or leave flexible)",
      labelPickup: "Pickup Location / Terminal",
      placeholderPickup: "e.g., Cairo Airport Terminal 3, Tagamoa, Zamalek...",
      labelDropoff: "Drop-off Destination",
      placeholderDropoff: "e.g., Alexandria Corniche, Marassi North Coast, Hotel...",
      labelDateTime: "Date & Time",
      labelNotes: "Special Notes / Flight Number",
      placeholderNotes: "Flight details, child safety seats, specific nameplate request...",
      submitWhatsApp: "Confirm Reservation via WhatsApp 📲",
      guarantee: "🔒 Direct reservation with ALLORD CAR dispatch | Direct Line: +201114085092"
    },
    whyUs: {
      sectionBadge: "Excellence & Distinction",
      title: "Why Elite Travelers Choose ALLORD CAR",
      subtitle: "We do not merely provide transportation; we curate an extraordinary, stress-free journey tailored to your prestige.",
      f1Title: "Protocol-Trained Chauffeurs",
      f1Desc: "Attired in formal business suits, our experienced chauffeurs are trained in executive protocol, etiquette, and defensive driving.",
      f2Title: "Guaranteed 100% Punctuality",
      f2Desc: "We value your precious time. Your vehicle arrives 15 minutes before the scheduled time with active traffic monitoring.",
      f3Title: "Newest Fleet & Supreme Hygiene",
      f3Desc: "Showroom-condition, sanitized vehicles equipped with high-speed 5G Wi-Fi, multi-device fast chargers, and chilled refreshments.",
      f4Title: "Transparent Luxury Rates",
      f4Desc: "Competitive executive rates with zero hidden charges. Fixed pricing and transparent agreements with VAT receipts on demand.",
      f5Title: "Nationwide Coverage in Egypt",
      f5Desc: "Covering Greater Cairo, Alexandria, New Alamein, North Coast, Hurghada, Sharm El Sheikh, and all Egyptian governorates.",
      f6Title: "Absolute Privacy & Discretion",
      f6Desc: "Privacy glass tinting, acoustic insulation, and absolute confidentiality for corporate leaders, celebrities, and families."
    },
    testimonials: {
      sectionBadge: "Client Testimonials",
      title: "Trusted by Leaders, Executives & Couples",
      subtitle: "Discover why prominent travelers and discerning families rely on ALLORD CAR for all their transportation requirements in Egypt.",
      t1Text: "Outstanding airport greeting at Cairo Airport. The driver waited at Terminal 3 arrivals with a clear nameplate. The Mercedes S-Class was pristine and smooth. World-class service!",
      t1Author: "Eng. Tarek El-Awady",
      t1Role: "Managing Director - Dubai / Cairo",
      t2Text: "Booked the Cadillac Escalade for an intercity family trip to the North Coast. The ride was extremely safe and whisper-quiet. The kids loved the onboard entertainment. Highly recommended.",
      t2Author: "Dr. Sameh Abdel-Wahab",
      t2Role: "Senior Consultant & Professor",
      t3Text: "ALLORD CAR handled our wedding day convoy flawlessly. The vehicle decoration was tasteful and glamorous. The chauffeur was patient and courteous throughout the entire day.",
      t3Author: "Karim & Nourhan",
      t3Role: "Newlyweds - Cairo"
    },
    footer: {
      brandDesc: "ALLORD CAR is Egypt's leading luxury limousine and executive chauffeur transport provider. Serving airports, governorate travel, VIP weddings, and corporate delegations 24/7.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactHeading: "Direct Contact",
      phoneLabel: "Phone / WhatsApp:",
      phoneVal: "+20 111 408 5092",
      serviceAreaLabel: "Coverage Area:",
      serviceAreaVal: "Cairo, Giza, Alexandria, North Coast, Sharm, Hurghada & all Egypt",
      hoursLabel: "Working Hours:",
      hoursVal: "Concierge & Dispatch available 24/7 around the clock",
      copyright: "All Rights Reserved © 2025 ALLORD CAR Limousine & VIP Services.",
      craftedWith: "Luxury and Comfort in Every Journey"
    },
    whatsappMsg: {
      greeting: "Hello, I would like to book a luxury limousine ride with ALLORD CAR 🚗✨",
      detailsTitle: "📋 Booking Itinerary Details:",
      clientName: "👤 Passenger Name:",
      phone: "📱 Contact Phone:",
      serviceType: "🏷️ Service Requested:",
      vehicle: "🚘 Preferred Vehicle:",
      pickup: "📍 Pickup Location:",
      dropoff: "🏁 Drop-off Destination:",
      dateTime: "🕒 Date & Scheduled Time:",
      notes: "📝 Special Requests / Flight #:",
      footer: "Please confirm availability and quote. Thank you!"
    }
  }
};

// Real Fleet database populated directly from ALLORD CAR photos
const fleetData = [
  {
    id: "mercedes-e-class-black-amg",
    category: "sedan",
    name: {
      ar: "مرسيدس بنز E-Class بلاك AMG",
      en: "Mercedes-Benz E-Class Black AMG"
    },
    subtitle: {
      ar: "سيدان رجال الأعمال واستقبال المطارات الفاخر",
      en: "Executive VIP Sedan for Airport & Business Travel"
    },
    image: "assets/cars/mercedes-e-class-black-amg.jpg",
    fallbackImg: "assets/cars/mercedes-e-class-exclusive.jpg",
    passengers: "3 - 4",
    luggage: "3",
    tag: {
      ar: "VIP الأكثر طلباً",
      en: "Most Popular VIP"
    },
    features: {
      ar: ["شبك AMG دياموند وفخامة ألمانية", "مقاعد جلدية مريحة وتكييف خلفي مزدوج", "مثالية لاستقبال مطار القاهرة والوفود", "واي فاي وشواحن ذكية وضيافة كاملة"],
      en: ["AMG Diamond Grille & German Luxury", "Leather Comfort Seats & Dual Rear Climate", "Ideal for Cairo Airport VIP & Delegations", "High-speed Wi-Fi & Device Chargers"]
    }
  },
  {
    id: "mercedes-e-class-exclusive",
    category: "sedan",
    name: {
      ar: "مرسيدس بنز E-Class إكسكلوسيف",
      en: "Mercedes-Benz E-Class Exclusive"
    },
    subtitle: {
      ar: "الفخامة الكلاسيكية للنجمة الفضية على البحر والسفريات",
      en: "Classic Standing-Star Prestige for Intercity Travel"
    },
    image: "assets/cars/mercedes-e-class-exclusive.jpg",
    fallbackImg: "assets/cars/mercedes-e-class-black-amg.jpg",
    passengers: "3 - 4",
    luggage: "3",
    tag: {
      ar: "نجمة كلاسيكية",
      en: "Classic Star"
    },
    features: {
      ar: ["شبك كلاسيكي بنجمة مرسيدس الواقفة", "سفر سلس ومريح بين كافة المحافظات", "عزل صوتي فائق ونظام تعليق ناعم", "تعقيم شامل وضيافة VIP قبل كل رحلة"],
      en: ["Standing Star Classic Chrome Grille", "Ultra-smooth Intercity Travel Across Egypt", "Whisper-quiet Acoustic Insulation", "Fully Sanitized with VIP Amenities"]
    }
  },
  {
    id: "mercedes-c-class-white-wedding",
    category: "limousine",
    name: {
      ar: "مرسيدس بنز C-Class زفاف ملكي بيضاء",
      en: "Mercedes-Benz C-Class White Wedding"
    },
    subtitle: {
      ar: "سيارة زفاف العرسان الملكية مع باقة الورد الفاخرة",
      en: "Royal White Bridal Sedan with Floral Styling"
    },
    image: "assets/cars/mercedes-c-class-white-gt.jpg",
    fallbackImg: "assets/cars/mercedes-c-class-white-exclusive.jpg",
    passengers: "3 - 4",
    luggage: "2",
    tag: {
      ar: "زفاف العرسان",
      en: "Wedding Special"
    },
    features: {
      ar: ["تزيين ورود طبيعية أنيقة لليلة العمر", "شبك Panamericana رياضي فاره", "سائق ببدلة رسمية وأعلى درجات اللباقة", "مرافقة كاملة طوال موكب ويوم الزفاف"],
      en: ["Elegant Fresh Flower Bridal Styling", "Panamericana GT Sport Grille", "Chauffeur in Tuxedo & Formal Protocol", "Full Day Wedding Convoy Escort"]
    }
  },
  {
    id: "hummer-white-lambo-doors",
    category: "suv",
    name: {
      ar: "هامر VIP بأبواب فراشة (Lambo Doors)",
      en: "Hummer White VIP Lambo Doors"
    },
    subtitle: {
      ar: "الوحش الأمريكي الفاخر بأبواب تفتح للأعلى للمناسبات والمواكب",
      en: "American Luxury SUV with Vertical Scissor Doors"
    },
    image: "assets/cars/hummer-white-lambo-doors.jpg",
    fallbackImg: "assets/cars/hummer-white-side.jpg",
    passengers: "5 - 6",
    luggage: "5",
    tag: {
      ar: "أبواب فراشة مميزة",
      en: "Lambo Doors VIP"
    },
    features: {
      ar: ["أبواب فراشة Lambo تفتح للأعلى لهيبة استثنائية", "إطلالة ملفتة للأنظار في الزفاف وجلسات التصوير", "مقصورة رحبة ومريحة جداً", "نظام صوتي ضخم وقوي وإضاءات حماسية"],
      en: ["Vertical Opening Scissor Doors", "Head-Turning Wedding & Photoshoot Presence", "Expansive VIP Passenger Cabin", "High-Power Audio & Dynamic Presence"]
    }
  },
  {
    id: "range-rover-evoque-white",
    category: "suv",
    name: {
      ar: "رينج روفر إيفوك بيضاء فاخرة",
      en: "Range Rover Evoque White Luxury"
    },
    subtitle: {
      ar: "الفخامة البريطانية والأناقة العصرية لرجال الأعمال والرحلات",
      en: "British Elegance & Contemporary Executive Style"
    },
    image: "assets/cars/range-rover-evoque-white.jpg",
    fallbackImg: "assets/cars/hummer-white-lambo-doors.jpg",
    passengers: "4",
    luggage: "4",
    tag: {
      ar: "دفع رباعي فاخر",
      en: "Luxury SUV"
    },
    features: {
      ar: ["تصميم بريطاني فاره وسقف بانوراما أسود", "دفع رباعي ذكي وسفر سلس للساحل والمنتجعات", "مقاعد جلدية فاخرة ومقصورة هادئة", "إطلالة راقية أمام الفنادق والڤلل"],
      en: ["Prestigious British Styling & Panoramic Roof", "Intelligent AWD for Coastal & City Trips", "Plush Leather Cabin & Whisper-Quiet Ride", "Commanding Appearance at 5-Star Venues"]
    }
  },
  {
    id: "chrysler-300c-white-wedding",
    category: "limousine",
    name: {
      ar: "كرايسلر 300C ليموزين زفاف بيضاء",
      en: "Chrysler 300C White Wedding Limousine"
    },
    subtitle: {
      ar: "الليموزين الأمريكي الكلاسيكي لزفاف ملكي وشبك رولز رويس",
      en: "Classic American Limousine with Rolls-Style Grille"
    },
    image: "assets/cars/chrysler-300c-white-wedding.jpg",
    fallbackImg: "assets/cars/mercedes-c-class-white-gt.jpg",
    passengers: "4 - 5",
    luggage: "3",
    tag: {
      ar: "ليموزين زفاف",
      en: "Royal Limo"
    },
    features: {
      ar: ["شبك أمامي كروم فخم مستوحى من رولز رويس", "تزيين احترافي بباقات ورود العروسين", "جنوط كروم لامعة ومقاعد واسعة جداً", "تجربة زفاف لا تُنسى في كل صورة"],
      en: ["Rolls-Royce Inspired Chrome Front Grille", "Custom Bridal Floral Arrangement", "Polished Chrome Alloys & Spacious Cabin", "Unforgettable Wedding Convoy Experience"]
    }
  },
  {
    id: "chrysler-300c-black-wedding",
    category: "sedan",
    name: {
      ar: "كرايسلر 300C بلاك شبك بنتلي VIP",
      en: "Chrysler 300C Black Bentley Style VIP"
    },
    subtitle: {
      ar: "هيبة اللون الأسود الملكي وشبك بنتلي الماسي مع بوكيه ورد",
      en: "Commanding Black Presence with Bentley Mesh Grille"
    },
    image: "assets/cars/chrysler-300c-black-wedding.jpg",
    fallbackImg: "assets/cars/mercedes-e-class-black-amg.jpg",
    passengers: "4 - 5",
    luggage: "3",
    tag: {
      ar: "بنتلي ستايل",
      en: "Bentley Style"
    },
    features: {
      ar: ["شبك أمامي مخصص بشعار B مستوحى من بنتلي", "تزيين ورد فاخر أو خدمة رجال أعمال رسمية", "فتحة سقف وإضاءات زينون قوية", "حضور مهيب يلفت الأنظار في المواكب"],
      en: ["Bentley-Inspired Custom Mesh Grille with 'B' Emblem", "Floral Wedding Decor or Executive VIP", "Panoramic Sunroof & Xenon Illumination", "Bold Executive Road Presence"]
    }
  },
  {
    id: "mg-zs-blue-wedding",
    category: "suv",
    name: {
      ar: "إم جي ZS زرقاء ميتاليك زفاف وسفريات",
      en: "MG ZS Metallic Blue SUV Wedding Edition"
    },
    subtitle: {
      ar: "سيارة SUV عصرية بلون أزرق ساحر وتزيين ورد أنيق",
      en: "Modern Metallic Blue SUV for Intercity & Weddings"
    },
    image: "assets/cars/mg-zs-blue-wedding.jpg",
    fallbackImg: "assets/cars/mg-zs-blue-suv.jpg",
    passengers: "4",
    luggage: "4",
    tag: {
      ar: "عصرية وشبابية",
      en: "Youth & Modern"
    },
    features: {
      ar: ["لون أزرق ميتاليك براق يلفت الأنظار", "تجهيز ورود زفاف أنيقة أو سفريات عائلية", "ارتفاع مناسب لجميع الطرقات وسفر مريح", "تكييف قوي ونظام ترفيه متكامل"],
      en: ["Vibrant Metallic Blue Eye-Catching Finish", "Bridal Floral Setup or Comfortable Family Trips", "Elevated Ground Clearance for Smooth Travel", "Powerful AC & Integrated Entertainment"]
    }
  },
  {
    id: "mg5-blue-wedding",
    category: "sedan",
    name: {
      ar: "إم جي سيدان زرقاء ميتاليك زفاف وسفريات",
      en: "MG Sedan Metallic Blue Wedding & Travel"
    },
    subtitle: {
      ar: "سيدان عصرية بتزيين زفاف متألق وراحة تامة",
      en: "Contemporary Sedan with Radiant Floral Styling"
    },
    image: "assets/cars/mg5-blue-wedding.jpg",
    fallbackImg: "assets/cars/mg5-black-wedding.jpg",
    passengers: "4",
    luggage: "3",
    tag: {
      ar: "زفاف وسفريات",
      en: "Wedding Sedan"
    },
    features: {
      ar: ["باقة ورود متناسقة وشريط تزيين أنيق", "صالون داخلي واسع ومريح جداً", "اقتصادية ومريحة لسفريات المحافظات", "سائق محترف ومواعيد دقيقة 100%"],
      en: ["Artistic Bouquet & Coordinated Ribbons", "Spacious & Ergonomic Interior Cabin", "Comfortable & Economical for Intercity Trips", "Punctual Professional Chauffeur"]
    }
  },
  {
    id: "mg5-black-wedding",
    category: "sedan",
    name: {
      ar: "إم جي سيدان سوداء ملكية زفاف وسفريات",
      en: "MG Sedan Black Royal Wedding & Travel"
    },
    subtitle: {
      ar: "أناقة اللون الأسود الملكي مع بوكيه ورد ملون مبهج",
      en: "Royal Black Elegance with Vibrant Floral Bouquet"
    },
    image: "assets/cars/mg5-black-wedding.jpg",
    fallbackImg: "assets/cars/mg5-blue-wedding.jpg",
    passengers: "4",
    luggage: "3",
    tag: {
      ar: "أسود ملكي",
      en: "Royal Black"
    },
    features: {
      ar: ["تناغم فخم بين الأسود الملكي وألوان الورد", "مثالية لمواكب الزفاف والمناسبات الخاصة", "راحة وثبات عالي في السفر", "تكييف ثلج وصوتيات نقية"],
      en: ["Striking Contrast of Royal Black & Fresh Flowers", "Perfect for Wedding Convoys & Special Events", "Smooth High-Speed Stability", "Chilled AC & Crisp Audio"]
    }
  },
  {
    id: "chevrolet-optra-wedding",
    category: "sedan",
    name: {
      ar: "شيفروليه أوبترا زفاف وسفريات",
      en: "Chevrolet Optra Wedding & Travel"
    },
    subtitle: {
      ar: "الخيار العملي المريح للسفريات والمطارات ومواكب الزفاف",
      en: "Practical Comfort for Travel, Airports & Weddings"
    },
    image: "assets/cars/chevrolet-optra-wedding.jpg",
    fallbackImg: "assets/cars/chevrolet-optra-black.jpg",
    passengers: "4",
    luggage: "3",
    tag: {
      ar: "اقتصادي مريح",
      en: "Smart Value"
    },
    features: {
      ar: ["تزيين شيفون وورود أنيقة لحفلات الزفاف", "رحلات وسفريات اقتصادية ومريحة بين المحافظات", "شنطة أمتعة واسعة لحقائب السفر والمطار", "سائق أمين وملتزم بالمواعيد"],
      en: ["Graceful Chiffon Drapes & Floral Wedding Art", "Affordable & Highly Reliable Intercity Travel", "Generous Trunk Space for Luggage", "Trustworthy Punctual Chauffeur"]
    }
  }
];
