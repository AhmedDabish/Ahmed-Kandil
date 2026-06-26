// ================================================================
// 0. TRANSLATIONS
// ================================================================
const translations = {
    ar: {
        nav_about: 'نبذة',
        nav_services: 'الخدمات',
        nav_portfolio: 'أعمالي',
        nav_experience: 'الخبرات',
        nav_contact: 'اتصل',
        badge_available: 'متاح للاستشارات',
        hero_name_prefix: 'د.',
        hero_name: 'أحمد قنديل',
        hero_title: 'استشاري تجميل وزراعة الأسنان',
        hero_cred1: 'BDS, MSc',
        hero_cred2: 'عضو الجمعية المصرية',
        hero_desc: 'أحول الابتسامات إلى أعمال فنية باستخدام أحدث تقنيات الطب التجميلي مع رعاية شاملة وراحة لا تضاهى.',
        hero_btn1: 'استعرض أعمالي',
        hero_btn2: 'احجز موعداً',
        tip1: 'فحص دوري كل 6 أشهر',
        tip2: 'تنظيف الأسنان مرتين يومياً',
        tip3: 'ابتسامتك تهمنا',
        badge_exp: '8+ سنوات خبرة',
        stat1_label: 'سنوات خبرة',
        stat2_label: 'حالة ناجحة',
        stat3_label: 'مريض راضٍ',
        stat4_label: 'رضا المرضى',
        services_title_prefix: 'خدماتي',
        services_title_highlight: 'الطبية',
        services_subtitle: 'أحدث التقنيات في تجميل وزراعة الأسنان',
        service1_title: 'زراعة الأسنان',
        service1_desc: 'زراعة دائمة وآمنة بتقنيات متطورة تعيد لك الثقة والابتسامة.',
        service2_title: 'تجميل الأسنان',
        service2_desc: 'فينير، عدسات لاصقة، وتبييض احترافي لابتسامة هوليود.',
        service3_title: 'تقويم الأسنان',
        service3_desc: 'تقويم شفاف وتقليدي لتصحيح الاعوجاج وتحسين المظهر.',
        portfolio_title_prefix: 'أعمالي',
        portfolio_title_highlight: 'المميزة',
        portfolio_subtitle: 'نماذج من حالاتي الناجحة',
        click_preview: 'معاينة',
        portfolio_title1: 'زراعة الفك الكامل',
        portfolio_desc1: 'تقنية All-on-6',
        portfolio_title2: 'ابتسامة هوليود',
        portfolio_desc2: '16 فينير تجميلي',
        portfolio_title3: 'تقويم شفاف',
        portfolio_desc3: 'إنفزلاين 8 أشهر',
        portfolio_title4: 'زراعة العظم',
        portfolio_desc4: 'رفع الجيوب والزراعة',
        exp_title_prefix: 'السيرة',
        exp_title_highlight: 'الذاتية',
        exp_subtitle: 'الخبرات والمؤهلات العلمية',
        exp1_title: 'استشاري تجميل وزراعة الأسنان',
        exp1_org: 'عيادات هوليود للابتسامة',
        exp1_desc: 'إجراء عمليات زراعة متقدمة، تركيب الفينير، والإشراف على فريق التجميل.',
        exp1_badge: 'زميل الكلية الملكية للأسنان',
        exp2_title: 'أخصائي جراحة الفم',
        exp2_org: 'مستشفى السلام التخصصي',
        exp2_desc: 'علاج جراحات الفك والوجه، وخلع الأسنان المدفونة تحت التخدير.',
        exp2_badge: 'دبلوم جراحة الوجه والفكين',
        exp3_title: 'بكالوريوس طب الأسنان',
        exp3_org: 'جامعة القاهرة - بتقدير امتياز',
        exp3_desc: 'تخصص في زراعة وتجميل الأسنان مع مشروع تخرج متميز في زراعة الفك الكامل.',
        exp3_badge: 'عضوية الجمعية المصرية لتجميل الأسنان',
        test_title_prefix: 'آراء',
        test_title_highlight: 'المرضى',
        test_subtitle: 'ما يقوله من عالجتهم',
        test1_text: 'تجربة رائعة، الدكتور أحمد قنديل محترف جداً والنتيجة فاقت توقعاتي. ابتسامتي تغيرت تماماً.',
        test1_author: 'محمد ر.',
        test2_text: 'أفضل طبيب تعاملت معه. شرح لي كل خطوة وكان حريص على راحتي طوال فترة العلاج.',
        test2_author: 'سارة م.',
        contact_title_prefix: 'تواصل',
        contact_title_highlight: 'معي',
        contact_subtitle: 'للاستشارات وحجز المواعيد',
        contact_info_title: 'لنصنع ابتسامتك',
        contact_info_desc: 'أنا هنا للإجابة على استفساراتك وتقديم استشارة مجانية.',
        contact_address: 'القاهرة، مصر - مدينة نصر',
        clinic_hours_title: 'ساعات العمل',
        clinic_sat: 'السبت - الأربعاء',
        clinic_thu: 'الخميس',
        clinic_fri: 'الجمعة',
        clinic_closed: 'مغلق',
        form_name: 'الاسم بالكامل',
        form_email: 'البريد الإلكتروني',
        form_phone: 'رقم الهاتف',
        form_message: 'نوع الخدمة أو الاستفسار...',
        form_submit: 'احجز موعدك الآن',
        footer_text: '© 2026 <strong style="color:var(--text);">أحمد قنديل</strong> - جميع الحقوق محفوظة.',
        footer_sub: 'استشاري تجميل وزراعة الأسنان | BDS, MSc',
        modal_title: 'معرض',
        modal_subtitle: 'اضغط على أي صورة لتكبيرها',
        typed_phrases: [
            '🦷 د. أحمد قنديل - استشاري تجميل وزراعة الأسنان',
            '✨ خبير في ابتسامة هوليود',
            '📐 متخصص في التقويم الشفاف',
            '❤️ نصنع الابتسامات معاً'
        ]
    },
    en: {
        nav_about: 'About',
        nav_services: 'Services',
        nav_portfolio: 'Portfolio',
        nav_experience: 'Experience',
        nav_contact: 'Contact',
        badge_available: 'Available for consultations',
        hero_name_prefix: 'Dr.',
        hero_name: 'Ahmed Qandil',
        hero_title: 'Consultant in Cosmetic & Dental Implantology',
        hero_cred1: 'BDS, MSc',
        hero_cred2: 'Member of Egyptian Society',
        hero_desc: 'I transform smiles into art using the latest aesthetic dentistry techniques with comprehensive care and unparalleled comfort.',
        hero_btn1: 'View My Work',
        hero_btn2: 'Book Appointment',
        tip1: 'Check-up every 6 months',
        tip2: 'Brush teeth twice daily',
        tip3: 'Your smile matters',
        badge_exp: '8+ Years Experience',
        stat1_label: 'Years Experience',
        stat2_label: 'Successful Cases',
        stat3_label: 'Happy Patients',
        stat4_label: 'Patient Satisfaction',
        services_title_prefix: 'My',
        services_title_highlight: 'Medical Services',
        services_subtitle: 'Latest technologies in cosmetic and dental implantology',
        service1_title: 'Dental Implants',
        service1_desc: 'Permanent and safe implants with advanced techniques to restore your confidence and smile.',
        service2_title: 'Cosmetic Dentistry',
        service2_desc: 'Veneers, crowns, and professional whitening for a Hollywood smile.',
        service3_title: 'Orthodontics',
        service3_desc: 'Clear aligners and traditional braces to correct misalignment and improve appearance.',
        portfolio_title_prefix: 'My',
        portfolio_title_highlight: 'Portfolio',
        portfolio_subtitle: 'Samples of my successful cases',
        click_preview: 'Preview',
        portfolio_title1: 'Full Jaw Implant',
        portfolio_desc1: 'All-on-6 Technique',
        portfolio_title2: 'Hollywood Smile',
        portfolio_desc2: '16 Cosmetic Veneers',
        portfolio_title3: 'Clear Aligners',
        portfolio_desc3: 'Invisalign - 8 Months',
        portfolio_title4: 'Bone Grafting',
        portfolio_desc4: 'Sinus Lift & Bone Graft',
        exp_title_prefix: 'My',
        exp_title_highlight: 'Resume',
        exp_subtitle: 'Experience & Qualifications',
        exp1_title: 'Consultant of Cosmetic & Dental Implantology',
        exp1_org: 'Hollywood Smile Clinics',
        exp1_desc: 'Performing advanced implant surgeries, veneer placement, and overseeing the cosmetic team.',
        exp1_badge: 'Fellow of the Royal College of Dentistry',
        exp2_title: 'Oral Surgery Specialist',
        exp2_org: 'Al-Salam Specialized Hospital',
        exp2_desc: 'Treating maxillofacial surgeries and extracting impacted teeth under anesthesia.',
        exp2_badge: 'Diploma in Maxillofacial Surgery',
        exp3_title: 'Bachelor of Dental Surgery',
        exp3_org: 'Cairo University - with Honors',
        exp3_desc: 'Specialized in implantology and cosmetic dentistry with a distinguished graduation project in full jaw implantation.',
        exp3_badge: 'Member of the Egyptian Society for Cosmetic Dentistry',
        test_title_prefix: 'Patient',
        test_title_highlight: 'Testimonials',
        test_subtitle: 'What they say about my work',
        test1_text: 'Amazing experience! Dr. Ahmed Qandil is very professional and the results exceeded my expectations. My smile has completely changed.',
        test1_author: 'Mohamed R.',
        test2_text: 'The best dentist I have ever dealt with. He explained every step and was very concerned about my comfort throughout the treatment.',
        test2_author: 'Sara M.',
        contact_title_prefix: 'Get in',
        contact_title_highlight: 'Touch',
        contact_subtitle: 'For consultations and appointments',
        contact_info_title: 'Let\'s design your smile',
        contact_info_desc: 'I am here to answer your questions and provide a free consultation.',
        contact_address: 'Cairo, Egypt - Nasr City',
        clinic_hours_title: 'Working Hours',
        clinic_sat: 'Sat - Wed',
        clinic_thu: 'Thursday',
        clinic_fri: 'Friday',
        clinic_closed: 'Closed',
        form_name: 'Full Name',
        form_email: 'Email Address',
        form_phone: 'Phone Number',
        form_message: 'Service type or inquiry...',
        form_submit: 'Book Your Appointment Now',
        footer_text: '© 2026 <strong style="color:var(--text);">Ahmed Qandil</strong> - All Rights Reserved.',
        footer_sub: 'Consultant in Cosmetic & Dental Implantology | BDS, MSc',
        modal_title: 'Gallery',
        modal_subtitle: 'Click on any image to enlarge',
        typed_phrases: [
            '🦷 Dr. Ahmed Qandil - Consultant in Cosmetic & Dental Implantology',
            '✨ Expert in Hollywood Smile',
            '📐 Specialist in Clear Aligners',
            '❤️ We craft smiles together'
        ]
    }
};

