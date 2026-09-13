// ==========================================
// CHEW SHAN YONG - PERSONAL PORTFOLIO APP
// ==========================================

const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    status_available: "Open for IT Systems, Hardware & Web Engineering Roles",
    hero_badge: "Information Systems Undergrad • IT Hardware Diagnostics & Web Engineering",
    hero_title: "Bridging Hardware Diagnostics, OS Infrastructure & Modern Web Delivery",
    hero_subtitle: "Final-year Business Information Systems student at UTAR with extensive practical experience in bare-metal PC assembly, hardware diagnostics, and modern web application development (React 19, Vite, Tailwind CSS, Firebase).",
    btn_explore: "Explore Featured Work",
    btn_resume: "View / Download CV",
    btn_contact: "Get in Touch",
    stat_pc: "100+ Custom Bare-Metal PC Builds",
    stat_diag: "BSOD & POST Fault Isolation",
    stat_reach: "React 19 & Full-Stack Web",
    stat_utar: "UTAR BIS (Expected: 2026)",
    avatar_toggle_real: "Real Photo",
    avatar_toggle_pixel: "Pixel Avatar",
    profile_badge: "Core Profile & Philosophy",
    profile_heading: "Analytical IT Problem Solver with Hands-on Systems & Web Mastery",
    profile_p1: "Final-year Business Information Systems student at Universiti Tunku Abdul Rahman (UTAR) with extensive practical experience in bare-metal PC assembly, hardware diagnostics, and modern web application development.",
    profile_p2: "Assembled over 100+ bespoke desktop systems with proven proficiency in isolating BSOD crashes, POST failures, driver faults, and thermal limits, paired with automated OS provisioning and network triage.",
    profile_p3: "Combines strong technical troubleshooting with commercial web delivery (React 19, Vite, Tailwind CSS, Firebase) and enterprise process awareness, eager to contribute disciplined, customer-oriented IT support.",
    exp_badge: "Career Journey",
    exp_heading: "Professional Work Experience",
    skills_badge: "Technical Stack",
    skills_heading: "Core Competencies & Capabilities",
    projects_badge: "Portfolio & Engineering",
    projects_heading: "Featured Technical Projects",
    edu_badge: "Academic Background",
    edu_heading: "Education & Qualifications",
    contact_badge: "Let's Connect",
    contact_heading: "Ready to Create Value Together",
    contact_desc: "Whether you need a dedicated IT systems engineer, hardware diagnostics specialist, or full-stack web developer, feel free to reach out directly via WhatsApp, Email, or GitHub.",
    toast_copied: "Copied to clipboard!"
  },
  zh: {
    nav_about: "关于我",
    nav_experience: "工作经历",
    nav_skills: "技能专长",
    nav_projects: "项目作品",
    nav_education: "教育背景",
    nav_contact: "联系方式",
    status_available: "寻找 IT 系统、硬件诊断与网页开发职位",
    hero_badge: "信息系统专修 • IT硬件诊断与网页工程",
    hero_title: "融合硬件诊断、系统运维与现代化网页交付",
    hero_subtitle: "拉曼大学（UTAR）商业信息系统应届生。精通裸机组装、BSOD及POST硬件故障排查、系统部署与基于 React 19、Vite、Tailwind CSS 的商业网页开发。",
    btn_explore: "浏览精选作品",
    btn_resume: "预览 / 下载简历",
    btn_contact: "立即联系",
    stat_pc: "100+ 台定制电脑组装与压测",
    stat_diag: "BSOD 与 POST 故障精准排查",
    stat_reach: "React 19 全栈现代网页",
    stat_utar: "UTAR 商业信息系统（2026 届）",
    avatar_toggle_real: "真实肖像",
    avatar_toggle_pixel: "像素形象",
    profile_badge: "个人简介与核心理念",
    profile_heading: "兼具扎实底层系统排错动手力与现代网页工程实力",
    profile_p1: "就读于拉曼大学（UTAR）商业信息系统（荣誉）学士应届生，在电脑裸机组装、企业级硬件诊断和现代 Web 应用程序开发方面拥有深厚的实战经验。",
    profile_p2: "亲手装配并深度压测 100+ 套定制台式机，精通排查 BSOD 蓝屏崩溃、POST 开机自检故障、驱动冲突及散热极限，擅长 Windows 10/11 与 Linux 干净镜像部署及网络配置。",
    profile_p3: "将强劲的底层技术排错能力与商业级 Web 开发交付（React 19、Vite、Tailwind CSS、Firebase）及企业流程意识紧密结合，致力于提供严谨、以客户为中心的卓越 IT 支持。",
    exp_badge: "职业履历",
    exp_heading: "过往工作与实战经历",
    skills_badge: "技术与能力矩阵",
    skills_heading: "核心专长与技术栈",
    projects_badge: "精选技术项目",
    projects_heading: "精选技术项目与实战案例",
    edu_badge: "学术背景",
    edu_heading: "教育与学历背景",
    contact_badge: "即刻交流",
    contact_heading: "期待与您携手创造价值",
    contact_desc: "无论是IT系统维护、硬件故障排查、全栈网页开发还是多媒体视频创作，欢迎随时通过 WhatsApp、邮件或 GitHub 直接与我取得联系。",
    toast_copied: "已成功复制到剪贴板！"
  },
  ms: {
    nav_about: "Tentang",
    nav_experience: "Pengalaman",
    nav_skills: "Kemahiran",
    nav_projects: "Projek",
    nav_education: "Pendidikan",
    nav_contact: "Hubungi",
    status_available: "Terbuka untuk Peranan Sistem IT, Perkakasan & Web",
    hero_badge: "Mahasiswa Sistem Maklumat • Diagnostik Perkakasan IT & Kejuruteraan Web",
    hero_title: "Menghubungkan Diagnostik Perkakasan, Infrastruktur OS & Web Moden",
    hero_subtitle: "Pelajar tahun akhir Sistem Maklumat Perniagaan UTAR yang mahir dalam pemasangan PC, diagnostik perkakasan (BSOD/POST), dan pembangunan web moden (React 19, Vite, Tailwind CSS, Firebase).",
    btn_explore: "Teroka Hasil Kerja",
    btn_resume: "Lihat / Muat Turun Resume",
    btn_contact: "Hubungi Saya",
    stat_pc: "100+ Pemasangan PC Tersuai",
    stat_diag: "Pengasingan Ralat BSOD & POST",
    stat_reach: "React 19 & Web Penuh",
    stat_utar: "UTAR BIS (Jangkaan: 2026)",
    avatar_toggle_real: "Foto Sebenar",
    avatar_toggle_pixel: "Avatar Piksel",
    profile_badge: "Profil Teras",
    profile_heading: "Penyelesai Masalah IT dengan Kemahiran Sistem & Kejuruteraan Web",
    profile_p1: "Pelajar tahun akhir Sistem Maklumat Perniagaan di Universiti Tunku Abdul Rahman (UTAR) dengan pengalaman praktikal yang luas dalam pemasangan PC, diagnostik perkakasan, dan pembangunan aplikasi web moden.",
    profile_p2: "Memasang lebih 100+ sistem desktop tersuai dengan kecekapan terbukti dalam mengasingkan kegagalan BSOD, ralat POST, masalah pemacu, had terma, penempatan Windows/Linux dan rangkaian SOHO.",
    profile_p3: "Menggabungkan penyelesaian masalah teknikal yang kukuh dengan penyampaian web komersial (React 19, Vite, Tailwind CSS, Firebase) dan kesedaran proses perusahaan, bersedia memberi sokongan IT yang berdisiplin.",
    exp_badge: "Perjalanan Kerjaya",
    exp_heading: "Pengalaman Kerja Profesional",
    skills_badge: "Matriks Kemahiran",
    skills_heading: "Kecekapan Teras & Teknologi",
    projects_badge: "Projek Teknikal",
    projects_heading: "Karya & Projek Kejuruteraan Terpilih",
    edu_badge: "Latar Belakang Akademik",
    edu_heading: "Pendidikan & Kelayakan",
    contact_badge: "Hubungi Saya",
    contact_heading: "Sedia Bekerjasama",
    contact_desc: "Sama ada anda memerlukan jurutera sistem IT, pakar diagnostik perkakasan, atau pembangun web, sila hubungi melalui WhatsApp, E-mel, atau GitHub.",
    toast_copied: "Disalin ke papan keratan!"
  }
};

