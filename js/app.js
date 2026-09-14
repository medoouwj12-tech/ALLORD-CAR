/**
 * ALLORD CAR - Luxury Limousine Web Engine
 * Core Application Logic & State Management
 */

(function () {
  'use strict';

  // Constants & State
  const WHATSAPP_PHONE = "201114085092";
  let currentLang = localStorage.getItem('allord_lang') || 'ar';
  let currentFilter = 'all';

  // DOM Elements Cache
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const fleetGrid = document.getElementById('fleetGrid');
  const fleetFilterBtns = document.querySelectorAll('.fleet-tab-btn');
  const bookingForm = document.getElementById('bookingForm');
  const heroQuickForm = document.getElementById('heroQuickForm');
  const vehicleSelect = document.getElementById('vehicleSelect');
  const serviceSelect = document.getElementById('serviceSelect');

  // Initialization
  function init() {
    setLanguage(currentLang);
    setupNavigation();
    renderFleet();
    setupFleetFilters();
    setupForms();
    setupScrollAnimations();
    setupQuickBookingSync();
    setupPWAInstall();
  }

  /**
   * Bilingual Language Engine
   */
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'ar';
    currentLang = lang;
    localStorage.setItem('allord_lang', lang);

    const isRtl = (lang === 'ar');
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Update document title and meta description
    if (translations[lang].meta) {
      document.title = translations[lang].meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', translations[lang].meta.description);
    }

    // Update Language Toggle Badge
    if (langLabel) {
      langLabel.textContent = isRtl ? 'English' : 'العربية';
    }

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = getNestedTranslation(translations[lang], key);
      if (text) {
        el.textContent = text;
      }
    });

    // Update elements with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const html = getNestedTranslation(translations[lang], key);
      if (html) {
        el.innerHTML = html;
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const placeholder = getNestedTranslation(translations[lang], key);
      if (placeholder) {
        el.setAttribute('placeholder', placeholder);
      }
    });

    // Populate Vehicle Dropdown in selected language
    populateVehicleDropdown();

    // Re-render fleet to update text strings
    renderFleet();
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  }

  function toggleLanguage() {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  }

  /**
   * Populate Vehicle Selector Dropdown
   */
  function populateVehicleDropdown(selectedId = '') {
    if (!vehicleSelect) return;
    const placeholderText = translations[currentLang].bookingForm.vehicleSelectPrompt;

    let html = `<option value="">${placeholderText}</option>`;
    fleetData.forEach(car => {
      const name = car.name[currentLang];
      const isSelected = selectedId === car.id ? 'selected' : '';
      html += `<option value="${car.name.en}" ${isSelected}>${name}</option>`;
    });

    vehicleSelect.innerHTML = html;
  }

  /**
   * Resolve Car Image Path across any hosting environment (local / GitHub Pages / root)
   */
  function resolveCarPath(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
      return path;
    }
    return './' + path.replace(/^\.\//, '');
  }

  /**
   * Resilient fallback handler for mobile image errors
   */
  window.handleCarImageError = function(img, fallbackSrc, carName) {
    if (fallbackSrc && !img.dataset.triedFallback && img.src !== fallbackSrc) {
      img.dataset.triedFallback = "true";
      img.src = fallbackSrc;
      return;
    }
    img.onerror = null;
    img.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23141414'/%3E%3Ctext x='50%25' y='45%25' font-size='22' font-family='sans-serif' fill='%23D4AF37' text-anchor='middle' font-weight='bold'%3E%F0%9F%91%91 ALLORD CAR%3C/text%3E%3Ctext x='50%25' y='58%25' font-size='15' font-family='sans-serif' fill='%23E0E0E0' text-anchor='middle'%3E" + encodeURIComponent(carName) + "%3C/text%3E%3C/svg%3E";
  };

  /**
   * Fleet Rendering and Filtering
   */
  function renderFleet() {
    if (!fleetGrid) return;

    const filtered = currentFilter === 'all'
      ? fleetData
      : fleetData.filter(car => car.category === currentFilter);

    const isAr = currentLang === 'ar';

    fleetGrid.innerHTML = filtered.map(car => {
      const name = car.name[currentLang];
      const subtitle = car.subtitle[currentLang];
      const tag = car.tag[currentLang];
      const features = car.features[currentLang];
      const passText = translations[currentLang].fleet.capacityPassenger;
      const luggText = translations[currentLang].fleet.capacityLuggage;
      const reserveText = translations[currentLang].fleet.reserveBtn;
      const featuresTitle = translations[currentLang].fleet.featuresTitle;

      const imgSrc = resolveCarPath(car.image);
      const fallbackSrc = resolveCarPath(car.fallbackImg);

      return `
        <div class="luxury-card group flex flex-col justify-between" data-category="${car.category}">
          <!-- Vehicle Image Area -->
          <div class="vehicle-img-wrapper h-60 w-full relative bg-[#141414]">
            <img 
              src="${imgSrc}" 
              alt="${name}" 
              loading="eager"
              onerror="window.handleCarImageError(this, '${fallbackSrc}', '${car.name.en}')"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30"></div>
            
            <!-- Category & Popularity Tag -->
            <span class="absolute top-4 ${isAr ? 'right-4' : 'left-4'} gold-accent-badge text-xs shadow-lg">
              ${tag}
            </span>

            <!-- Capacity Badges -->
            <div class="absolute bottom-3 ${isAr ? 'right-4' : 'left-4'} flex items-center gap-3 text-xs text-white/90">
              <span class="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <i class="fa-solid fa-user-group text-[#D4AF37]"></i> ${car.passengers} ${passText}
              </span>
              <span class="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <i class="fa-solid fa-suitcase-rolling text-[#D4AF37]"></i> ${car.luggage} ${luggText}
              </span>
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                ${name}
              </h3>
              <p class="text-sm text-neutral-400 mb-4 line-clamp-2">
                ${subtitle}
              </p>

              <!-- Features checklist -->
              <div class="border-t border-neutral-800/80 pt-3.5 mb-5">
                <span class="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-2">
                  ${featuresTitle}
                </span>
                <ul class="space-y-1.5 text-xs text-neutral-300">
                  ${features.map(f => `
                    <li class="flex items-center gap-2">
                      <i class="fa-solid fa-circle-check text-[#D4AF37] text-[11px]"></i>
                      <span>${f}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Action Button -->
            <button 
              type="button" 
              class="select-vehicle-btn w-full btn-gold-outline text-sm py-2.5 flex items-center justify-center gap-2"
              data-vehicle-id="${car.id}"
              data-vehicle-name="${car.name[currentLang]}"
            >
              <span>${reserveText}</span>
              <i class="fa-solid ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'} text-xs"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events to the newly rendered cards
    document.querySelectorAll('.select-vehicle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const vName = btn.getAttribute('data-vehicle-name');
        const vId = btn.getAttribute('data-vehicle-id');
        selectVehicleAndScroll(vId, vName);
      });
    });
  }

  function setupFleetFilters() {
    fleetFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fleetFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderFleet();
      });
    });
  }

  function selectVehicleAndScroll(vehicleId, vehicleName) {
    if (vehicleSelect) {
      populateVehicleDropdown(vehicleId);
      // Fallback matching
      Array.from(vehicleSelect.options).forEach(opt => {
        if (opt.text.toLowerCase().includes(vehicleName.toLowerCase()) || (vehicleId && opt.value.toLowerCase().includes(vehicleId))) {
          opt.selected = true;
        }
      });
    }

    // Smooth scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      // Highlight the booking box briefly
      const bookingCard = document.querySelector('.booking-highlight-box');
      if (bookingCard) {
        bookingCard.classList.add('ring-2', 'ring-[#D4AF37]');
        setTimeout(() => {
          bookingCard.classList.remove('ring-2', 'ring-[#D4AF37]');
        }, 2000);
      }
    }
  }

  /**
   * Hero Quick Booking to Main Form Synchronizer
   */
  function setupQuickBookingSync() {
    if (!heroQuickForm) return;

    heroQuickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const heroService = document.getElementById('heroService')?.value || '';
      const heroPickup = document.getElementById('heroPickup')?.value || '';
      const heroDropoff = document.getElementById('heroDropoff')?.value || '';
      const heroDate = document.getElementById('heroDate')?.value || '';

      // Transfer values to the main booking form
      if (serviceSelect && heroService) serviceSelect.value = heroService;
      const mainPickup = document.getElementById('pickupLocation');
      if (mainPickup && heroPickup) mainPickup.value = heroPickup;
      const mainDropoff = document.getElementById('dropoffLocation');
      if (mainDropoff && heroDropoff) mainDropoff.value = heroDropoff;
      const mainDate = document.getElementById('pickupDateTime');
      if (mainDate && heroDate) mainDate.value = heroDate;

      // Scroll to booking form
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /**
   * Smart WhatsApp Booking Generator
   */
  function setupForms() {
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName')?.value.trim();
      const phone = document.getElementById('clientPhone')?.value.trim();
      const service = serviceSelect?.options[serviceSelect.selectedIndex]?.text || '';
      const vehicle = vehicleSelect?.options[vehicleSelect.selectedIndex]?.text || (currentLang === 'ar' ? 'حسب الأنسب / غير محدد' : 'Best Available / Open');
      const pickup = document.getElementById('pickupLocation')?.value.trim();
      const dropoff = document.getElementById('dropoffLocation')?.value.trim();
      const dateTime = document.getElementById('pickupDateTime')?.value.trim();
      const notes = document.getElementById('clientNotes')?.value.trim() || (currentLang === 'ar' ? 'لا يوجد' : 'None');

      if (!name || !phone || !pickup || !dropoff) {
        showToast(currentLang === 'ar' ? 'يرجى إكمال الحقول الإلزامية أولاً' : 'Please fill in required fields first', 'error');
        return;
      }

      // Compile WhatsApp Structured Message
      const t = translations[currentLang].whatsappMsg;
      let message = `${t.greeting}\n\n`;
      message += `${t.detailsTitle}\n`;
      message += `━━━━━━━━━━━━━━━━━━━━\n`;
      message += `${t.clientName} ${name}\n`;
      message += `${t.phone} ${phone}\n`;
      message += `${t.serviceType} ${service}\n`;
      message += `${t.vehicle} ${vehicle}\n`;
      message += `${t.pickup} ${pickup}\n`;
      message += `${t.dropoff} ${dropoff}\n`;
      if (dateTime) {
        message += `${t.dateTime} ${dateTime}\n`;
      }
      message += `${t.notes} ${notes}\n`;
      message += `━━━━━━━━━━━━━━━━━━━━\n`;
      message += `🕒 ${currentLang === 'ar' ? 'وقت الطلب:' : 'Request Timestamp:'} ${new Date().toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US')}\n\n`;
      message += `${t.footer}`;

      // Open WhatsApp API Link
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

      showToast(currentLang === 'ar' ? 'جاري تحويلك إلى واتساب...' : 'Redirecting to WhatsApp...', 'success');

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 500);
    });
  }

  /**
   * Navigation & Mobile Drawer Setup
   */
  function setupNavigation() {
    // Language Toggle
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', toggleLanguage);
    }

    const mobileLangToggleBtn = document.getElementById('mobileLangToggleBtn');
    if (mobileLangToggleBtn) {
      mobileLangToggleBtn.addEventListener('click', () => {
        toggleLanguage();
        closeMobileDrawer();
      });
    }

    // Mobile Menu
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', openMobileDrawer);
    }
    if (mobileMenuCloseBtn) {
      mobileMenuCloseBtn.addEventListener('click', closeMobileDrawer);
    }
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMobileDrawer);
    }

    // Close drawer when clicking nav link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeMobileDrawer);
    });

    // Sticky Navbar background glass increase on scroll
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('luxury-glass-strong', 'shadow-2xl');
          navbar.classList.remove('bg-transparent');
        } else {
          navbar.classList.remove('luxury-glass-strong', 'shadow-2xl');
          navbar.classList.add('luxury-glass');
        }
      }
    });
  }

  function openMobileDrawer() {
    if (mobileMenuDrawer && mobileOverlay) {
      mobileMenuDrawer.classList.remove('translate-x-full', '-translate-x-full');
      mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
      mobileOverlay.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileDrawer() {
    if (mobileMenuDrawer && mobileOverlay) {
      const isRtl = currentLang === 'ar';
      mobileMenuDrawer.classList.add(isRtl ? 'translate-x-full' : '-translate-x-full');
      mobileOverlay.classList.remove('opacity-100');
      mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }

  /**
   * Scroll Reveal Animations (Safe: Immediate visibility guarantee)
   */
  function setupScrollAnimations() {
    document.querySelectorAll('.fade-in-section').forEach(el => {
      el.classList.add('is-visible');
    });
  }

  /**
   * PWA Service Worker & Install Prompt Setup
   */
  function setupPWAInstall() {
    // 1. Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log('[ALLORD CAR PWA] Service Worker registered successfully:', reg.scope);
            if (typeof reg.update === 'function') {
              reg.update();
            }
          })
          .catch((err) => {
            console.warn('[ALLORD CAR PWA] Service Worker registration failed:', err);
          });
      });
    }

    // 2. Handle beforeinstallprompt Event
    let deferredPrompt = null;
    const desktopInstallBtn = document.getElementById('installAppBtn');
    const mobileInstallBtn = document.getElementById('mobileInstallAppBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent browser default mini-infobar
      e.preventDefault();
      deferredPrompt = e;

      // Make install buttons prominent
      if (desktopInstallBtn) desktopInstallBtn.classList.remove('hidden');
      if (mobileInstallBtn) mobileInstallBtn.classList.remove('hidden');
    });

    function triggerInstall() {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            showToast(currentLang === 'ar' ? 'شكراً لتثبيت تطبيق ALLORD CAR! 👑' : 'Thank you for installing ALLORD CAR! 👑', 'success');
          }
          deferredPrompt = null;
        });
      } else {
        // Fallback for iOS or already installed
        const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIos) {
          showToast(
            currentLang === 'ar' 
              ? 'لتثبيت التطبيق على آيفون: اضغط زر المشاركة (Share) في الأسفل ثم اختر "إضافة إلى الشاشة الرئيسية" 📲' 
              : 'On iPhone: Tap the Share button at bottom and select "Add to Home Screen" 📲',
            'info'
          );
        } else {
          showToast(
            currentLang === 'ar' 
              ? 'تطبيق ALLORD CAR مثبت أو جاهز للاستخدام مباشرة من شاشتك الرئيسية 📲' 
              : 'ALLORD CAR App is installed or ready from your home screen 📲',
            'info'
          );
        }
      }
    }

    if (desktopInstallBtn) {
      desktopInstallBtn.addEventListener('click', triggerInstall);
    }
    if (mobileInstallBtn) {
      mobileInstallBtn.addEventListener('click', () => {
        closeMobileDrawer();
        triggerInstall();
      });
    }

    window.addEventListener('appinstalled', () => {
      console.log('[ALLORD CAR PWA] App was installed successfully');
      if (desktopInstallBtn) desktopInstallBtn.classList.add('hidden');
      if (mobileInstallBtn) mobileInstallBtn.classList.add('hidden');
    });
  }

  /**
   * Toast notification helper
   */
  function showToast(message, type = 'info') {
    const existing = document.getElementById('allordToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'allordToast';
    toast.className = `fixed bottom-24 left-1/2 -translate-x-1/2 z-[10000] px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-2xl transition-all duration-300 ${
      type === 'success' ? 'bg-[#128C7E] text-white border border-[#25D366]' :
      type === 'error' ? 'bg-red-900/90 text-white border border-red-500' :
      'bg-[#1E1E1E] text-[#D4AF37] border border-[#D4AF37]/40'
    }`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, 20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Initialize on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