// ================================================================
// 1. LANGUAGE STATE
// ================================================================
let currentLang = localStorage.getItem('lang') || 'ar';

// ================================================================
// 2. CUSTOM CURSOR
// ================================================================
const cursor = document.getElementById('custom-cursor');
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll(
        'a, button, .portfolio-item, .gallery-item, .btn, .theme-toggle, .hamburger, .modal-close, .lightbox-nav, .lightbox-close'
        );
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ================================================================
// 3. DATA (صور الأسنان)
// ================================================================
const casesData = [{
    title: 'زراعة الفك الكامل',
    subtitle: 'تقنية All-on-6 - زراعة 6 دعامات للفك العلوي والسفلي',
    images: [
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1551601651-bc60f254d532?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1629909613654-28cc8e4abae7?w=600&h=400&fit=crop&crop=center'
    ]
}, {
    title: 'ابتسامة هوليود',
    subtitle: 'تركيب 16 فينير تجميلي - تصميم رقمي دقيق',
    images: [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1551601651-bc60f254d532?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1598257006626-48c0c252a0d6?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center'
    ]
}, {
    title: 'تقويم شفاف',
    subtitle: 'علاج تقويم بالإنفزلاين - مدة العلاج 8 أشهر',
    images: [
        'https://images.unsplash.com/photo-1598257006626-48c0c252a0d6?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1629909613654-28cc8e4abae7?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1598257006626-48c0c252a0d6?w=600&h=400&fit=crop&crop=center'
    ]
}, {
    title: 'زراعة العظم',
    subtitle: 'جراحة رفع الجيوب الأنفية وزراعة العظم الصناعي',
    images: [
        'https://images.unsplash.com/photo-1629909613654-28cc8e4abae7?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1629909613654-28cc8e4abae7?w=600&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1551601651-bc60f254d532?w=600&h=400&fit=crop&crop=center'
    ]
}];