let currentLang = 'en';
let soundEnabled = true;

// --- Sound Synthesizer (Native Web Audio API) ---
class SoundSynth {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }
  playClick() {
    if (!soundEnabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch(e) {}
  }
  playBeep(freq = 600, duration = 0.06) {
    if (!soundEnabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch(e) {}
  }
  playSuccess() {
    if (!soundEnabled) return;
    try {
      this.init();
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (i * 0.06));
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime + (i * 0.06));
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + (i * 0.06) + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + (i * 0.06));
        osc.stop(this.ctx.currentTime + (i * 0.06) + 0.12);
      });
    } catch(e) {}
  }
}

const sound = new SoundSynth();

// --- Interactive Particle Canvas ---
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 18), 65);
  const mouse = { x: null, y: null, radius: 120 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 20) + 5;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
    }

    draw() {
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x > width || this.x < 0) this.vx = -this.vx;
      if (this.y > height || this.y < 0) this.vy = -this.vy;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density * 0.4;
          const directionY = forceDirectionY * force * this.density * 0.4;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].draw();
      particles[i].update();

      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          const opacity = (1 - distance / 110) * 0.22;
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// --- Language Switcher ---
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('chew_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = lang;
  sound.playClick();
}

// --- Theme Switcher ---
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('chew_theme', theme);
  sound.playClick();
}

