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

// Vehicle database with specifications and high-res photography
const fleetData = [
  {
    id: "mercedes-s-class",
    category: "sedan",
    name: {
      ar: "مرسيدس بنز مايباخ / S-Class",
      en: "Mercedes-Benz Maybach / S-Class"
    },
    subtitle: {
      ar: "سيدان رجال الأعمال والفخامة المطلقة",
      en: "The Benchmark of Executive Luxury"
    },
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1622200294736-86877995a5f1?auto=format&fit=crop&w=1000&q=80",
    passengers: "3 - 4",
    luggage: "3",
    tag: {
      ar: "الأكثر طلباً",
      en: "Most Popular"
    },
    features: {
      ar: ["مقاعد مساج وتبريد", "إضاءة محيطية 64 لون", "شاشات ترفيه خلفية", "واي فاي 5G فائق السرعة"],
      en: ["Massage & Climate Seats", "64-Color Ambient Lighting", "Rear Entertainment Screens", "Ultra-fast 5G Wi-Fi"]
    }
  },
  {
    id: "rolls-royce-ghost",
    category: "sedan",
    name: {
      ar: "رولز رويس جوست VIP",
      en: "Rolls-Royce Ghost VIP"
    },
    subtitle: {
      ar: "قمة الوجاهة الملكية والمناسبات الأرقى",
      en: "Royal Elegance & Grand Occasions"
    },
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1000&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    passengers: "4",
    luggage: "3",
    tag: {
      ar: "ملكية VIP",
      en: "Royal VIP"
    },
    features: {
      ar: ["سقف النجوم المضيء Starlight", "عزل صوتي فائق الهدوء", "ضيافة VIP فاخرة", "أبواب شفط كهربائية"],
      en: ["Starlight Headliner", "Whisper-Quiet Soundproofing", "VIP Refreshment Console", "Soft-Close Coach Doors"]
    }
  },
  {
    id: "cadillac-escalade",
    category: "suv",
    name: {
      ar: "كاديلاك إسكاليد ESV الرئاسية",
      en: "Cadillac Escalade ESV Presidential"
    },
    subtitle: {
      ar: "رحابة قصوى وهيبة تلفت الأنظار",
      en: "Commanding Presence & Ultimate Space"
    },
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    passengers: "6 - 7",
    luggage: "6",
    tag: {
      ar: "دفع رباعي عائلي",
      en: "Executive SUV"
    },
    features: {
      ar: ["شاشات OLED منحنية 38 إنش", "نظام صوتي AKG Studio 36 مكبر", "سعة أمتعة ضخمة للسفر", "زجاج خصوصية معتم"],
      en: ["38-inch Curved OLED Displays", "AKG Studio 36-Speaker Sound", "Massive Cargo Capacity", "Deep Privacy Glass"]
    }
  },
  {
    id: "bmw-7-series",
    category: "sedan",
    name: {
      ar: "بي إم دبليو الفئة السابعة 740i",
      en: "BMW 7 Series 740i Executive"
    },
    subtitle: {
      ar: "تطور تكنولوجي وأداء رياضي فاخر",
      en: "Futuristic Tech & Executive Dynamics"
    },
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    passengers: "3 - 4",
    luggage: "3",
    tag: {
      ar: "تكنولوجيا حديثة",
      en: "High-Tech"
    },
    features: {
      ar: ["شاشة مسرح 31 إنش Cinema Screen", "تحكم رقمي Touch Command بالأبواب", "نظام تعليق هوائي فائق النعومة", "شحن لاسلكي متعدد"],
      en: ["31.3-inch Theatre Display", "Touch Command Door Controls", "Air Suspension Gliding Ride", "Wireless Multi-Device Charging"]
    }
  },
  {
    id: "range-rover-vogue",
    category: "suv",
    name: {
      ar: "رينج روفر أوتوبيوغرافي",
      en: "Range Rover Autobiography"
    },
    subtitle: {
      ar: "الفخامة البريطانية على كافة الطرقات",
      en: "British Aristocracy & All-Road Mastery"
    },
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1000&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80",
    passengers: "4",
    luggage: "4",
    tag: {
      ar: "راحة مطلقة",
      en: "Unmatched Comfort"
    },
    features: {
      ar: ["مقاعد Executive Class الخلفية", "تنقية هواء المقصورة بتقنية Nanoe", "ثلاجة مدمجة للمرطبات", "دفع رباعي ذكي وسلس"],
      en: ["Executive Class Rear Seating", "Nanoe Air Purification", "Integrated Center Chiller", "Intelligent Smooth All-Wheel Drive"]
    }
  },
  {
    id: "stretch-limousine",
    category: "limousine",
    name: {
      ar: "ليموزين الزفاف الممتد (Stretch Limo)",
      en: "Royal Stretch Wedding Limousine"
    },
    subtitle: {
      ar: "الموكب الأسطوري لليلة العمر وحفلات الزفاف",
      en: "The Legendary Grand Bridal Convoy"
    },
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    passengers: "8 - 10",
    luggage: "5",
    tag: {
      ar: "زفاف ومناسبات",
      en: "Wedding & Gala"
    },
    features: {
      ar: ["صالون فندقي VIP متصل", "بار ضيافة فاخر وإضاءات ليزر", "ستائر خصوصية وحاجز عازل", "تجهيز ورود الزفاف عند الطلب"],
      en: ["Lounge VIP J-Seating", "Illuminated Bar & Disco Starlight", "Full Privacy Divider Screen", "Bridal Floral Arrangement"]
    }
  }
];