// ================================================================
// 4. TYPING EFFECT
// ================================================================
const typedText = document.getElementById('typedText');
let typingInterval = null;

function getTypedPhrases() {
    return translations[currentLang].typed_phrases;
}

function startTypingEffect() {
    if (typingInterval) {
        clearTimeout(typingInterval);
    }
    const phrases = getTypedPhrases();
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typedText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typedText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400;
        }
        typingInterval = setTimeout(typeEffect, typingSpeed);
    }
    typeEffect();
}

// ================================================================
// 5. APPLY LANGUAGE
// ================================================================
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.getElementById('langText').textContent = lang === 'ar' ? 'عربي' : 'ENG';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.placeholder = translations[lang][key];
        }
    });

    // تحديث عناوين المودال
    const modalTitleEl = document.getElementById('modalTitle');
    const modalSubtitleEl = document.getElementById('modalSubtitle');
    if (modalTitleEl) {
        const titleKey = lang === 'ar' ? 'معرض' : 'Gallery';
        modalTitleEl.innerHTML =
            `<i class="fas fa-tooth"></i> <span class="highlight">${titleKey}</span> الصور`;
    }
    if (modalSubtitleEl) {
        modalSubtitleEl.textContent = translations[lang].modal_subtitle || 'اضغط على أي صورة لتكبيرها';
    }

    if (typingInterval) {
        clearTimeout(typingInterval);
    }
    startTypingEffect();
}

