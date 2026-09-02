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
    status_available: "Open for IT Systems, Web & Multimedia Roles",
    hero_badge: "Information Systems Specialist & Digital Creator",
    hero_title: "Bridging Hardware Infrastructure, Web Engineering & Digital Media",
    hero_subtitle: "Bachelor of Information Systems (Honours) student with proven mastery in PC assembly, hardware diagnostics, OS deployment, network setup, and high-converting multimedia web production.",
    btn_explore: "Explore Featured Work",
    btn_resume: "View / Download CV",
    btn_contact: "Get in Touch",
    stat_pc: "100+ Custom PC & Hardware Builds",
    stat_diag: "99.9% Diagnostics Success Rate",
    stat_reach: "100k+ Multimedia Campaign Reach",
    stat_utar: "UTAR BIS Honours Candidate",
    avatar_toggle_real: "Real Photo",
    avatar_toggle_pixel: "Pixel Avatar",
    profile_badge: "Core Profile & Philosophy",
    profile_heading: "Analytical Problem Solver with Hands-on Technical Mastery",
    profile_p1: "Motivated and proactive Information Systems student at Universiti Tunku Abdul Rahman (UTAR) with strong hands-on experience in bare-metal PC assembly, enterprise hardware diagnostics, and desktop troubleshooting.",
    profile_p2: "Skilled in Windows & Linux OS deployment, software installation, driver optimization, static IP network configuration (LAN/Wi-Fi/Routers), and data backup/disaster recovery.",
    profile_p3: "Proven customer service and communication abilities honed across tech support, digital marketing, and high-stakes service environments, effectively translating complex technical issues into clear solutions.",
    exp_badge: "Career Journey",
    exp_heading: "Professional Work Experience",
    skills_badge: "Technical Stack",
    skills_heading: "Core Competencies & Capabilities",
    projects_badge: "Portfolio & Media",
    projects_heading: "Featured Work & Multimedia Campaigns",
    edu_badge: "Academic Background",
    edu_heading: "Education & Qualifications",
    contact_badge: "Let's Connect",
    contact_heading: "Ready to Create Value Together",
    contact_desc: "Whether you need a dedicated IT systems engineer, full-stack web developer, or multimedia specialist, feel free to reach out directly via WhatsApp, Email, or the form below.",
    toast_copied: "Copied to clipboard!"
  },
  zh: {
    nav_about: "关于我",
    nav_experience: "工作经历",
    nav_skills: "技能专长",
    nav_projects: "项目作品",
    nav_education: "教育背景",
    nav_contact: "联系方式",
    status_available: "正在寻找 IT 系统、网页开发与多媒体职位",
    hero_badge: "商业信息系统专才 • 网页与多媒体创作者",
    hero_title: "融合硬件架构、网页工程与高转化多媒体",
    hero_subtitle: "拉曼大学（UTAR）商业信息系统荣誉学士。精通电脑组装、硬件故障排查、系统部署、网络调试以及高转化多媒体网页设计与营销。",
    btn_explore: "浏览精选作品",
    btn_resume: "预览 / 下载简历",
    btn_contact: "立即联系",
    stat_pc: "100+ 台定制电脑组装",
    stat_diag: "99.9% 硬件排查修复率",
    stat_reach: "100k+ 多媒体广告触达",
    stat_utar: "UTAR 商业信息系统在读",
    avatar_toggle_real: "真实肖像",
    avatar_toggle_pixel: "像素形象",
    profile_badge: "个人简介与核心理念",
    profile_heading: "兼备深厚技术动手能力与敏锐商业逻辑",
    profile_p1: "就读于拉曼大学（UTAR）商业信息系统（荣誉）学士，拥有扎实的电脑裸机装机、硬件深度诊断及桌面系统疑难排查实战经验。",
    profile_p2: "精通 Windows 10/11 与 Linux 系统部署、UEFI 启动盘制作、驱动调优、局域网及路由器配置（LAN/Wi-Fi/静态IP），以及数据备份与应急恢复。",
    profile_p3: "在IT运维、数字营销及高标准客户服务中积累了出色的沟通与客户支持能力，善于将复杂的底层技术转化为清晰高效的商业解决方案。",
    exp_badge: "职业履历",
    exp_heading: "过往工作与实战经历",
    skills_badge: "技术与能力矩阵",
    skills_heading: "核心专长与技术栈",
    projects_badge: "精选作品与案例",
    projects_heading: "项目展示与电商视觉多媒体",
    edu_badge: "学术背景",
    edu_heading: "教育与学历背景",
    contact_badge: "即刻交流",
    contact_heading: "期待与您携手创造价值",
    contact_desc: "无论是IT系统维护、网页与电商开发还是多媒体视频创作，欢迎随时通过 WhatsApp、邮件或表单直接与我取得联系。",
    toast_copied: "已成功复制到剪贴板！"
  },
  ms: {
    nav_about: "Tentang",
    nav_experience: "Pengalaman",
    nav_skills: "Kemahiran",
    nav_projects: "Projek",
    nav_education: "Pendidikan",
    nav_contact: "Hubungi",
    status_available: "Terbuka untuk Peluang Sistem IT & Web",
    hero_badge: "Pakar Sistem Maklumat & Pencipta Digital",
    hero_title: "Menghubungkan Infrastruktur Perkakasan, Web & Media Digital",
    hero_subtitle: "Pelajar Sarjana Muda Sistem Maklumat (Kepujian) UTAR yang mahir dalam pemasangan PC, diagnostik perkakasan, penempatan OS, dan penghasilan web multimedia berimpak tinggi.",
    btn_explore: "Teroka Hasil Kerja",
    btn_resume: "Lihat / Muat Turun Resume",
    btn_contact: "Hubungi Saya",
    stat_pc: "100+ Pemasangan PC Tersuai",
    stat_diag: "99.9% Kadar Kejayaan Diagnostik",
    stat_reach: "100k+ Capaian Iklan Multimedia",
    stat_utar: "Calon Kepujian UTAR BIS",
    avatar_toggle_real: "Foto Sebenar",
    avatar_toggle_pixel: "Avatar Piksel",
    profile_badge: "Profil Teras",
    profile_heading: "Penyelesai Masalah dengan Kemahiran Teknikal Mendalam",
    profile_p1: "Pelajar Sistem Maklumat di UTAR yang bermotivasi tinggi dengan pengalaman praktikal dalam pemasangan komponen PC, diagnostik perkakasan, dan penyelesaian masalah desktop.",
    profile_p2: "Mahir dalam pemasangan Windows/Linux OS, kemas kini pemacu, persediaan rangkaian (LAN/Wi-Fi/Penghala), dan pemulihan data.",
    profile_p3: "Kebolehan komunikasi dan khidmat pelanggan yang terbukti merentasi sokongan teknikal dan pemasaran digital.",
    exp_badge: "Perjalanan Kerjaya",
    exp_heading: "Pengalaman Kerja Profesional",
    skills_badge: "Matriks Kemahiran",
    skills_heading: "Kecekapan Teras & Teknologi",
    projects_badge: "Projek & Media",
    projects_heading: "Karya Terpilih & Kempen Multimedia",
    edu_badge: "Latar Belakang Akademik",
    edu_heading: "Pendidikan & Kelayakan",
    contact_badge: "Hubungi Saya",
    contact_heading: "Sedia Bekerjasama",
    contact_desc: "Sama ada anda memerlukan jurutera sistem IT atau pembangun web, sila hubungi melalui WhatsApp atau E-mel.",
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