// --- Toast Notification ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg || translations[currentLang].toast_copied;
  toast.classList.add('show');
  sound.playSuccess();

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// --- Copy to Clipboard ---
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(translations[currentLang].toast_copied + " (" + text + ")");
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(translations[currentLang].toast_copied + " (" + text + ")");
  });
}

// --- Avatar Toggle ---
function toggleAvatar(type) {
  const imgReal = document.getElementById('avatar-real');
  const imgPixel = document.getElementById('avatar-pixel');
  const btnReal = document.getElementById('btn-avatar-real');
  const btnPixel = document.getElementById('btn-avatar-pixel');

  if (type === 'pixel') {
    imgReal.classList.add('hidden');
    imgPixel.classList.remove('hidden');
    btnPixel.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-400/50');
    btnPixel.classList.remove('text-slate-400');
    btnReal.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-400/50');
    btnReal.classList.add('text-slate-400');
  } else {
    imgPixel.classList.add('hidden');
    imgReal.classList.remove('hidden');
    btnReal.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-400/50');
    btnReal.classList.remove('text-slate-400');
    btnPixel.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-400/50');
    btnPixel.classList.add('text-slate-400');
  }
  sound.playBeep(700, 0.05);
}

// --- Lightbox ---
function openLightbox(src, title) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  if (!modal || !img) return;

  img.src = src;
  if (caption) caption.textContent = title || '';
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  sound.playClick();
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  sound.playClick();
}

// --- Resume PDF Modal ---
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  sound.playClick();
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  sound.playClick();
}

// --- Mobile Navigation Menu ---
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
  sound.playClick();
}

// --- Sound Toggle ---
function toggleSound() {
  soundEnabled = !soundEnabled;
  const icon = document.getElementById('sound-icon');
  if (soundEnabled) {
    if (icon) icon.className = 'fa-solid fa-volume-high text-cyan-400 text-xs';
    sound.playBeep(660, 0.05);
  } else {
    if (icon) icon.className = 'fa-solid fa-volume-xmark text-slate-500 text-xs';
  }
}

// --- Contact Form Handler ---
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const message = document.getElementById('form-message').value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  showToast("Message prepared! Opening your email client...");
  setTimeout(() => {
    const mailto = `mailto:shanyong10@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
    window.location.href = mailto;
  }, 1000);
}

// --- Initialization on DOM Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();

  const savedTheme = localStorage.getItem('chew_theme') || 'cyber';
  setTheme(savedTheme);
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) themeSelect.value = savedTheme;

  const savedLang = localStorage.getItem('chew_lang') || 'en';
  setLanguage(savedLang);

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('text-cyan-400', 'font-semibold');
          navLink.classList.remove('text-slate-300');
        } else {
          navLink.classList.remove('text-cyan-400', 'font-semibold');
          navLink.classList.add('text-slate-300');
        }
      }
    });
  });
});
