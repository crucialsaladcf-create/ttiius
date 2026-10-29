/* =============================================================
   page sections — every string matches the live site word-for-word
   ============================================================= */

const TESTIMONIALS = [
  { name: 'Kiran Kumar', role: 'JEE Advanced AIR 985', img: 'assets/img/kiran.png',
    content: 'The structured approach and personal attention at  ASS MINDS helped me understand complex concepts clearly. The regular tests and detailed analysis of my performance were crucial in identifying my weak areas and improving them.' },
  { name: 'Puneet Kumar', role: 'Cooper Hospital (MBBS) , Mumbai', img: 'assets/img/puneet.png',
    content: "Joining Ass Minds was the best decision I made for my NEET preparation. The faculty's expertise and the comprehensive study material made difficult topics easy to understand. The doubt-solving sessions were particularly helpful." },
  { name: 'Sayali Parab', role: 'AIR 1047 , AFMC', img: 'assets/img/sayali.png',
    content: 'What sets ASS MINDS apart is their personalized approach to teaching. The mentors identified my strengths and weaknesses and tailored their guidance accordingly. The mock tests were very similar to the actual NCERT pattern.' },
  { name: 'Arjun Singh', role: 'IIT Ropar', img: 'assets/img/arjun.png',
    content: 'A big thanks to Satish sir for his unwavering support during my JEE preparation. His teaching methods were engaging, and helped me in building strong foundation in Physics. The regular test series and doubt-solving sessions were crucial in refining my approach.' },
  { name: 'Pranav Luharuka', role: 'JEE Advanced ', img: 'assets/img/pranav.jpeg',
    content: 'What sets Ass Minds apart is their personalized approach to teaching. The mentors identified my strengths and weaknesses and tailored their guidance accordingly. The mock tests were very similar to the actual JEE pattern.' },
  { name: 'Shubhechha V.', role: 'NEET - UG', img: 'assets/img/shubhechha.png',
    content: 'Enrolling in this institution was a game-changer for my NEET preparation. their top-notch Digital Classroom experience and the interactive sessions, coupled with the expertise of IITian faculties, made complex concepts of physics, easy to grasp.' }
];

const STATS = [
  [25, 'JEE Selections'],
  [100, 'NEET Selections'],
  [15, 'Years of Excellence'],
  [50, 'Top 100 Ranks']
];

function statsBlock() {
  return `<div class="grid-4 stats stagger">${STATS.map(([n, label]) => `
    <div class="stat">
      <div class="stat__num" data-count="${n}" data-suffix="+">0+</div>
      <p class="stat__label">${label}</p>
    </div>`).join('')}</div>`;
}

function testimonialBlock() {
  const dots = TESTIMONIALS.map((_, i) => `<button class="dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Go to testimonial ${i + 1}"></button>`).join('');
  const slides = TESTIMONIALS.map((t, i) => `
    <div class="testimonial__slide tc-slide${i === 0 ? ' active' : ''}" data-slide="${i}" style="display:${i === 0 ? 'block' : 'none'}">
      <div class="testimonial__row">
        <div class="testimonial__avatar"><img src="${t.img}" alt="${t.name}" loading="lazy"></div>
        <div style="flex:1">
          ${svg('quote', 'testimonial__quote-icon')}
          <p class="testimonial__text">${t.content}</p>
          <div>
            <h3 class="testimonial__name">${t.name}</h3>
            <p class="testimonial__role">${t.role}</p>
          </div>
        </div>
      </div>
    </div>`).join('');
  return `
  <div class="testimonial" id="testimonialCarousel">
    <div id="testimonialSlides">${slides}</div>
    <div class="slider-nav">
      <button class="slider-btn" id="tcPrev" aria-label="Previous testimonial">${svg('chevronLeft')}</button>
      <div class="dots">${dots}</div>
      <button class="slider-btn" id="tcNext" aria-label="Next testimonial">${svg('chevronRight')}</button>
    </div>
  </div>`;
}

function ctaBand(heading, text, buttons) {
  return `
  <section class="section section--primary cta-band reveal">
    <div class="container">
      <h2>${heading}</h2>
      <p>${text}</p>
      <div class="btn-row btn-row--center">${buttons}</div>
    </div>
  </section>`;
}