// ================================================================
// 6. TOGGLE LANGUAGE
// ================================================================
document.getElementById('langToggle').addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLang);
});

// ================================================================
// 7. PROGRESS BAR
// ================================================================
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (height > 0 ? (scrollTop / height) * 100 : 0) + '%';
});

// ================================================================
// 8. THEME TOGGLE
// ================================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
});

function updateIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ================================================================
// 9. MOBILE MENU
// ================================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ================================================================
// 10. REVEAL OBSERVER
// ================================================================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// ================================================================
// 11. CIRCULAR PROGRESS
// ================================================================
const circleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;
            const circleWrap = card.querySelector('.circle-wrap');
            if (!circleWrap) return;
            const target = parseInt(circleWrap.dataset.target) || 0;
            const circle = circleWrap.querySelector('.progress-circle');
            const numSpan = circleWrap.querySelector('.circle-number span');

            if (!circle || !numSpan) return;

            const radius = 45;
            const circumference = 2 * Math.PI * radius;
            circle.style.strokeDasharray = circumference;

            let percent = 0;
            if (target >= 100) {
                percent = Math.min(target / 1500, 0.8);
            } else if (target >= 50) {
                percent = Math.min(target / 100, 0.8);
            } else {
                percent = Math.min(target / 100, 0.95);
            }
            if (percent < 0.05 && target > 0) percent = 0.15;

            const finalTarget = target;
            let current = 0;
            const stepTime = 20;
            const totalSteps = 60;
            const increment = finalTarget / totalSteps;

            const counterInterval = setInterval(() => {
                current += increment;
                if (current >= finalTarget) {
                    current = finalTarget;
                    clearInterval(counterInterval);
                }
                numSpan.textContent = Math.floor(current);
            }, stepTime);

            circle.style.strokeDashoffset = circumference;
            setTimeout(() => {
                circle.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.2, 0.9, 0.3, 1)';
                const offset = circumference - (percent * circumference);
                circle.style.strokeDashoffset = offset;
            }, 300);

            circleObserver.unobserve(card);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-card').forEach(card => {
    circleObserver.observe(card);
});

