import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  BookOpen,
  ArrowRight,
  UserPlus,
  ExternalLink,
  HandHelping,
  GraduationCap
} from 'lucide-react';
import { QURAN_AYATS, TEAM_MEMBERS, PROJECTS, IMPACTS, DONATION_METHODS } from './constants';

type Page = 'home' | 'about' | 'projects' | 'team' | 'donate' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAyat, setActiveAyat] = useState(QURAN_AYATS[0]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    shuffleAyat();
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shuffleAyat = () => {
    const randomIndex = Math.floor(Math.random() * QURAN_AYATS.length);
    setActiveAyat(QURAN_AYATS[randomIndex]);
  };

  const t = {
    bn: {
      foundation: "বারাকাহ ফাউন্ডেশন",
      slogan: "বরকতের পথে আপনাদের সাথে",
      home: "হোম",
      about: "লক্ষ্য",
      projects: "প্রকল্প",
      team: "টিম",
      contact: "যোগাযোগ",
      donate: "দান করুন",
      whatsapp: "হোয়াটসঅ্যাপ",
      location: "লালমনিরহাট, রংপুর, বাংলাদেশ"
    },
    en: {
      foundation: "Barakah Foundation",
      slogan: "Together on the path of Barakah",
      home: "Home",
      about: "Vision",
      projects: "Projects",
      team: "Team",
      contact: "Contact",
      donate: "Donate",
      whatsapp: "WHATSAPP",
      location: "Lalmonirhat, Rangpur, Bangladesh"
    }
  }[lang];

  const NavLink = ({ to, label }: { to: Page; label: string }) => (
    <button
      onClick={() => {
        setCurrentPage(to);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
      }}
      className={`text-[13px] font-black uppercase tracking-wider transition-all relative py-2 ${
        currentPage === to ? 'text-emerald-800' : 'text-slate-400 hover:text-emerald-800'
      }`}
    >
      {label}
      {currentPage === to && (
        <motion.div 
          layoutId="navUnderline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-800"
        />
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-800/10 selection:text-emerald-800 bg-white">
      {/* Top Bar - Fixed with solid background */}
      <div style={{ backgroundColor: '#064e3b' }} className="text-white py-2 px-4 md:px-8 text-[11px] font-bold uppercase tracking-widest flex justify-between items-center relative z-[60]">
        <div className="flex gap-6 items-center">
          <span className="hidden sm:inline-block font-black text-green-300">{t.foundation}</span>
          <div className="flex gap-4 md:gap-6">
            <a href="tel:01620721797" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
              <Phone className="w-3.5 h-3.5" /> <span>01620-721797</span>
            </a>
            <a href="https://wa.me/8801618274069" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
              <MessageCircle className="w-3.5 h-3.5 text-green-400" /> <span>{t.whatsapp}</span>
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 text-[9px] bg-white/10 rounded-full px-3 py-1 border border-white/10">
            <button 
              onClick={() => setLang('bn')} 
              className={`px-2 py-0.5 rounded-full transition-all ${lang === 'bn' ? 'bg-white text-emerald-800' : 'text-white/60 hover:text-white'}`}
            >
              BN
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-0.5 rounded-full transition-all ${lang === 'en' ? 'bg-white text-emerald-800' : 'text-white/60 hover:text-white'}`}
            >
              EN
            </button>
          </div>
          <a href="https://web.facebook.com/profile.php?id=61579400927393" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pb-[100px] md:pb-[120px]">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <HomeContent lang={lang} onPageChange={setCurrentPage} activeAyat={activeAyat} onShuffle={shuffleAyat} />}
          {currentPage === 'about' && <AboutContent key="about" lang={lang} />}
          {currentPage === 'projects' && <ProjectsContent key="projects" lang={lang} />}
          {currentPage === 'team' && <TeamContent key="team" lang={lang} />}
          {currentPage === 'donate' && <DonateContent key="donate" lang={lang} />}
          {currentPage === 'contact' && <ContactContent key="contact" lang={lang} />}
        </AnimatePresence>
      </div>

      {/* Unique Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl">
        <div className="glass-nav rounded-[40px] px-4 py-3 md:px-10 md:py-4 flex items-center justify-between shadow-2xl border border-white/50 ring-1 ring-black/10">
          
          {/* Logo & Branding */}
          <button 
            onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }} 
            className="flex items-center gap-3 shrink-0"
          >
            <img src="/barakah/logo.png" alt="Barakah Foundation Logo" className="w-10 h-10 object-contain shrink-0" />
            <div className="hidden lg:block text-left">
              <h1 className="text-sm font-black text-emerald-800 leading-none uppercase">{t.foundation}</h1>
              <p className="text-[6px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">{lang === 'bn' ? 'বরকতের পথে আপনাদের সাথে' : 'Trust in Barakah'}</p>
            </div>
          </button>

          {/* Nav Links / Pages */}
          <div className="flex items-center gap-3 md:gap-8 overflow-x-auto no-scrollbar px-4 scroll-smooth">
            <NavLink to="home" label={t.home} />
            <NavLink to="about" label={t.about} />
            <NavLink to="projects" label={t.projects} />
            <NavLink to="team" label={t.team} />
            <NavLink to="contact" label={t.contact} />
          </div>

          {/* Donate */}
          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <button 
              onClick={() => { setCurrentPage('donate'); window.scrollTo(0,0); }}
              className="bg-emerald-800 text-white p-3 md:px-8 md:py-3.5 rounded-2xl shadow-xl shadow-emerald-800/30 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <span className="hidden md:inline">{t.donate}</span>
              <HandHelping className="w-5 h-5 md:hidden" />
            </button>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-[#0A1A12] text-white pt-32 pb-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-800/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 relative z-10">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <img src="/barakah/logo.png" alt="Barakah Foundation Logo" className="w-14 h-14 object-contain" />
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">বারাকাহ ফাউন্ডেশন</h2>
                <p className="text-[10px] text-emerald-800 font-black uppercase tracking-[0.3em]">Barakah Foundation</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 text-balance">
              আমরা একটি অলাভজনক ও সেবামূলক প্রতিষ্ঠান। আমাদের লক্ষ্য দ্বীনি শিক্ষা ও আর্তমানবতার সেবায় নিজেকে নিয়োজিত করা।
            </p>
            <div className="flex gap-6">
              <a href="https://web.facebook.com/profile.php?id=61579400927393" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-800 transition-all group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-500 transition-all group cursor-pointer">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-10 uppercase tracking-widest text-emerald-800">আমাদের সেবা</h4>
            <div className="flex flex-col gap-4 text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
              <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="text-left hover:text-white transition-colors">হোম</button>
              <button onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }} className="text-left hover:text-white transition-colors">আমাদের সম্পর্কে</button>
              <button onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }} className="text-left hover:text-white transition-colors">প্রকল্পসমূহ</button>
              <button onClick={() => { setCurrentPage('team'); window.scrollTo(0, 0); }} className="text-left hover:text-white transition-colors">আমাদের টিম</button>
              <button onClick={() => { setCurrentPage('donate'); window.scrollTo(0, 0); }} className="text-left hover:text-white transition-colors">দান করুন</button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-10 uppercase tracking-widest text-emerald-800">যোগাযোগ</h4>
            <div className="space-y-6 text-sm text-slate-400 font-bold">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-emerald-800" />
                <span className="leading-snug">{lang === 'bn' ? 'লালমনিরহাট, রংপুর, বাংলাদেশ' : 'Lalmonirhat, Rangpur, Bangladesh'}</span>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 shrink-0 text-emerald-800" />
                <span>01620-721797</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 shrink-0 text-emerald-800" />
                <span className="break-all font-mono lowercase">foundationbarakahbd@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-10 uppercase tracking-widest text-emerald-800">নিউজলেটার</h4>
            <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-6">আমাদের সাম্প্রতিক আপডেট পেতে সাবস্ক্রাইব করুন।</p>
            <div className="relative group">
              <input type="email" placeholder="ইমেইল অ্যাড্রেস..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-emerald-800/50 transition-all font-mono" />
              <button className="absolute right-2 top-2 bottom-2 bg-emerald-800 text-white px-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">সাবমিট</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
          <p>© 2026 বারাকাহ ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-3">
             <span className="opacity-50 lowercase tracking-normal">Handcrafted by</span>
             <a href="https://doyox.com" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:text-emerald-700 transition-all scale-110 tracking-widest">Doyox</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ------------------ HomeContent ------------------
function HomeContent({ lang, onPageChange, activeAyat, onShuffle }: { lang: 'bn' | 'en', onPageChange: (p: Page) => void, activeAyat: any, onShuffle: () => void }) {
  const t = {
    bn: {
      heroLabel: "বরকতের পথে আপনাদের সাথে",
      heroTitle: "বরকতের পথে",
      heroAccent: "একসাথে",
      heroDesc: "আমরা একটি অলাভজনক ও সেবামূলক প্রতিষ্ঠান। আমাদের লক্ষ্য দ্বীনি শিক্ষা ও আর্তমানবতার সেবায় নিজেকে নিয়োজিত করা।",
      donateBtn: "এখনই দান করুন",
      aboutBtn: "আমাদের সম্পর্কে",
      focusTitle: "আমরা যেগুলোতে কাজ করি",
      focusLabel: "সেবামূলক কার্যক্রম",
      ctaTitle: "আমাদের এই মহৎ যাত্রায় আপনিও শামিল হোন",
      ctaDesc: "আমরা আপনার সহযোগিতা এবং ভালোবাসার অপেক্ষায় আছি। দ্বীনি শিক্ষা ও মানবতার সেবায় আপনার অংশগ্রহণ আমাদের অনুপ্রেরণা।",
      shuffleBtn: "অন্য আয়াত",
      foundation: "বারাকাহ ফাউন্ডেশন"
    },
    en: {
      heroLabel: "Together on the path of Barakah",
      heroTitle: "On the Path of",
      heroAccent: "Barakah",
      heroDesc: "We are a non-profit and service-oriented organization. Our goal is to involve ourselves in religious education and the service of humanity.",
      donateBtn: "Donate Now",
      aboutBtn: "About Us",
      focusTitle: "Our Areas of Work",
      focusLabel: "Service Activities",
      ctaTitle: "Join Us in This Noble Journey",
      ctaDesc: "We look forward to your cooperation and love. Your participation in religious education and human service is our inspiration.",
      shuffleBtn: "Another Verse",
      foundation: "Barakah Foundation"
    }
  }[lang];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-emerald-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 cloudy-overlay z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-20 w-full text-center lg:text-left grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
            <h1 className="text-white/40 font-black tracking-[0.4em] text-xs uppercase mb-4 block drop-shadow-md">
              {t.foundation}
            </h1>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.95] mb-10 tracking-tighter drop-shadow-2xl">
              {t.heroTitle} <br/>
              <span className="text-accent italic">{t.heroAccent}</span>
            </h2>
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-12 max-w-xl text-balance font-medium shadow-black/20">
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <button 
                onClick={() => onPageChange('donate')}
                className="bg-white text-emerald-800 px-12 py-6 rounded-[32px] font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-100 transition-all flex items-center gap-3 group"
              >
                {t.donateBtn}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => onPageChange('about')}
                className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-12 py-6 rounded-[32px] font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                {t.aboutBtn}
              </button>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {IMPACTS.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + (i * 0.1), duration: 0.8 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-[50px] text-center hover:bg-white/20 transition-all group"
              >
                <h4 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat[lang].value}</h4>
                <p className="text-green-300 text-[10px] font-black uppercase tracking-widest opacity-80">{stat[lang].label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayat Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <BookOpen className="w-8 h-8 text-emerald-800" />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAyat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-5xl font-black mb-8 leading-tight text-slate-800 text-balance italic">
                "{activeAyat[lang].text}"
              </p>
              <span className="text-emerald-800 font-black text-sm uppercase tracking-widest">{activeAyat[lang].reference}</span>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={onShuffle}
            className="group inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-800 transition-all"
          >
            {t.shuffleBtn} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <BookOpen className="w-96 h-96 absolute -top-20 -left-20 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-black text-slate-800 mb-2 tracking-tighter uppercase">{lang === 'bn' ? 'আপনার আর্থিক সহযোগিতা আমাদের প্রেরণা' : 'Your financial cooperation is our inspiration'}</h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{lang === 'bn' ? 'একটি মানবিক ও টেকসই সমাজ গড়াই আমাদের অঙ্গীকার' : 'Our commitment to building a humane and sustainable society'}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {DONATION_METHODS.map((m) => (
              <div key={m.type} className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`w-14 h-14 ${m.color} rounded-2xl flex items-center justify-center text-2xl shadow-inner text-white`}>
                  {m.emoji}
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">{m.type}</p>
                  <p className="text-slate-700 font-mono font-black text-lg">{m.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-24">
          <span className="text-emerald-800 font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">{t.focusLabel}</span>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">{t.focusTitle}</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((p) => (
            <motion.div 
              key={p.id} 
              whileHover={{ y: -15 }}
              className="group bg-white border border-slate-200 rounded-[60px] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-700"
            >
               <div className="h-80 overflow-hidden relative">
                 <img src={p.image} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                 <div className="absolute bottom-8 left-8">
                   <span className="px-5 py-2 bg-emerald-800 text-white text-[10px] font-black uppercase tracking-widest rounded-full">{p[lang].category}</span>
                 </div>
               </div>
               <div className="p-10 flex-1 flex flex-col text-center lg:text-left">
                 <h3 className="text-2xl font-black mb-4 tracking-tighter leading-tight group-hover:text-emerald-800 transition-colors">{p[lang].title}</h3>
                 <p className="text-slate-500 text-base leading-relaxed mb-10 flex-1">{p[lang].description}</p>
                 <button 
                  onClick={() => { onPageChange('projects'); window.scrollTo(0,0); }}
                  className="mx-auto lg:mx-0 w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-all shadow-sm"
                 >
                   <ArrowRight className="w-5 h-5" />
                 </button>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-800 p-12 md:p-32 rounded-[100px] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none text-balance">
                {t.ctaTitle}
              </h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                {t.ctaDesc}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={() => { onPageChange('contact'); window.scrollTo(0,0); }}
                  className="bg-white text-emerald-800 px-12 py-5 rounded-[32px] font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
                >
                  {lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
                </button>
                <button 
                   onClick={() => { onPageChange('donate'); window.scrollTo(0,0); }}
                  className="bg-white/10 border-2 border-white/20 text-white px-12 py-5 rounded-[32px] font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  {t.donateBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

// ------------------ AboutContent ------------------
function AboutContent({ lang }: { lang: 'bn' | 'en' }) {
  const t = {
    bn: {
      label: "আমাদের লক্ষ্য ও উদ্দেশ্য",
      titleStart: "মানবতার কল্যাণে",
      titleAccent: "একনিষ্ঠ",
      desc: "বারাকাহ ফাউন্ডেশন একটি অলাভজনক ও দাওয়াহ মূলক সেবামূলক প্রতিষ্ঠান। আমাদের যাত্রা শুরু হয়েছে ১১ জন প্রতিষ্ঠাতা সদস্যের একনিষ্ঠ প্রচেষ্টায়। বর্তমানে আমাদের ২০ জনেরও বেশি স্বেচ্ছাসেবক নিরলসভাবে কাজ করে যাচ্ছেন।",
      items: [
        { icon: Heart, title: "গরিব মানুষের সেবা", text: "মৌলিক চাহিদা পূরণে এবং জরুরি সহায়তায় সর্বদা প্রস্তুত।" },
        { icon: BookOpen, title: "নব মুসলিম সহায়তা", text: "দীনি শিক্ষা ও ধর্মীয় মূল্যবোধ জাগ্রত রাখতে বিশেষ গুরুত্ব।" },
        { icon: GraduationCap, title: "শিশুদের শিক্ষা নিশ্চিতকরণ", text: "অবহেলিত ও সুবিধাবঞ্চিত শিশুদের শিক্ষার আলো পৌঁছে দেওয়া।" },
        { icon: HandHelping, title: "বেকারদের কর্মসংস্থান", text: "বেকার যুবক-যুবতীদের দক্ষ করে তোলা ও কাজ প্রদান।" }
      ]
    },
    en: {
      label: "Our Vision & Mission",
      titleStart: "Dedicated to the",
      titleAccent: "Humanity",
      desc: "Barakah Foundation is a non-profit and dawah-oriented service organization. Our journey started with the dedicated efforts of 11 founding members. Currently, more than 20 of our volunteers are working tirelessly.",
      items: [
        { icon: Heart, title: "Service to the Poor", text: "Always ready to meet basic needs and provide emergency assistance." },
        { icon: BookOpen, title: "Support for New Muslims", text: "Special emphasis on religious education and values." },
        { icon: GraduationCap, title: "Ensuring Children's Education", text: "Bringing the light of education to neglected and underprivileged children." },
        { icon: HandHelping, title: "Employment for Unemployed", text: "Making unemployed youth skilled and providing work." }
      ]
    }
  }[lang];

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {lang === 'bn' ? 'বারাকাহ ফাউন্ডেশন' : 'Barakah Foundation'}
        </h1>
        <div className="h-1 w-24 bg-emerald-800 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-800/5 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-[80px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-square md:aspect-auto"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
          <div>
            <span className="text-emerald-800 font-black tracking-[0.5em] text-[10px] uppercase mb-8 block">{t.label}</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.95] uppercase">{t.titleStart} <br/> <span className="text-emerald-800 italic">{t.titleAccent}</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 text-balance">
              {t.desc}
            </p>
            <div className="space-y-8">
              {t.items.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-emerald-800/10 rounded-2xl flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ------------------ ProjectsContent ------------------
function ProjectsContent({ lang }: { lang: 'bn' | 'en' }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {lang === 'bn' ? 'বারাকাহ ফাউন্ডেশন' : 'Barakah Foundation'}
        </h1>
        <div className="h-1 w-24 bg-emerald-800 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-emerald-800 font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">{lang === 'bn' ? 'পবিত্র কর্মযজ্ঞ' : 'Sacred Endeavors'}</span>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">{lang === 'bn' ? 'আমাদের চলমান প্রকল্পগুলো' : 'Our Ongoing Projects'}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((p) => (
            <div key={p.id} className="group bg-white rounded-[60px] overflow-hidden border border-slate-100 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500">
               <div className="h-72 overflow-hidden relative">
                 <img src={p.image} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
               </div>
               <div className="p-12 flex-1 flex flex-col">
                 <span className="text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-4 block underline underline-offset-4">{p[lang].category}</span>
                 <h3 className="text-2xl font-black mb-6 tracking-tighter leading-tight">{p[lang].title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-1">{p[lang].description}</p>
                 <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-slate-300">Status: {lang === 'bn' ? 'চলমান' : 'Active'}</span>
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ------------------ TeamContent ------------------
function TeamContent({ lang }: { lang: 'bn' | 'en' }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {lang === 'bn' ? 'বারাকাহ ফাউন্ডেশন' : 'Barakah Foundation'}
        </h1>
        <div className="h-1 w-24 bg-emerald-800 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
          <span className="text-emerald-800 font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">{lang === 'bn' ? 'এক দল সাহসী যোদ্ধা' : 'A Team of Brave Warriors'}</span>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">{lang === 'bn' ? 'নিবেদিত টিম মেম্বার্স' : 'Dedicated Team Members'}</h2>
        </div>

        {/* Advisors */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16">
             <h3 className="text-2xl font-black uppercase tracking-[0.3em] whitespace-nowrap">{lang === 'bn' ? 'উপদেষ্টা মণ্ডলীয়' : 'Advisory Board'}</h3>
             <div className="h-px grow bg-slate-100"></div>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
             {TEAM_MEMBERS.advisors.map((member, i) => (
                <div key={i} className="group p-10 bg-slate-50 border border-slate-100 rounded-[40px] flex items-center justify-between hover:bg-emerald-800 transition-all duration-500">
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-400 mb-2 block group-hover:text-white/40">{lang === 'bn' ? 'সম্মানিত উপদেষ্টা' : 'Honorable Advisor'}</span>
                    <h4 className="text-2xl font-black tracking-tight group-hover:text-white transition-colors">{member[lang]}</h4>
                  </div>
                  <div className="w-16 h-16 rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-emerald-800 font-black group-hover:scale-110 transition-transform">
                    {i+1}
                  </div>
                </div>
             ))}
           </div>
        </div>

        {/* Leadership */}
        <div className="mb-40">
           <div className="flex items-center gap-6 mb-16">
             <h3 className="text-2xl font-black uppercase tracking-[0.3em] whitespace-nowrap">{lang === 'bn' ? 'নেতৃত্ব' : 'Leadership'}</h3>
             <div className="h-px grow bg-slate-100"></div>
           </div>
           <div className="grid md:grid-cols-3 gap-10">
             {TEAM_MEMBERS.leadership.map((m, i) => (
               <div key={i} className="text-center group">
                 <div className="relative w-48 h-48 mx-auto mb-8">
                    <div className="absolute inset-0 bg-emerald-800/5 rounded-[60px] rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white border-2 border-slate-100 rounded-[60px] flex items-center justify-center text-emerald-800 shadow-xl group-hover:shadow-emerald-800/20 transition-all">
                       <Users className="w-16 h-16 opacity-10 absolute" />
                       <span className="text-6xl font-black italic opacity-5">{m[`name_${lang}`][0]}</span>
                    </div>
                 </div>
                 <h4 className="text-2xl font-black mb-2 tracking-tight">{m[`name_${lang}`]}</h4>
                 <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800/60">{m[`role_${lang}`]}</p>
                 {m.role_bn === 'মেন্টর' && (
                   <a href="https://web.facebook.com/profile.php?id=61579400927393" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-800 transition-colors">
                     <Facebook className="w-4 h-4" /> Facebook
                   </a>
                 )}
               </div>
             ))}
           </div>
        </div>

        {/* Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
            {TEAM_MEMBERS.sections.map((s, i) => (
              <div key={i} className="p-12 bg-slate-50 rounded-[60px] border border-slate-100 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800/5 rounded-bl-full"></div>
                <h4 className="text-xl font-black mb-12 uppercase tracking-widest pb-6 border-b border-slate-200">{s[`title_${lang}`]}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {s.members.map((m: any, idx) => (
                     <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:scale-105 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-emerald-800"></div>
                        <span className="font-bold text-slate-700">{m[lang]}</span>
                     </div>
                   ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

// ------------------ DonateContent ------------------
function DonateContent({ lang }: { lang: 'bn' | 'en' }) {
  const t = {
    bn: {
      title: "দান করুন মানবতার টানে",
      desc: "আপনার একটি ছোট দান পরিবর্তন করতে পারে কারো জীবন। আমরা আছি আর্তমানবতার সেবায়।",
      personalMsg: "পার্সোনাল অ্যাকাউন্ট / সেন্ড মানি",
      copyBtn: "নম্বরটি কপি করুন",
      bankTitle: "সরাসরি ব্যাংকে সাহায্য পাঠান",
      bankDesc: "আমাদের ব্যাংক একাউন্ট চালিত হতে যাচ্ছে। শীঘ্রই এখানে ব্যাংক একাউন্টের বিস্তারিত তথ্য দেওয়া হবে। ততক্ষণ পর্যন্ত আমাদের মোবাইল ব্যাংকিং ব্যবহার করুন।",
      pending: "কার্যক্রম প্রক্রিয়াধীন...",
      sectors: ['যাকাত', 'সাদাকাহ', 'ফিতরা', 'শিক্ষা সাহায্য', 'মেডিকেল ফান্ড', 'জরুরি ত্রাণ']
    },
    en: {
      title: "Donate for Humanity",
      desc: "Your small donation can change someone's life. We are here in the service of humanity.",
      personalMsg: "Personal Account / Send Money",
      copyBtn: "Copy Number",
      bankTitle: "Send Help Directly to Bank",
      bankDesc: "Our bank account is about to be launched. Detailed information will be provided here soon. Until then, please use our mobile banking.",
      pending: "In progress...",
      sectors: ['Zakat', 'Sadaqah', 'Fitra', 'Education Support', 'Medical Fund', 'Emergency Relief']
    }
  }[lang];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-32 bg-white selection:bg-accent/20 selection:text-emerald-800">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {lang === 'bn' ? 'বারাকাহ ফাউন্ডেশন' : 'Barakah Foundation'}
        </h1>
        <div className="h-1 w-24 bg-emerald-800 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-none text-balance">{t.title}</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          {DONATION_METHODS.map((m) => (
            <div key={m.type} className="group relative bg-slate-50 border-2 border-slate-100 p-12 lg:p-14 rounded-[80px] text-center hover:border-emerald-800 transition-all duration-700">
               <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 ${m.color} rounded-[40px] flex items-center justify-center text-4xl shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-6 text-white`}>
                 {m.emoji}
               </div>
               <div className="pt-8">
                 <h4 className="text-3xl font-black mb-2 tracking-tighter uppercase">{m.type}</h4>
                 <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 italic">{t.personalMsg}</p>
                 <div className="bg-white p-8 rounded-[40px] border border-slate-100 mb-10 font-mono text-xl md:text-3xl font-black tracking-tighter text-slate-900 shadow-inner group-hover:scale-105 transition-transform">
                   {m.number}
                 </div>
                 <button 
                  onClick={() => {
                    navigator.clipboard.writeText(m.number);
                    alert(lang === 'bn' ? `কপি হয়েছে: ${m.number}` : `Copied: ${m.number}`);
                  }}
                  className="w-full py-5 rounded-[32px] bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-xl"
                 >
                   {t.copyBtn}
                 </button>
               </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-800 p-12 md:p-20 rounded-[100px] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-black mb-8 leading-tight tracking-tighter uppercase">{t.bankTitle}</h3>
              <p className="text-white/60 mb-10 font-medium">{t.bankDesc}</p>
              <div className="inline-flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full border border-white/10 opacity-50 font-black text-xs uppercase tracking-widest italic">
                {t.pending}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {t.sectors.map((i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[40px] text-center hover:bg-white/10 transition-all group">
                   <div className="w-10 h-10 bg-white/10 rounded-xl mb-4 mx-auto flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform"><CheckCircle className="w-5 h-5" /></div>
                   <span className="font-bold text-xs md:text-sm tracking-tight">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ------------------ ContactContent ------------------
function ContactContent({ lang }: { lang: 'bn' | 'en' }) {
  const t = {
    bn: {
      label: "যোগাযোগ করুন",
      titleStart: "আমাদের সাথে",
      titleAccent: "সংযুক্ত হোন",
      locTitle: "আমাদের অবস্থান",
      phoneTitle: "হটলাইন (Hotline)",
      emailTitle: "ইমেইল",
      sendMsg: "আপনার বার্তা পাঠান",
      name: "নাম (Name)",
      phone: "মোবাইল নম্বর (Phone)",
      subject: "বিষয় (Subject)",
      message: "আপনার বার্তা (Message)",
      submit: "সাবমিট করুন",
      subjects: ["সাধারণ কুশলাদি", "অনুদানের তথ্য", "টিমে যোগদানের আবেদন", "অন্যান্য"],
      placeholderName: "সম্পূর্ণ নাম...",
      placeholderPhone: "০১৮XXXXXXXX...",
      placeholderMsg: "কিছু লিখুন...",
      alert: "আপনার বার্তা পাওয়ার জন্য ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করব।"
    },
    en: {
      label: "Contact Us",
      titleStart: "Get in Touch",
      titleAccent: "With Us",
      locTitle: "Our Location",
      phoneTitle: "Hotline",
      emailTitle: "Email",
      sendMsg: "Send Your Message",
      name: "Name",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      submit: "Submit Now",
      subjects: ["General Inquiry", "Donation Info", "Join Our Team", "Others"],
      placeholderName: "Full name...",
      placeholderPhone: "018XXXXXXXX...",
      placeholderMsg: "Write something...",
      alert: "Thanks for your message! We will get in touch soon."
    }
  }[lang];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {lang === 'bn' ? 'বারাকাহ ফাউন্ডেশন' : 'Barakah Foundation'}
        </h1>
        <div className="h-1 w-24 bg-emerald-800 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-emerald-800 font-black tracking-[0.5em] text-[10px] uppercase mb-8 block">{t.label}</span>
            <h2 className="text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-none uppercase text-balance">{t.titleStart} <br/> <span className="text-emerald-800 italic">{t.titleAccent}</span></h2>
            <div className="space-y-10">
              {[
                { icon: MapPin, title: t.locTitle, info: lang === 'bn' ? "লালমনিরহাট, রংপুর, বাংলাদেশ" : "Lalmonirhat, Rangpur, Bangladesh", color: "text-blue-500" },
                { icon: Phone, title: t.phoneTitle, info: "01620-721797", color: "text-green-500", sub: "WhatsApp: +880 1618-274069" },
                { icon: Mail, title: t.emailTitle, info: "foundationbarakahbd@gmail.com", color: "text-red-500" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group/item">
                  <div className="w-16 h-16 shrink-0 bg-white rounded-[24px] flex items-center justify-center text-emerald-800 shadow-sm group-hover/item:bg-emerald-800 group-hover/item:text-white transition-all duration-500">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">{item.title}</h4>
                    <p className="text-xl font-black text-slate-800 tracking-tight">{item.info}</p>
                    {item.sub && <p className="text-xs font-bold text-green-500 mt-1 uppercase tracking-widest">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex flex-wrap gap-6">
               <a href="https://web.facebook.com/profile.php?id=61579400927393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#1877F2] text-white px-10 py-5 rounded-[30px] font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
                 <Facebook className="w-6 h-6" /> Facebook Page
               </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-20 rounded-[80px] shadow-2xl border border-slate-100">
             <h3 className="text-3xl font-black mb-12 uppercase tracking-tighter leading-none">{t.sendMsg}</h3>
             <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert(t.alert); }}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{t.name}</label>
                    <input required type="text" className="w-full bg-slate-50 border-2 border-slate-50 rounded-3xl px-8 py-5 focus:outline-none focus:border-emerald-800/20 transition-all font-bold placeholder:opacity-30" placeholder={t.placeholderName} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{t.phone}</label>
                    <input required type="text" className="w-full bg-slate-50 border-2 border-slate-50 rounded-3xl px-8 py-5 focus:outline-none focus:border-emerald-800/20 transition-all font-bold placeholder:opacity-30" placeholder={t.placeholderPhone} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{t.subject}</label>
                  <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-3xl px-8 py-5 focus:outline-none focus:border-emerald-800/20 transition-all font-bold text-slate-500">
                    {t.subjects.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{t.message}</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-50 rounded-3xl px-8 py-5 focus:outline-none focus:border-emerald-800/20 transition-all font-bold placeholder:opacity-30 resize-none font-sans" placeholder={t.placeholderMsg}></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-800 text-white py-6 rounded-[40px] text-xs font-black uppercase tracking-widest shadow-2xl shadow-emerald-800/20 hover:scale-[1.02] active:scale-100 transition-all">{t.submit}</button>
             </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