/* ---------------- HOME ---------------- */
function pageHome() {
  const why = [
    ['award', 'Expert Faculty', 'Learn from experienced educators with proven track records in JEE and NEET coaching.'],
    ['bookOpen', 'Comprehensive Curriculum', 'Structured learning path designed to cover all aspects of JEE and NEET syllabi.'],
    ['circleCheckBig', 'Proven Results', 'Consistent track record of top ranks and high selection rates in JEE and NEET.']
  ];
  const services = [
    ['bookOpen', 'Kota Study Material', 'We provide highly researched , updated &amp; easy to use Kotastudy for all subjects.'],
    ['clock', 'Periodic Test Series', 'Regular assessments and detailed analysis to track progress and improve performance.'],
    ['laptop', 'Technology Aided Learning ', 'We incorporate the latest technology to make learning fun , easy and interesting for our students.']
  ];
  return `
<main>
  <div class="hero">
    <div class="hero__bg"></div>
    <div class="container hero__inner">
      <div class="hero__grid">
        <div>
          <h1 class="reveal-up">Unlock Your Potential with Ass Minds</h1>
          <p class="hero__sub reveal-up d1">Unlock your true academic potential with our expert JEE &amp; NEET coaching programs.</p>
          <p class="hero__sub2 reveal-up d2">At Ass Minds, we help students unlock success by unleashing their full potential through personalized guidance and proven strategies.</p>
          <div class="btn-row reveal-up d3">
            <a class="btn btn--secondary" href="enquiry.html">Start Unlocking Potential</a>
            <a class="btn btn--outline" href="about.html">Learn More ${svg('chevronRight')}</a>
          </div>
        </div>
        <div class="hero__media reveal-scale">
          <img src="assets/img/img1.webp" alt="Unlock Your Academic Potential with Ass Minds">
        </div>
      </div>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <h2 class="h2 h2--center">Why Choose Ass Minds?</h2>
      <div class="grid-3 stagger">
        ${why.map(([icon, title, text]) => `
        <div class="card">
          <div class="card__head">
            <div class="icon-badge">${svg(icon)}</div>
            <div class="card__title">${title}</div>
          </div>
          <div class="card__body" style="padding-top:0">
            <div class="card__text">${text}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container">
      <h2 class="h2 h2--center">Student Achievements</h2>
      ${statsBlock()}
      <div style="margin-top:64px">
        <div class="reveal-up">${testimonialBlock()}</div>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container">
      <h2 class="h2 h2--center">Our Services</h2>
      <div class="services-grid stagger">
        ${services.map(([icon, title, text]) => `
        <div class="card">
          <div class="card__head card__head--full">
            <div class="icon-badge">${svg(icon)}</div>
            <div class="card__title">${title}</div>
          </div>
          <div class="card__body" style="padding-top:0">
            <div class="card__text" style="margin-bottom:16px">${text}</div>
            <a class="link-arrow" href="services.html">Learn more ${svg('arrowRight')}</a>
          </div>
        </div>`).join('')}
      </div>
      <div class="center-cta"><a class="btn btn--primary" href="services.html">View All Services</a></div>
    </div>
  </section>

  ${ctaBand('Ready to Begin Your Journey to Success?',
    'Join Ass Minds today and take the first step towards achieving your academic goals.',
    `<a class="btn btn--secondary" href="enquiry.html">Enquire Today</a>
     <a class="btn btn--outline" href="about.html">Learn More</a>`)}
</main>
`;
}

/* ---------------- ABOUT ---------------- */
function pageAbout() {
  const approach = [
    ['01', 'Concept Clarity', 'We focus on building strong conceptual understanding rather than rote learning, enabling students to tackle even the most challenging problems.'],
    ['02', 'Personalized Attention', 'With limited batch sizes, we ensure each student receives individual attention and guidance tailored to their learning pace and style.'],
    ['03', 'Regular Assessment', 'Continuous evaluation through tests and assignments helps identify strengths and areas for improvement, allowing for targeted interventions.']
  ];
  const founders = [
    ['Pratik Dixit', 'Co-founder &amp; Physics Mentor', 'assets/img/pratikdixit.jpeg', '"Education is not just about preparing for exams; it\'s about preparing for life. At Ass Minds, we strive to create an environment where students not only excel academically but also develop critical thinking, problem-solving abilities, and a lifelong love for learning."'],
    ['Satish Rastogi', 'Co-Founder, Physics &amp; Maths Mentor', 'assets/img/satish-rastogi.jpeg', '"At Ass Minds, we believe that education is the most powerful tool to shape a bright future. Our journey began with a vision to provide quality learning, guidance, and mentorship to students aspiring to achieve academic excellence."'],
    ['Deepak Singh', 'Co-Founder &amp; Physics Mentor', 'assets/img/deepak-singh-rana.jpeg', '"Education is not just about learning facts; it’s about gaining the wisdom to apply them in real life. At Ass Minds, we have always believed in the power of knowledge, dedication, and the right guidance to unlock every student’s potential."']
  ];
  return `
<main>
  <div class="page-hero center">
    <div class="container">
      <h1>About Ass Minds</h1>
      <p>Your Gateway to JEE &amp; NEET Success</p>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <div class="grid-2" style="align-items:center">
        <div class="reveal-left">
          <h2 class="h2--sm" style="margin-bottom:24px">Our Mission</h2>
          <p class="lead" style="margin-bottom:24px">At Ass Minds, our mission is to empower students with knowledge, skills, and confidence to excel in competitive examinations like JEE , NEET and MHT-CET. We believe in nurturing talent through personalized attention, innovative teaching methodologies, and a supportive learning environment.</p>
          <p class="lead">We are committed to providing quality education that not only helps students crack competitive exams but also builds a strong foundation for their future academic pursuits.</p>
        </div>
        <div class="reveal-right" style="position:relative;height:400px;border-radius:.5rem;overflow:hidden;box-shadow:var(--shadow-xl)">
          <img src="assets/img/img2.webp" alt="Ass Minds students preparing for JEE, NEET, MHT-CET exams" style="width:100%;height:100%;object-fit:cover;object-position:center">
        </div>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container">
      <h2 class="h2 h2--center">Our Vision</h2>
      <p class="lead center" style="margin-bottom:24px">We envision Ass Minds as a transformative educational institution that not only prepares students for competitive exams like JEE, NEET, and MHT-CET, but also shapes well-rounded individuals ready to face the real world with confidence.</p>
      <p class="lead center" style="margin-bottom:24px">Our goal is to be a nationally respected name in academic excellence, known for blending traditional teaching values with modern, student-centered techniques. We aim to create a ripple effect of impact—empowering one student at a time to inspire communities, build solutions, and lead with integrity.</p>
      <p class="lead center">Through our unwavering commitment to innovation, empathy, and excellence, we strive to build a culture where curiosity is encouraged, critical thinking is second nature, and every learner finds a meaningful path to their aspirations.</p>
    </div>
  </section>

  <section class="section reveal">
    <div class="container center">
      <h2 class="h2 h2--center">Our Teaching Approach</h2>
      <div class="grid-3 stagger" style="text-align:center">
        ${approach.map(([num, title, text]) => `
        <div class="card">
          <div class="card__body">
            <div class="icon-badge icon-badge--lg"><span>${num}</span></div>
            <h3 style="font-size:20px;font-weight:700;margin-bottom:16px">${title}</h3>
            <p>${text}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container">
      <h2 class="h2 h2--center">Co-Founders</h2>
      <div class="grid-3 stagger" style="gap:16px;margin-top:28px;margin-bottom:32px">
        ${founders.map(([name, role, img, quote]) => `
        <div class="founder-card">
          <div class="founder-card__head">
            <div class="founder-card__avatar"><img src="${img}" alt="Founder" loading="lazy"></div>
            <div class="center">
              <h3 class="founder-name">${name}</h3>
              <p class="muted">${role}</p>
            </div>
          </div>
          <blockquote>${quote}</blockquote>
        </div>`).join('')}
      </div>
    </div>
  </section>
</main>`;
}

/* ---------------- PROGRAMS ---------------- */
function pagePrograms() {
  const programs = [
    {
      id: 'engineering', name: 'Engineering Batch',
      desc: 'Comprehensive preparation for engineering entrance exams with integrated board curriculum',
      icon: 'graduationCap', iconColor: '#3b82f6', accent: '#3b82f6', chip: 'rgba(59,130,246,.2)',
      features: ['2 Years Integrated Classroom Program as per KOTA Study Pattern', 'Daily 6 hrs sessions from Mon-Sat for self-motivated students', 'Daily Doubt Clearance', 'Weekly 2 Test (Boards + JEE/MHTCET)'],
      exams: ['IIT-JEE (Mains &amp; Advanced)', 'BITSAT', 'VITEEE', 'SRMJEEE', 'MET', 'Board Exams'],
      courses: ['11th, 12th Science (HSC/CBSE)', 'Separate ISC Batch', 'JEE (Mains &amp; Advanced)', 'MHT-CET']
    },
    {
      id: 'medical', name: 'Medical Batch',
      desc: 'Specialized preparation for medical entrance exams with integrated board curriculum',
      icon: 'bookOpen', iconColor: '#059669', accent: '#10b981', chip: 'rgba(16,185,129,.2)',
      features: ['2 Years Integrated Classroom Program as per KOTA Study Pattern', 'Daily 6 hrs sessions from Mon-Sat for self-motivated students', 'Daily Doubt Clearance', 'Weekly 2 Test (Boards + NEET/MHTCET)'],
      exams: ['NEET', 'MHT-CET', 'Board Exams'],
      courses: ['11th, 12th Science (HSC/CBSE/ISC)', 'NEET', 'MHT-CET']
    },
    {
      id: 'pinnacle', name: 'Pinnacle Batch',
      desc: 'Flexible program for college-attending students with focused exam preparation',
      icon: 'award', iconColor: '#d97706', accent: '#f59e0b', chip: 'rgba(245,158,11,.2)',
      features: ['2-Year classroom program for college attending students', 'Daily 3.5 hrs sessions from Mon-Sat', 'Weekly 2 session for doubts', 'Weekly 2 Test (Boards + JEE/NEET/MHTCET)'],
      exams: ['IIT-JEE (Mains) + Boards', 'NEET + Boards', 'MHT-CET + Boards', 'Only Boards'],
      courses: ['11th, 12th Science (HSC) + JEE (Mains) + MHT-CET', '11th 12th Science (HSC) + NEET + MHT-CET', '11th, 12th Science (HSC) + MHT-CET', '11th, 12th Science (HSC)']
    }
  ];
  const slides = programs.map((p, i) => `
    <div class="program-slide${i === 0 ? ' active' : ''}" data-program="${p.id}">
      <div class="program-card" style="background:${p.id === 'medical' ? '#ecfdf5' : p.id === 'pinnacle' ? '#fffbeb' : '#eff6ff'}">
        <div class="program-card__header">
          <div class="program-card__id">
            <div class="program-card__icon" style="background:${p.chip}">
              ${svg(p.icon, '', `style="color:${p.iconColor}"`)}
            </div>
            <div>
              <div class="program-card__title">${p.name}</div>
              <div class="program-card__desc">${p.desc}</div>
            </div>
          </div>
        </div>
        <div class="program-card__content">
          <div class="program-col">
            <h3 style="font-size:18px;line-height:28px;margin-bottom:16px"><span class="accent-bar" style="background:${p.accent}"></span>Program Features</h3>
            <ul class="features-ul">${p.features.map((f) => `<li>${svg('circleCheck', '', `style="color:${p.accent}"`)}<span>${f}</span></li>`).join('')}</ul>
          </div>
          <div class="program-col">
            <h3 style="font-size:18px;line-height:28px;margin-bottom:16px"><span class="accent-bar" style="background:${p.accent}"></span>Exams Covered</h3>
            <ul>${p.exams.map((f) => `<li><span style="color:${p.accent};line-height:1.4">•</span><span>${f}</span></li>`).join('')}</ul>
          </div>
          <div class="program-col">
            <h3 style="font-size:18px;line-height:28px;margin-bottom:16px"><span class="accent-bar" style="background:${p.accent}"></span>Courses Offered</h3>
            <ul>${p.courses.map((f) => `<li><span style="color:${p.accent};line-height:1.4">•</span><span>${f}</span></li>`).join('')}</ul>
          </div>
        </div>
        <div class="program-card__cta" style="padding:24px 24px 24px">
          <a class="btn btn--primary" href="enquiry.html" style="background:#3b82f6;font-size:14px">Enquire About This Program ${svg('arrowRight')}</a>
        </div>
      </div>
    </div>`).join('');
  const dots = programs.map((p, i) => `<button class="dot${i === 0 ? ' active' : ''}" data-pdot="${i}" aria-label="Go to program ${i + 1}"></button>`).join('');
  return `
<main>
  <div class="page-hero page-hero--tall center">
    <div class="container">
      <h1>Our Study Programs</h1>
      <p>Comprehensive learning solutions tailored for your academic success</p>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <div class="max-5xl">
        <div class="programs">
          <button class="program-nav program-nav--prev" id="progPrev" aria-label="Previous program">${svg('chevronLeft')}</button>
          <button class="program-nav program-nav--next" id="progNext" aria-label="Next program">${svg('chevronRight')}</button>
          ${slides}
          <div class="program-dots">${dots}</div>
        </div>
      </div>
    </div>
  </section>

  ${ctaBand("Find the Perfect Program for You - Let's Get Started!",
    'Join Ass Minds today and take the first step towards achieving your academic goals.',
    `<a class="btn btn--secondary" href="enquiry.html">Enquire Today</a>
     <a class="btn btn--outline" href="faq.html">FAQ's</a>`)}
</main>`;
}

/* ---------------- SERVICES ---------------- */
function pageServices() {
  const services = [
    ['bookOpen', 'Kota Study Material', 'We provide highly researched , updated &amp; easy to use Kotastudy for all subjects.', [
      'Covers the entire syllabus in a systematic and organized manner.',
      'Concepts are explained in a step-by-step approach for better understanding.',
      'Kota study material is prepared by highly experienced IITians, doctors, and subject experts.',
      'Provides shortcut techniques, problem-solving tricks, and time-management strategies.'
    ]],
    ['laptop', 'Technology Aided Learning', 'We incorporate the latest technology to make learning fun , easy and interesting for our students.', [
      'Use of videos, animations, and simulations makes learning more engaging.',
      'Students can learn at their own pace, revisiting difficult concepts as needed.',
      'Teachers can monitor student progress and provide instant feedback.',
      'Online quizzes and AI-based assessments provide instant results and analytics.'
    ]],
    ['clock', 'Periodic Test Series', 'Test papers are composed by top faculties of KOTA, Frequent Topic Weekly Test, Monthly Test &amp; McQ Test is conducted.', [
      'Chapter-wise, subject-wise, and full syllabus tests',
      'Detailed performance analytics',
      'Daily practice tests',
      'Personalized improvement strategies'
    ]],
    ['users', 'Mentorship Program', 'An exceptional program where a mentor is assigned to a group of students, responsible for monitoring their daily self-study progress.', [
      'One-on-one mentoring ensures individualized attention and faster problem resolution.',
      'Encourages students to ask questions freely and develop conceptual clarity.',
      'Mentors teach effective time management and exam-taking strategies.',
      'Regular progress tracking and feedback help students refine their study approach.'
    ]],
    ['home', 'Open House', 'PTM is conducted in every 2 months to communi-cate to parents, the areas their students are excelling in &amp; to give parents specific ideas of how to improve upon their students performance.', [
      'Direct interaction between teachers and parents about the student’s progress.',
      'Encourages constructive feedback from both parents and teachers.',
      'Review of student’s attendance, punctuality, and participation in class.',
      'Highlights the student’s progress over time with comparison insights.'
    ]],
    ['fileText', 'Special Subjects', 'We arrange special crash courses for subjects like English, Information Technology and Bi-focal subjects before board exams.', [
      'Covers important topics, key concepts, and exam-oriented questions in a short time.',
      'Helps students with quick revisions and last-minute preparation strategies.',
      'Helps in improving writing skills, presentation, and scoring techniques.',
      'Helps cover different subjects of Maharashtra Boards Syllabus.'
    ]]
  ];
  return `
<main>
  <div class="page-hero center">
    <div class="container">
      <h1>Our Services</h1>
      <p>Comprehensive learning solutions designed for your success</p>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <div class="max-3xl center" style="margin-bottom:64px">
        <h2 class="h2--sm h2--center" style="margin-bottom:24px">Tailored Programs for Every Aspiration</h2>
        <p class="lead">At Ass Minds, we offer a range of specialized programs designed to cater to different academic goals and learning preferences. Whether you're preparing for JEE, NEET, MHT-CET or building a strong foundation for future competitive exams, we have the right program for you.</p>
      </div>
      <div class="services-grid stagger">
        ${services.map(([icon, title, text, features]) => `
        <div class="card service-card">
          <div class="card__head card__head--full">
            <div class="icon-badge">${svg(icon)}</div>
            <div class="card__title">${title}</div>
          </div>
          <div class="card__body" style="padding-top:0">
            <div class="card__text" style="margin-bottom:24px">${text}</div>
            <h4 class="sf-label">Key Features:</h4>
            <ul class="service-features">${features.map((f) => `<li>${svg('circleCheckBig')}<span>${f}</span></li>`).join('')}</ul>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container center">
      <h2 class="h2--sm h2--center" style="margin-bottom:32px">Customized Learning Plans</h2>
      <p class="lead max-3xl" style="margin-bottom:32px">Not sure which program is right for you? Our academic counselors can help you choose the perfect learning path based on your goals, current academic level, and learning style.</p>
      <a class="btn btn--primary" href="enquiry.html">Schedule a Free Counseling Session</a>
    </div>
  </section>

  ${ctaBand('Ready to Begin Your Journey to Success?',
    'Join Ass Minds today and take the first step towards achieving your academic goals.',
    `<a class="btn btn--secondary" href="enquiry.html">Enquire Today</a>
     <a class="btn btn--outline" href="results.html">View Our Results</a>`)}
</main>`;
}

/* ---------------- RESULTS ---------------- */
function pageResults() {
  const top = [
    ['Sayali Parab', 'NEET - UG', 'AFMC', 'assets/img/sayali.png'],
    ['Puneet Kumar', 'NEET - UG', 'Cooper Hospital (MBBS) - Mumbai', 'assets/img/puneet.png']
  ];
  const rest = [
    ['Kiran Kumar', 'JEE Advanced', 'IIT Delhi', 'assets/img/kiran.png'],
    ['Arjun Singh', 'JEE Advanced', 'IIT Ropar', 'assets/img/arjun.png'],
    ['Pranav Luharuka', 'JEE Advanced', 'IIT Kharagpur', 'assets/img/pranav.jpeg']
  ];
  const card = ([name, exam, college, img]) => `
    <div class="card ranker-card">
      <div class="ranker-card__inner">
        <div class="ranker-card__avatar"><img src="${img}" alt="${name}" loading="lazy"></div>
        <div class="center" style="margin-top:8px">
          <h3>${name}</h3>
          <p class="exam">${exam}</p>
          <p class="college">${college}</p>
        </div>
      </div>
    </div>`;
  return `
<main>
  <div class="page-hero center">
    <div class="container">
      <h1>Our Results</h1>
      <p>Success stories that inspire excellence</p>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <div class="max-3xl center" style="margin-bottom:64px">
        <h2 class="h2--sm h2--center" style="margin-bottom:24px">Our Track Record</h2>
        <p class="lead">At Ass Minds, we take pride in our students' achievements. Our consistent track record of producing top rankers in JEE and NEET is a testament to our teaching methodology, faculty expertise, and the hard work of our students.</p>
      </div>
      ${statsBlock()}
    </div>
  </section>

  <section class="section reveal">
    <div class="container">
      <h2 class="h2--sm h2--center">Top Rankers</h2>
      <div style="display:flex;flex-direction:column;align-items:center">
        <div class="ranker-group stagger">${top.map(card).join('')}</div>
        <div class="ranker-group stagger" style="margin-bottom:0">${rest.map(card).join('')}</div>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container">
      <h2 class="h2--sm h2--center">What Our Students Say</h2>
      ${testimonialBlock()}
    </div>
  </section>

  ${ctaBand('Join Our Success Story',
    'Be the next success story at Ass Minds. Enroll today and embark on your journey to academic excellence.',
    `<a class="btn btn--white" href="enquiry.html">Enroll Now</a>`)}
</main>
`;
}

/* ---------------- FAQ ---------------- */
function pageFaq() {
  const faqs = [
    ['How is your class different from others?',
      'At <span class="hl">ASSMINDS PRIVATE TUTORIALS</span>, our IITian-led team ensures in-depth, advanced-level JEE and NEET preparation, unlike others who focus only on JEE Mains. We emphasize conceptual clarity, rigorous problem-solving, and personalized mentoring. Our commitment is to genuine student success, not just admissions.'],
    ['How can you help my child crack JEE and NEET given the increasing competition?',
      'Cracking JEE and NEET requires strong logical thinking, fast calculation speed, and the willpower for consistent 6+ hours of daily study. Our KOTA EXCLUSIVE BATCHES are designed for selective students who demonstrate these qualities. Seats are limited, so contact us early if you wish to enroll.'],
    ['How will you keep my child motivated for studies?',
      "Our special mentorship program assigns a mentor to every 5 students, ensuring daily study habits and regular MCQ practice. We encourage students to commit to 3-6 hours of self-study daily, depending upon his/her goal. We regularly track students' test scores and performance, encouraging them to ask questions and get help from teachers."],
    ['Do you provide discounts or scholarships based on a scholarship test?',
      'We do not conduct a scholarship test. We believe in a "1 BATCH, 1 FEE" policy, so we do not offer random discounts. Our fees are reasonable, and we provide quality education through IITians, doctors and highly experienced faculty in an excellent environment. We do offer scholarship discounts to help ambitious students in need, making quality education accessible.'],
    ['Do you have classes for students focusing only on Boards and MHT-CET?',
      'Yes, we offer separate batches dedicated to Boards and MHT-CET preparation. With rising JEE and NEET competition, many students opt for MHT-CET, which can still lead to top colleges in Mumbai. We fully support this focused approach.'],
    ['What is the admission process, and when does the first batch start?',
      'Admissions start in September of the preceding year. You can reserve a seat by paying a refundable token amount until batches begin. Our foundation course starts on 15th April, and the first batch begins on 1st May.']
  ];
  return `
<main>
  <div class="page-hero center">
    <div class="container">
      <h1>Frequently Asked Questions</h1>
      <p>Get answers to common questions about our programs and approach</p>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <div class="max-4xl">
        <div class="faq-wrap">
          <div class="faq-rail"><span>FREQUENTLY ASKED QUESTIONS</span></div>
          <div class="faq-list stagger">
            ${faqs.map(([q, a]) => `
            <div class="faq-item">
              <h3>${q}</h3>
              <p>${a}</p>
            </div>`).join('')}
          </div>
        </div>
        <div class="center">
          <h3 class="faq-still">Still have questions?</h3>
          <p class="lead" style="margin-bottom:24px">Our team is here to help you with any other questions you might have about our programs.</p>
          <a class="btn btn--primary" href="enquiry.html" style="height:auto;padding:12px 24px;font-size:16px">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
</main>`;
}

/* ---------------- CAREERS ---------------- */
function pageCareers() {
  const faculty = [
    ['Mr. Pratik Dixit', 'Physics', 'M.Sc Physics', '12+ years', 'assets/img/pratikdixit.jpeg',
      'At Ass Minds, we believe education goes beyond textbooks and exams. We’re building a place where learning feels alive - where teachers are mentors, role models, and visionaries. If you’re passionate about shaping not just students, but futures - we’d love to have you on board.'],
    ['Mr. Satish Rastogi', 'Physics', 'M.Sc. Forensic Science , M.Sc Physics, B.ed', '12+ years', 'assets/img/satish-rastogi.jpeg',
      'The foundation of Ass Minds was laid on belief - belief in better learning, better teaching, and better futures. If you share that belief and are willing to bring your energy, creativity, and commitment - let’s build something amazing together'],
    ['Mr. Deepak Singh', 'Physics', 'IIT Bombay', '8 years', 'assets/img/deepak-singh-rana.jpeg',
      "Ass Minds isn’t just a coaching class — it’s a platform. For students to discover their strengths. For teachers to share their expertise. For everyone involved to grow. Join us if you're ready to lead with purpose and teach with heart."]
  ];
  return `
<main>
  <div class="page-hero center">
    <div class="container">
      <h1 style="text-decoration:underline;font-size:36px;line-height:40px;margin-bottom:24px" class="careers-h1">Work with us</h1>
      <p style="font-size:24px;line-height:32px">Meet the brilliant minds behind Ass Minds' success</p>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <div class="max-3xl center" style="margin-bottom:64px">
        <h2 class="h2--sm h2--center" style="margin-bottom:24px">Expert Educators, Exceptional Results</h2>
        <p class="lead">At Ass Minds, our mentors are more than just subject experts - they’re passionate educators, motivators, and counsellors. Each mentor brings not only deep academic knowledge but also a unique ability to connect with students, understand their challenges, and unlock their full potential.</p>
      </div>
      <div class="grid-3 stagger" style="gap:40px;max-width:1280px;margin:0 auto">
        ${faculty.map(([name, subject, qual, exp, img, bio]) => `
        <div class="card faculty-card">
          <div class="faculty-card__media">
            <img src="${img}" alt="${name}" loading="lazy">
            <div class="faculty-card__overlay">
              <div>
                <p class="role">${subject}</p>
                <p class="exp">${exp} Experience</p>
              </div>
            </div>
          </div>
          <div class="faculty-card__body">
            <h3>${name}</h3>
            <p class="qual">${subject} (${qual})</p>
            <p class="bio">${bio}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container center">
      <h2 class="h2--sm h2--center" style="margin-bottom:32px">Join Our Teaching Team</h2>
      <p class="lead max-3xl" style="margin-bottom:32px">We're always looking for passionate educators to join our team. If you have expertise in JEE/NEET subjects and a passion for teaching, we'd love to hear from you.</p>
      <a class="btn btn--primary" href="mailto:info@aceminds.in" style="height:auto;padding:12px 24px;font-size:16px">Send Your Resume</a>
    </div>
  </section>
</main>`;
}

/* ---------------- ENQUIRY ---------------- */
function pageEnquiry() {
  return `
<main>
  <div class="page-hero center">
    <div class="container">
      <h1>Get in Touch</h1>
      <p>We're here to answer your questions and help you get started</p>
    </div>
  </div>

  <section class="section reveal">
    <div class="container">
      <div class="contact-grid">
        <div class="reveal-left">
          <h2 class="h2--sm" style="margin-bottom:24px">Contact Information</h2>
          <p class="lead" style="margin-bottom:32px">Have questions about our programs or want to schedule a visit? Fill out the form or use the contact information below to reach us.</p>
          <div>
            <div class="contact-item">
              <div class="contact-item__icon">${svg('phone')}</div>
              <div><h3>Phone</h3><a href="tel:+918356024484">+91 83560 24484</a></div>
            </div>
            <div class="contact-item">
              <div class="contact-item__icon">${svg('mail')}</div>
              <div><h3>Email</h3><a href="mailto:info@aceminds.in">info@aceminds.in</a></div>
            </div>
            <div class="contact-item">
              <div class="contact-item__icon">${svg('mapPin')}</div>
              <div><h3>Address</h3>
                <p>A-12, Ground Floor , Mahavir Apartment , Jadavji Dadaji Road ,</p>
                <p>Mumbai - 400007, India</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item__icon">${svg('clock')}</div>
              <div><h3>Office Hours</h3><p>Monday - Sunday: 9:00 AM - 9:00 PM</p></div>
            </div>
          </div>
        </div>
        <div class="reveal-right">
          <div class="form-card">
            <div class="form-card__head">
              <h3>Enquiry Form</h3>
              <p>Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>
            <div class="form-card__body">
              <form id="enquiryForm" novalidate>
                <div class="field">
                  <label for="name">Full Name</label>
                  <input id="name" name="name" placeholder="Enter your full name" required>
                </div>
                <div class="field-row">
                  <div class="field" style="margin-bottom:0">
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Enter your email" required>
                  </div>
                  <div class="field" style="margin-bottom:0">
                    <label for="phone">Phone Number</label>
                    <input id="phone" name="phone" placeholder="Enter your phone number" required>
                  </div>
                </div>
                <div class="field">
                  <label for="course">Course Interested In</label>
                  <select id="course" name="course">
                    <option value="">Select a course</option>
                    <option value="jee preparation">JEE Preparation</option>
                    <option value="neet preparation">NEET Preparation</option>
                    <option value="cet">MHT-CET Preparation</option>
                    <option value="foundation">Foundation Course (11th-10th)</option>
                    <option value="crash">Crash Course</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="field">
                  <label for="message">Message (Optional)</label>
                  <textarea id="message" name="message" rows="4" placeholder="Any specific questions or requirements?" style="height:98px"></textarea>
                </div>
                <button class="form-submit" type="submit">Submit Enquiry</button>
                <div class="form-ok" id="formOk">Thank you! Your enquiry has been received — our team will get back to you within 24 hours.</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="container center">
      <h2 class="h2--sm h2--center" style="margin-bottom:32px">Visit Our Center</h2>
      <div class="map-frame">
        <div class="map-fallback" id="mapFallback">Ass Minds Private Tutorials · A-12, Ground Floor, Mahavir Apartment, Jadavji Dadaji Road, Mumbai - 400007</div>
        <iframe id="mapFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.205336668466!2d72.8139511!3d18.966536899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbe6852f6af%3A0xa184f4eb27032a4e!2sAce%20Minds%20Private%20Tutorials!5e0!3m2!1sen!2sin!4v1743525161897!5m2!1sen!2sin" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" onload="document.getElementById('mapFallback').style.display='none'"></iframe>
      </div>
    </div>
  </section>
</main>`;
}