// ================================================================
// 12. CONTACT FORM
// ================================================================
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showToast('⚠️ ' + (currentLang === 'ar' ? 'الرجاء ملء جميع الحقول المطلوبة.' :
            'Please fill in all required fields.'), 'error');
        return;
    }

    console.log('📨 إرسال بيانات الحجز:', { name, email, phone: document.getElementById('phone').value.trim(),
        message });
    showToast('✅ ' + (currentLang === 'ar' ? 'تم استلام طلبك! سأتواصل معك خلال 24 ساعة.' :
        'Your request has been received! I will contact you within 24 hours.'), 'success');
    form.reset();
});

function showToast(msg, type = 'success') {
    toast.textContent = msg;
    toast.className = 'toast ' + type + ' show';
    setTimeout(() => toast.classList.remove('show'), 4500);
}

// ================================================================
// 13. SCROLL SPY
// ================================================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a:not(.theme-toggle):not(.lang-toggle)');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navAnchors.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + current ? 'var(--text)' :
            'var(--text-muted)';
    });
});

// ================================================================
// 14. MODAL
// ================================================================
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalGallery = document.getElementById('modalGallery');
const modalClose = document.getElementById('modalClose');

console.log('✅ Modal elements found:', { modalOverlay, modalTitle, modalSubtitle, modalGallery, modalClose });

const portfolioItems = document.querySelectorAll('.portfolio-item');
console.log('📊 عدد بطاقات الأعمال:', portfolioItems.length);

portfolioItems.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        const data = casesData[index];
        if (!data) {
            console.error('❌ لا توجد بيانات للمؤشر:', index);
            return;
        }

        console.log('🖱️ فتح المودال:', data.title);

        const titleKey = `portfolio_title${index+1}`;
        const titleText = translations[currentLang][titleKey] || data.title;
        modalTitle.innerHTML = `<i class="fas fa-tooth"></i> <span class="highlight">${titleText}</span>`;

        const subtitleText = data.subtitle + ` (${data.images.length} صورة)`;
        modalSubtitle.innerHTML = `
                    ${subtitleText}
                    <span class="image-counter"><i class="fas fa-images"></i> ${data.images.length} صورة</span>
                `;

        modalGallery.innerHTML = '';
        data.images.forEach((imgSrc, imgIndex) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `
                        <img src="${imgSrc}" alt="${data.title}" loading="lazy" />
                        <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
                        <div class="image-number-badge">${imgIndex + 1}</div>
                    `;
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                openLightbox(data.images, imgIndex);
            });
            modalGallery.appendChild(div);
        });

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeLightbox();
    }
});

// ================================================================
// 15. LIGHTBOX
// ================================================================
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounterText = document.getElementById('lightboxCounterText');

let currentImages = [];
let currentImageIndex = 0;

function openLightbox(images, index) {
    currentImages = images;
    currentImageIndex = index;
    updateLightboxImage();
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightboxImage() {
    if (currentImages.length === 0) return;
    lightboxImage.src = currentImages[currentImageIndex];
    lightboxCounterText.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
}

function navigateLightbox(direction) {
    if (currentImages.length === 0) return;
    currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
    updateLightboxImage();
}

function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
    currentImages = [];
    currentImageIndex = 0;
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
});

lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
});

lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
});

document.addEventListener('keydown', (e) => {
    if (!lightboxOverlay.classList.contains('active')) return;
    if (e.key === 'ArrowRight') navigateLightbox(-1);
    if (e.key === 'ArrowLeft') navigateLightbox(1);
});

// ================================================================
// 16. BOOTSTRAP
// ================================================================
applyLanguage(currentLang);
console.log('✅ تم تحميل البورتفوليو مع نظام الترجمة (عربي / إنجليزي) والمودال المُصلح!');
console.log('🦷 اللغة الأساسية: العربية');