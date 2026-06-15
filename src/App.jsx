import React, { useState, useEffect } from 'react';
import cvFile from './assets/Fandra Salsabilla O_CV.pdf';
import certSQL from './assets/Belajar Dasar Structured Query Language (SQL).pdf';
import certDataAnalytics from './assets/Certified Data Analytics with Python.pdf';
import certAI from './assets/Belajar Dasar AI.pdf';
import certManajemenProyek from './assets/Belajar Dasar Manajemen Proyek.pdf';
import certDataScience from './assets/Belajar Dasar Data Science.pdf';
import certVisualisasiData from './assets/Belajar Dasar Visualisasi Data.pdf';

const SectionHeading = ({ number, label, title }) => (
  <div className="mb-5 reveal">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-0.5 h-4 bg-[#7C3AED]" />
      <span className="font-mono text-[#7C3AED] text-xs tracking-wide uppercase">
        // {number} {label}
      </span>
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-[#1A1523]">{title}</h2>
  </div>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Sertifikasi', href: '#certifications' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' }
  ];

  const stats = [
    { value: 'Smt 4', label: 'Mahasiswa Aktif PENS' },
    { value: '3+', label: 'Proyek selesai' },
    { value: '3.73', label: 'IPK' },
    { value: '25+', label: 'Bug teridentifikasi' }
  ];

  const skillCategories = [
    {
      title: 'Backend',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-14 0h14" /></svg>
      ),
      skills: ['PHP', 'Laravel', 'REST API', 'MVC', 'PHPUnit']
    },
    {
      title: 'Frontend',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      skills: ['HTML/CSS', 'JavaScript']
    },
    {
      title: 'Database',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 1.105 3.582 2 8 2s8-.895 8-2V7M4 7c0 1.105 3.582 2 8 2s8-.895 8-2M4 7c0-1.105 3.582-2 8-2s8 .895 8 2m0 5c0 1.105-3.582 2-8 2s-8-.895-8-2" /></svg>
      ),
      skills: ['MySQL']
    },
    {
      title: 'QA / Testing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      skills: ['Manual Testing', 'Postman', 'Smoke Testing', 'Equivalence Partitioning', 'Boundary Value Analysis']
    },
    {
      title: 'Mobile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
      ),
      skills: ['Flutter', 'Dart']
    },
    {
      title: 'Tools',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      skills: ['Git', 'Figma']
    },
    {
      title: 'Cloud',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
      ),
      skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'CloudFront', 'IAM', 'CloudWatch']
    }
  ];

  const certifications = [
    {
      title: 'Belajar Dasar Structured Query Language (SQL)',
      issuer: 'Dicoding (Google Developers Authorized Training Partner)',
      date: '2 November 2024 (berlaku hingga 2 November 2027)',
      credentialId: 'NVP74508WPR0',
      verifyLink: 'https://dicoding.com/certificates/NVP74508WPR0',
      fileUrl: certSQL,
      desc: 'Pengenalan data dan basis data, Database Management Systems (DBMS), serta dasar-dasar SQL (DDL, DML, constraints) dan praktik query dasar (SELECT, INSERT, UPDATE, DELETE) (total 11 jam).'
    },
    {
      title: 'Certified Data Analytics with Python',
      issuer: 'Sanbercode x ICE Center ITB Continuing Education',
      date: '5 Juli 2025',
      score: '57.82 — Predikat Novice Level',
      desc: 'Sertifikasi kompetensi analisis data menggunakan Python, mencakup analisis deskriptif/eksploratif/prediktif, pembersihan data, pengumpulan & validasi data, serta pelaporan hasil analisis.',
      fileUrl: certDataAnalytics
    },
    {
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding (Google Cloud Partner)',
      date: '28 Oktober 2024 (berlaku hingga 28 Oktober 2027)',
      credentialId: 'EYX4JJM76ZDL',
      verifyLink: 'https://dicoding.com/certificates/EYX4JJM76ZDL',
      fileUrl: certAI,
      desc: 'Konsep dasar Artificial Intelligence, data untuk AI, pengantar Machine Learning, dan Deep Learning beserta penerapannya (total 10 jam).'
    },
    {
      title: 'Belajar Dasar Manajemen Proyek',
      issuer: 'Dicoding (Google Developers Authorized Training Partner)',
      date: '28 Oktober 2024 (berlaku hingga 28 Oktober 2027)',
      credentialId: 'L4PQ55EYQZO1',
      verifyLink: 'https://dicoding.com/certificates/L4PQ55EYQZO1',
      fileUrl: certManajemenProyek,
      desc: 'Dasar-dasar manajemen proyek mencakup pengenalan peran manajer proyek, siklus & metodologi (Waterfall, Agile, Lean, Six Sigma), struktur & budaya organisasi, hingga eksplorasi karier di bidang manajemen proyek (total 11 jam).'
    },
    {
      title: 'Belajar Dasar Data Science',
      issuer: 'Dicoding (Google Developers Authorized Training Partner)',
      date: '2 November 2024 (berlaku hingga 2 November 2027)',
      credentialId: '0LZ04RV2RP65',
      verifyLink: 'https://dicoding.com/certificates/0LZ04RV2RP65',
      fileUrl: certDataScience,
      desc: 'Dasar-dasar data science mulai dari konsep data, fundamental data science, analisis data, tools pendukung (SQL, Tableau, dll), hingga machine learning untuk data science dan persiapan portofolio (total 11 jam).'
    },
    {
      title: 'Belajar Dasar Visualisasi Data',
      issuer: 'Dicoding (Google Developers Authorized Training Partner)',
      date: '31 Januari 2025 (berlaku hingga 31 Januari 2028)',
      credentialId: '6RPNR622QX2M',
      verifyLink: 'https://dicoding.com/certificates/6RPNR622QX2M',
      desc: 'Pembelajaran dasar visualisasi data menggunakan Google Sheets, mencakup persiapan data, transformasi data ke bentuk grafik, prinsip Gestalt, dan praktik terbaik storytelling dengan data (total 16 jam).',
      fileUrl: certVisualisasiData
    }
  ];

  const displayedCertifications = showAllCerts ? certifications : certifications.slice(0, 3);

  const experiences = [
    {
      role: 'Pemandu',
      company: 'LKMM Tingkat Dasar PENS 2026',
      period: 'Apr 2026 - Mei 2026 - Surabaya',
      desc: 'Membawakan materi sesuai kurikulum LKMM Tingkat Dasar kepada peserta di total 16 kelas dalam 3 gelombang pelaksanaan, termasuk menggantikan pemandu lain sesuai kebutuhan tim. Aktif berpartisipasi dalam forum diskusi tim pemandu untuk merancang alur kegiatan dan jadwal.',
      tags: ['Public Speaking', 'Event Management'],
      photos: []
    },
    {
      role: 'Komisi Kreatif',
      company: 'LKMM Tingkat Dasar PENS 2026',
      period: 'Apr 2026 - Mei 2026 - Surabaya',
      desc: 'Mendesain banner untuk PSDKU Lamongan dan PSDKU Sumenep serta cue card untuk PENS pusat dan PSDKU, bekerja sama dengan anggota komisi kreatif lainnya.',
      tags: ['Design', 'Figma', 'Teamwork'],
      photos: []
    },
    {
      role: 'Pemandu & Komisi Kreatif',
      company: 'LKMM Tingkat Pra Dasar PENS 2025',
      period: 'Okt 2025 - Surabaya',
      desc: 'Membawakan materi LKMM Pra Dasar kepada peserta di 6 kelas per gelombang selama 3 gelombang pelaksanaan. Mendesain materi visual berupa videotron dan cue card untuk pelaksanaan LKMM Pra Dasar PENS pusat.',
      tags: ['Leadership', 'Design'],
      photos: []
    },
    {
      role: 'Volunteer',
      company: 'HIMIT Social Action X Study With HIMIT PENS 2025',
      period: 'Feb 2025 - Surabaya',
      desc: 'Divisi Belajar Bersama Anak Yatim: Membimbing dan memfasilitasi sesi edukasi teknologi dan etika media sosial untuk anak-anak hingga remaja, serta mendukung logistik acara dan mendampingi aktivitas interaktif dengan peserta.',
      tags: ['Volunteering', 'Community'],
      photos: []
    }
  ];

  const projectFilters = ['Semua', 'Web', 'Mobile', 'API/Backend'];

  const projects = [
    {
      id: 1,
      tag: 'Mobile',
      initials: 'WD',
      title: 'Wudi',
      subtitle: 'Aplikasi Mobile Manajemen Tugas',
      desc: 'Menjalankan peran ganda sebagai Frontend Developer sekaligus Tester, melakukan manual testing di dua fase pada hampir seluruh fitur aplikasi.',
      tech: ['Flutter', 'Figma', 'Manual Testing'],
      fullDescription: 'Aplikasi manajemen tugas dan kolaborasi tim berbasis mobile (Flutter) dengan arsitektur offline-first menggunakan basis data lokal Isar. Mendukung sinkronisasi otomatis saat online kembali.',
      background: 'Mahasiswa sering menghadapi kesulitan mengelola jadwal kuliah dan tugas kelompok yang tersebar di banyak platform (WhatsApp, Google Calendar, catatan manual). WUDI hadir sebagai solusi terpusat yang ringan dan mudah digunakan.',
      features: [
        'Task Management (CRUD penuh dengan prioritas & deadline)',
        'Offline-First Architecture',
        'Guest Mode dengan migrasi data otomatis',
        'Team Collaboration (role-based: Owner/Member)',
        'Chat personal & tim (reply, edit, delete, mention)',
        'Calendar View dengan indikator prioritas berwarna',
        'Push & Local Notifications',
        'WUDI AI Assistant',
        'Profile Management'
      ],
      role: 'Frontend Developer sekaligus Tester, melakukan manual testing di dua fase (development dan menjelang rilis) pada hampir seluruh fitur aplikasi — autentikasi, manajemen tugas individu & tim, kalender, notifikasi, reminder, profil, hingga Android home widget. Membuat dan memelihara checklist test case, mendokumentasikan bug bersama tim, berhasil mengidentifikasi 25 bug sepanjang pengembangan. Berkolaborasi dengan backend developer untuk validasi integrasi API dan implementasi UI dari desain Figma menggunakan Flutter dalam siklus Agile/sprint.',
      demoLink: 'https://youtu.be/KFUTdYAYO44',
      images: []
    },
    {
      id: 2,
      tag: 'Web',
      initials: 'AP',
      title: 'App Pegawai',
      subtitle: 'Sistem Manajemen Pegawai',
      desc: 'Mengembangkan secara mandiri aplikasi manajemen pegawai berbasis web menggunakan Laravel 11. Melakukan manual testing menyeluruh untuk fungsionalitas CRUD.',
      tech: ['Laravel 11', 'MySQL', 'PHPUnit'],
      fullDescription: 'Aplikasi berbasis web untuk mengelola data pegawai, presensi, dan penggajian dengan fitur pelaporan terintegrasi secara mandiri menggunakan Laravel 11.',
      background: 'Perusahaan membutuhkan sistem terpusat untuk memantau performa dan absensi karyawan yang sebelumnya dilakukan secara manual.',
      features: ['Dashboard', 'Manajemen Pegawai', 'Departemen & Jabatan', 'Kehadiran & Penggajian', 'Manajemen Proyek', 'Ekspor Laporan PDF dengan DomPDF'],
      role: 'Mengembangkan secara mandiri aplikasi manajemen pegawai berbasis web menggunakan Laravel 11. Melakukan manual testing menyeluruh untuk memastikan fungsionalitas CRUD, akurasi laporan, dan integritas data. Arsitektur MVC dengan Vite untuk bundling aset dan PHPUnit untuk pengujian otomatis.',
      demoLink: '#',
      images: []
    },
    {
      id: 3,
      tag: 'API/Backend',
      initials: 'TS',
      title: 'Techstore',
      subtitle: 'Platform E-Commerce Multi-Produk',
      desc: 'Berperan sebagai Fullstack Developer mengintegrasikan layanan AWS untuk hosting, storage, database, dan pemrosesan pesanan menggunakan Laravel MVC.',
      tech: ['Laravel', 'AWS', 'MySQL'],
      fullDescription: 'RESTful API yang tangguh untuk platform e-commerce dengan sistem inventaris, manajemen produk, manajemen keranjang, hingga pemrosesan pesanan yang terintegrasi.',
      background: 'Membutuhkan layanan backend yang dapat diskalakan dan aman untuk mendukung aplikasi frontend techstore yang terus berkembang.',
      features: ['Fitur Manajemen Kategori', 'Halaman Produk', 'Keranjang Belanja', 'Dashboard Admin', 'Integrasi AWS EC2, S3, RDS, CloudFront, IAM'],
      role: 'Berperan sebagai Fullstack Developer, mengerjakan fitur manajemen kategori, halaman produk, keranjang belanja, dan dashboard admin menggunakan Laravel dengan arsitektur MVC. Mengintegrasikan layanan AWS (EC2, S3, RDS, CloudFront, IAM, CloudWatch, Trusted Advisor) untuk hosting, storage, database, distribusi konten, keamanan, dan monitoring. Berkolaborasi dalam tim dengan pembagian tugas terstruktur.',
      demoLink: '#',
      images: []
    }
  ];

  const filteredProjects =
    activeFilter === 'Semua'
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] text-[#1A1523] selection:bg-[#7C3AED] selection:text-white font-sans py-12">
        <div className="max-w-6xl mx-auto px-6">
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-6 flex items-center gap-2 text-[#6B7280] hover:text-[#7C3AED] transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Kembali ke Proyek
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-0.5 h-4 bg-[#7C3AED]" />
              <span className="font-mono text-[#7C3AED] text-xs tracking-wide uppercase">
                // DETAIL PROYEK
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#1A1523] mb-2">{selectedProject.title}</h1>
            <p className="text-base text-[#6B7280]">{selectedProject.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h3 className="text-xl font-bold mb-3 text-[#1A1523]">Deskripsi</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{selectedProject.fullDescription}</p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3 text-[#1A1523]">Latar Belakang</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{selectedProject.background}</p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-3 text-[#1A1523]">Fitur Utama</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#6B7280] text-sm">
                      <svg className="w-5 h-5 text-[#7C3AED] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {selectedProject.images && selectedProject.images.length > 0 && (
                <section>
                  <h3 className="text-xl font-bold mb-3 text-[#1A1523]">Galeri Proyek</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((img, idx) => (
                      <div key={idx} className="rounded-md overflow-hidden border border-[#E8E3F0]">
                        <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto hover:scale-105 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-6">
              <div className="p-5 bg-[#F5F3FF] border border-[#E8E3F0] rounded-xl">
                <h4 className="font-bold text-[#1A1523] mb-2 text-sm">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] px-2 py-1 bg-white border border-[#E8E3F0] text-[#7C3AED] rounded-md shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#FAFAFA] border border-[#E8E3F0] rounded-xl">
                <h4 className="font-bold text-[#1A1523] mb-2 text-sm">Peran</h4>
                <p className="text-[#6B7280] text-xs leading-relaxed">{selectedProject.role}</p>
              </div>

              {selectedProject.demoLink !== '#' && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm bg-[#7C3AED] text-white font-medium rounded-xl hover:bg-[#6D28D9] transition-colors shadow-lg shadow-violet-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Lihat Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1523] selection:bg-[#7C3AED] selection:text-white font-sans">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/90 ${isScrolled ? 'border-b border-[#E8E3F0] py-4' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="font-mono font-bold text-xl text-[#7C3AED] tracking-tighter">
            &lt;Fandra.dev/&gt;
          </a>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#6B7280] hover:text-[#7C3AED] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section id="hero" className="reveal pt-20 pb-10 md:pt-24 md:pb-12 bg-[#FFFFFF] lg:min-h-[85vh] lg:flex lg:items-center">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center w-full">
            <div>
              <div className="font-mono text-[#7C3AED] mb-3 text-xs tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">
                // Laravel · PHP · berkembang menuju fullstack &amp; QA
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1523] mb-5 leading-[1.1]">
                Fandra Salsabilla<br />Oktorasari
              </h1>
              <p className="max-w-xl text-sm text-[#6B7280] mb-6 leading-relaxed">
                Mahasiswa Teknik Informatika yang teliti dan berorientasi pada kualitas, dengan pemahaman dasar software testing dalam konteks Agile. Berpengalaman sebagai frontend developer sekaligus tester dalam proyek tim kolaboratif (manual testing, perancangan test case, pelaporan bug). Sedang mengembangkan pemahaman terstruktur mengenai prinsip pengujian perangkat lunak melalui perkuliahan, termasuk test case sampling dan siklus hidup defect. Bersemangat berkontribusi dan belajar lebih jauh di bidang Software Quality Assurance.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#projects" className="px-6 py-3 bg-[#7C3AED] text-white font-medium rounded-md hover:bg-[#6D28D9] transition-colors">
                  Lihat Proyek
                </a>
                <a href="assets/Fandra Salsabilla O_CV.pdf" className="px-6 py-3 bg-[#FFFFFF] text-[#1A1523] border border-[#E8E3F0] font-medium rounded-md hover:bg-[#F5F3FF] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Unduh CV
                </a>
              </div>
              <div className="flex items-center gap-5 text-[#6B7280]">
                <a href="https://github.com/FandraSalsabillaOktorasari" className="hover:text-[#7C3AED] transition-colors flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                  Github
                </a>
                <a href="//linkedin.com/in/fandra-salsabilla-oktorasari" className="hover:text-[#7C3AED] transition-colors flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 18.337V9.711H5.667v8.626h2.672zM7.003 8.575c.93 0 1.512-.616 1.512-1.388-.017-.789-.583-1.387-1.495-1.387S5.503 6.398 5.503 7.187c0 .772.567 1.388 1.482 1.388h.018zm4.908 9.762V13.56c0-.249.018-.499.092-.677.2-.499.654-1.016 1.422-1.016.998 0 1.4.762 1.4 1.882v4.588h2.672v-4.91c0-2.467-1.32-3.616-3.083-3.616-1.422 0-2.038.794-2.402 1.349v.027h-.018a5.42 5.42 0 00.018-.027V9.71h-2.67c.035.776 0 8.626 0 8.626h2.67z" /></svg>
                  Linkedin
                </a>
                <a href="mailto:fandrakuliah@gmail.com" className="hover:text-[#7C3AED] transition-colors flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-full max-w-xs text-[#A78BFA]">
                <rect x="50" y="50" width="200" height="200" rx="16" transform="rotate(45 150 150)" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <g transform="translate(150 150)">
                  <text x="-55" y="-5" fontFamily="'JetBrains Mono', monospace" fontSize="38" fill="currentColor">{'</>'}</text>
                  <text x="-22" y="38" fontFamily="'JetBrains Mono', monospace" fontSize="38" fill="currentColor">{'{ }'}</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section id="about" className="reveal py-12 bg-[#F5F3FF]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading number="01" label="ABOUT" title="Tentang Saya" />
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-[#6B7280] space-y-4 leading-relaxed">
                <p>
                  Saya Fandra Salsabilla Oktorasari, mahasiswa D3 Teknik
                  Informatika di Politeknik Elektronika Negeri Surabaya (PENS)
                  dengan passion di bidang pengembangan perangkat lunak
                  dan penjaminan kualitas.
                </p>
                <p>
                  Saya percaya bahwa perangkat lunak yang hebat tidak hanya
                  berfungsi, tetapi juga handal dan mudah dikelola. Melalui
                  pengalaman saya dalam mengembangkan backend dengan Laravel
                  dan melakukan pengujian sistem secara mendalam, saya selalu
                  berusaha menggabungkan logika pemrograman yang kuat dengan
                  standar kualitas yang tinggi.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-[#FFFFFF] border border-[#E8E3F0] rounded-md p-4">
                    <div className="text-xl md:text-2xl font-bold text-[#7C3AED] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#6B7280]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="reveal py-12 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading number="02" label="SKILLS" title="Keahlian Teknis" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((cat, i) => (
                <div key={i} className="p-6 bg-[#FAFAFA] border border-[#E8E3F0] rounded-xl hover:border-[#7C3AED] transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-[#1A1523]">
                    <span className="text-[#7C3AED]">{cat.icon}</span>
                    <span className="font-bold">{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <span key={j} className="font-mono text-xs px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="reveal py-12 bg-[#F5F3FF]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading number="03" label="CERTIFICATIONS" title="Sertifikasi" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCertifications.map((cert, i) => (
                <div key={i} className="p-4 bg-[#FFFFFF] border border-[#E8E3F0] rounded-md hover:border-[#7C3AED] transition-colors flex flex-col h-full shadow-sm hover:shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-[#F5F3FF] rounded-md text-[#7C3AED]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1523] mb-1">{cert.title}</h3>
                  <p className="text-xs font-medium text-[#7C3AED] mb-3">{cert.issuer}</p>

                  <div className="space-y-1 mb-4 flex-grow">
                    <p className="text-xs text-[#6B7280] flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {cert.date}
                    </p>
                    {cert.score && (
                      <p className="text-xs text-[#6B7280] flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        {cert.score}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4 flex-grow">{cert.desc}</p>

                  <div className="mt-auto space-y-3">
                    {cert.credentialId && (
                      <span className="inline-block font-mono text-[10px] px-2 py-1 bg-[#F5F3FF] border border-[#E8E3F0] text-[#7C3AED] rounded-md">
                        ID: {cert.credentialId}
                      </span>
                    )}
                    {cert.fileUrl && (
                      <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center text-xs font-medium text-[#7C3AED] hover:text-[#6D28D9] border border-[#E8E3F0] hover:border-[#7C3AED] py-2 rounded-md transition-colors bg-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        Lihat Sertifikat
                      </a>
                    )}
                    {cert.verifyLink && (
                      <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center text-xs font-medium text-[#7C3AED] hover:text-[#6D28D9] border border-[#E8E3F0] hover:border-[#7C3AED] py-2 rounded-md transition-colors bg-white">
                        Verifikasi Sertifikat &rarr;
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {certifications.length > 3 && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-[#1A1523] border border-[#E8E3F0] rounded-md hover:bg-[#F5F3FF] transition-colors"
                >
                  {showAllCerts ? 'Tampilkan Lebih Sedikit' : `Lihat Semua Sertifikasi (${certifications.length})`}
                  <svg className={`w-4 h-4 transition-transform duration-300 ${showAllCerts ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="experience" className="reveal py-12 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading number="04" label="EXPERIENCE" title="Pengalaman" />
            <div className="max-w-3xl border-l-2 border-[#E8E3F0] ml-3 pl-8 space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#7C3AED] border-4 border-[#F5F3FF]" />
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-[#1A1523]">{exp.role}</h3>
                    <span className="font-mono text-xs px-3 py-1 bg-[#7C3AED] text-white rounded-md">
                      {exp.company}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-[#6B7280] mt-1 mb-4">{exp.period}</p>
                  <p className="text-[#6B7280] leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="font-mono text-xs px-3 py-1 bg-[#FFFFFF] border border-[#E8E3F0] text-[#6B7280] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.photos && exp.photos.length > 0 && (
                    <div className="flex gap-4 overflow-x-auto mt-6 pb-2 snap-x">
                      {exp.photos.map((photo, pIdx) => (
                        <div key={pIdx} className="w-32 md:w-48 h-24 md:h-32 rounded-md overflow-hidden border border-[#E8E3F0] snap-start flex-shrink-0 cursor-pointer shadow-sm">
                          <img src={photo} alt={`Dokumentasi ${pIdx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="reveal py-12 bg-[#F5F3FF]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading number="05" label="PROJECTS" title="Proyek" />
            <div className="flex flex-wrap gap-3 mb-6">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeFilter === filter
                    ? 'bg-[#7C3AED] text-white'
                    : 'bg-[#FAFAFA] text-[#6B7280] border border-[#E8E3F0] hover:border-[#7C3AED]'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <div key={i} className="bg-[#FAFAFA] border border-[#E8E3F0] rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                  <div className="bg-[#F5F3FF] flex items-center justify-center py-12">
                    <span className="text-4xl font-extrabold text-[#A78BFA] tracking-widest">{project.initials}</span>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <span className="font-mono text-xs px-3 py-1 bg-[#F5F3FF] text-[#7C3AED] rounded-md self-start mb-3">
                      {project.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A1523] mb-1">{project.title}</h3>
                    <p className="font-mono text-xs text-[#6B7280] mb-3">{project.subtitle}</p>
                    <p className="text-[#6B7280] mb-6 leading-relaxed flex-grow text-sm">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, j) => (
                        <span key={j} className="font-mono text-xs px-3 py-1 bg-[#FFFFFF] border border-[#E8E3F0] text-[#6B7280] rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="text-[#7C3AED] text-sm font-medium hover:text-[#6D28D9] transition-colors inline-flex items-center gap-1">
                      Source Code
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="reveal py-12 md:py-16 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading number="06" label="CONTACT" title="Kontak" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                  Tertarik untuk berkolaborasi atau memiliki pertanyaan?
                  Jangan ragu untuk menghubungi saya melalui kontak di
                  bawah ini.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-[#7C3AED] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div>
                      <div className="font-bold text-[#1A1523]">Email</div>
                      <div className="text-[#6B7280] text-sm">fandrakuliah@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-[#7C3AED] mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 18.337V9.711H5.667v8.626h2.672zM7.003 8.575c.93 0 1.512-.616 1.512-1.388-.017-.789-.583-1.387-1.495-1.387S5.503 6.398 5.503 7.187c0 .772.567 1.388 1.482 1.388h.018zm4.908 9.762V13.56c0-.249.018-.499.092-.677.2-.499.654-1.016 1.422-1.016.998 0 1.4.762 1.4 1.882v4.588h2.672v-4.91c0-2.467-1.32-3.616-3.083-3.616-1.422 0-2.038.794-2.402 1.349v.027h-.018a5.42 5.42 0 00.018-.027V9.71h-2.67c.035.776 0 8.626 0 8.626h2.67z" /></svg>
                    <div>
                      <div className="font-bold text-[#1A1523]">LinkedIn</div>
                      <div className="text-[#6B7280] text-sm">linkedin.com/in/fandra-salsabilla-oktorasari</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-[#7C3AED] mt-1" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                    <div>
                      <div className="font-bold text-[#1A1523]">GitHub</div>
                      <div className="text-[#6B7280] text-sm">github.com/FandraSalsabillaOktorasari</div>
                    </div>
                  </div>
                </div>
              </div>
              <form className="bg-[#FFFFFF] border border-[#E8E3F0] rounded-xl p-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#1A1523] mb-2">Nama</label>
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E8E3F0] rounded-md text-sm text-[#1A1523] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1523] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E8E3F0] rounded-md text-sm text-[#1A1523] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1523] mb-2">Pesan</label>
                  <textarea
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-[#E8E3F0] rounded-md text-sm text-[#1A1523] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#7C3AED] text-white font-medium rounded-md hover:bg-[#6D28D9] transition-colors flex items-center justify-center gap-2"
                >
                  Kirim Pesan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-[#1A1523] text-center border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            <p className="font-mono text-sm text-[#A78BFA]">Fandra.dev</p>
            <p className="text-xs text-[#6B7280] mt-1">
              © {new Date().getFullYear()} Fandra Salsabilla Oktorasari. Built with precision.
              <br className="md:hidden" /> Dibuat dengan ❤️ dan Tailwind.
            </p>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/FandraSalsabillaOktorasari" className="text-sm text-[#9CA3AF] hover:text-[#A78BFA] transition-colors">Github</a>
            <a href="//linkedin.com/in/fandra-salsabilla-oktorasari" className="text-sm text-[#9CA3AF] hover:text-[#A78BFA] transition-colors">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;