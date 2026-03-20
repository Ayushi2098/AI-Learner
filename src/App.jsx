import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, ArrowRight, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import ayushiImg from './assets/ayushi.png';

const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const AmbientBackground = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#FAFAFA]">
    {/* Large Soft Glows */}
    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-100/40 blur-[140px]" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-slate-200/60 blur-[140px]" />
    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-50/40 blur-[120px]" />

    {/* Subtle Grid Motif */}
    <div
      className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
    />
  </div>
);

const FloatingNav = () => (
  <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-2 py-2 flex items-center gap-1">
    {[
      { name: 'About', href: '#about' },
      { name: 'Expertise', href: '#expertise' },
      { name: 'Work', href: '#work' },
      { name: 'Experience', href: '#experience' }
    ].map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 transition-all"
      >
        {item.name}
      </a>
    ))}
  </nav>
);

const FeaturedProjects = () => {
  const projects = [
    {
      id: 'vibe-sims',
      title: 'Vibe Sims',
      tagline: 'Interactive Math Simulations',
      role: 'Product Developer / Simulation Engineer',
      description: 'Interactive math simulations that let K–12 students manipulate calculus, probability, and geometry parameters in real time.',
      tech: ['React', 'TypeScript', 'Mafs', 'KaTeX'],
      impact: '50% increase in learner engagement metrics on Tutero platform.',
      note: 'Live on the Tutero platform',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      icon: <Sparkles size={24} />
    },
    {
      id: 'context-spinner',
      title: 'Context Spinner',
      tagline: 'Intelligent AI Content Pipeline',
      role: 'AI Content Systems Engineer',
      description: 'An AI-driven content pipeline that parses mathematical structures to generate accurate, curriculum-aligned questions at scale.',
      tech: ['React', 'Python', 'Node.js', 'Gemini API'],
      impact: 'Reduced manual content production time by ~60%.',
      note: 'Live on the Tutero platform',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section id="work" className="section-container">
      <FadeInSection>
        <div className="mb-12 border-b border-slate-200/70 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-xs flex items-center gap-4 font-semibold mb-3 tracking-[0.2em] uppercase text-slate-400">
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight">
              Featured Projects <span className="text-blue-500/60 font-sans tracking-normal font-medium text-sm align-middle ml-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-100/50">Company Properties</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bento-card group hover:bg-white transition-all duration-500 overflow-hidden">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${project.color} flex items-center justify-center shadow-sm border group-hover:scale-110 transition-transform duration-500`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-white transition-all cursor-pointer">
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-3">
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span> {project.role}
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">{project.title}</h3>
                <p className="text-xs font-medium text-slate-500 tracking-tight">{project.tagline}</p>
              </div>

              <p className="text-[14px] text-slate-600 leading-relaxed font-medium mb-6">
                {project.description}
              </p>

              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-slate-50 border border-slate-200/60 rounded-md text-[10px] font-bold text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div> Impact
                  </p>
                  <p className="text-[13px] text-slate-600 font-bold leading-relaxed">{project.impact}</p>
                </div>
                
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-t border-slate-100 pt-4">
                  {project.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 relative z-0 pb-12">
      <AmbientBackground />
      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="section-container min-h-[100vh] flex flex-col justify-center relative pt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="space-y-8 max-w-3xl flex-1">
            <FadeInSection delay={0}>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 text-slate-700 text-sm font-semibold mb-4 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span>Available for new opportunities</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-serif leading-none">
                  <span className="text-slate-900 block mb-2">Ayushi</span>
                  <span className="text-slate-400 text-5xl md:text-7xl block">Goenka</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-500 font-medium tracking-tight mt-6">
                  AI Learning Systems Engineer <span className="text-blue-500/60 px-2 font-light">|</span> Product & Content Systems
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={150}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                I design and build AI-assisted learning systems, intelligent content pipelines, and simulation-driven educational tools that make complex concepts accessible and scalable.
              </p>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#work" className="px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/20">
                  Explore Work
                </a>
                <a href="https://www.linkedin.com/in/ayushigconsistent/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full text-sm font-semibold bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a href="https://github.com/Ayushi2098" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full text-sm font-semibold bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </FadeInSection>
            <FadeInSection delay={450}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6 pt-8 border-t border-slate-200/60">
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold font-serif text-2xl">3</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">AI Apps Shipped</span>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold font-serif text-2xl">2</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Countries</span>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold font-serif text-2xl">50K+</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Students Reached</span>
                </div>
                <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold font-serif text-2xl">4+</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Years Exp</span>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={300} className="flex-1 w-full max-w-md relative hidden md:block">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl shadow-blue-900/5 border border-white/60 bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-xl flex items-center justify-center p-8 group transition-all hover:border-blue-200">
              <div className="absolute inset-0 bg-white/20 z-10 transition-all group-hover:bg-transparent duration-700"></div>
              <div className="w-64 h-64 rounded-full border border-blue-200/50 absolute -top-10 -right-10 mix-blend-multiply"></div>
              <div className="w-72 h-72 rounded-full border border-slate-200/50 absolute -bottom-20 -left-10 mix-blend-multiply"></div>

              <div className="absolute top-12 -left-4 z-20 bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-full border border-slate-200 shadow-xl text-xs font-bold text-slate-700 flex items-center gap-2 hover:scale-105 transition-all group-hover:-translate-y-2 duration-500">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> AI-First
              </div>
              <div className="absolute bottom-24 -right-4 z-20 bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-full border border-slate-200 shadow-xl text-xs font-bold text-slate-700 flex items-center gap-2 hover:scale-105 transition-all group-hover:translate-y-2 duration-500">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Content Eng
              </div>

              <div className="text-center z-10 scale-95 group-hover:scale-100 transition-transform duration-700">
                <div className="w-56 h-56 bg-white rounded-[3rem] shadow-[0_32px_64px_rgba(59,130,246,0.15)] mx-auto mb-10 flex items-center justify-center border-[6px] border-white -rotate-3 group-hover:rotate-6 transition-all duration-700 relative overflow-hidden group/photo">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-transparent to-transparent z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>
                  <img 
                    src={ayushiImg} 
                    alt="Ayushi Goenka" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 brightness-[1.08] saturate-[0.75] contrast-[1.05]" 
                  />
                </div>
                <p className="font-serif text-3xl text-slate-800 font-bold leading-tight tracking-tight">Building<br />Intelligent<br />Pipelines</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container relative">
        <FadeInSection>
          <h2 className="section-heading">About</h2>
          <div className="bento-card text-lg text-slate-600 leading-relaxed space-y-6">
            <p className="font-semibold text-slate-800 text-xl tracking-tight">
              My work sits at the intersection of AI Systems, Education Technology, Learning Science, and Content Engineering.
            </p>
            <p>
              I am an AI Learning Systems Engineer, Product Developer, and Content Systems Specialist with a background in mathematics and experience building AI-assisted educational infrastructure for large-scale learning platforms.
            </p>
            <p>
              My work focuses on designing structured knowledge systems, AI training datasets, and intelligent content pipelines that enable scalable and high-quality educational experiences. I specialize in translating complex mathematical and scientific concepts into structured digital learning formats, combining pedagogical insight with technical systems thinking.
            </p>
            <div className="pt-6 border-t border-slate-200/50 mt-4">
              <p className="mb-4 font-semibold text-slate-800">Over the years, I have collaborated with global engineering and education teams to:</p>
              <ul className="grid sm:grid-cols-2 gap-4 list-none text-[15px]">
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span> Develop AI-ready content datasets for large language models</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span> Build interactive simulations for conceptual learning</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span> Design data-driven educational content systems</li>
                <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span> Improve learner engagement through analytics-driven optimization</li>
              </ul>
            </div>
            <div className="p-5 mt-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
              <p className="font-medium text-slate-800">
                I am particularly interested in the future of AI-augmented learning systems, where intelligent technologies enhance how humans discover, understand, and apply knowledge.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>



      {/* Skills & Toolkits Section */}
      <section id="expertise" className="section-container relative overflow-hidden">
        {/* Subtle Background Glow for Light Mode */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-100/30 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] bg-slate-200/40 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight mb-4">
                Skills & <span className="text-blue-600">Toolkits</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                A collection of technologies, frameworks, and domains I leverage to build scalable, AI-driven learning systems.
              </p>
            </div>
          </FadeInSection>

          {/* Group 1: Official Toolkit (Marquee) */}
          <FadeInSection delay={100}>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] bg-slate-200 flex-grow"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                  Official Toolkit
                </span>
                <div className="h-[1px] bg-slate-200 flex-grow"></div>
              </div>

              <div className="relative overflow-hidden pause-marquee py-4">
                <div className="flex animate-marquee gap-12 whitespace-nowrap items-center">
                  {[
                    { name: 'Gemini AI', icon: <Sparkles size={24} /> },
                    { name: 'Prompt Eng', icon: <BookOpen size={24} /> },
                    { name: 'Data Annotation', icon: <ExternalLink size={24} /> },
                    { name: 'Vite', icon: <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600"></div> },
                    { name: 'Node.js', icon: <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-600 font-bold">Js</div> },
                    { name: 'KaTeX', icon: <div className="italic font-serif text-lg text-slate-800">Σ</div> },
                    { name: 'Mafs', icon: <div className="w-6 h-6 border-2 border-blue-400 rounded-lg"></div> },
                    { name: 'Git', icon: <Github size={24} /> },
                    { name: 'Analytics', icon: <div className="w-1 h-4 bg-blue-400 rounded-full mx-0.5"></div> },
                    // Duplicate for seamless loop
                    { name: 'Gemini AI', icon: <Sparkles size={24} /> },
                    { name: 'Prompt Eng', icon: <BookOpen size={24} /> },
                    { name: 'Data Annotation', icon: <ExternalLink size={24} /> },
                    { name: 'Vite', icon: <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600"></div> },
                    { name: 'Node.js', icon: <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-600 font-bold">Js</div> },
                    { name: 'KaTeX', icon: <div className="italic font-serif text-lg text-slate-800">Σ</div> },
                    { name: 'Mafs', icon: <div className="w-6 h-6 border-2 border-blue-400 rounded-lg"></div> },
                    { name: 'Git', icon: <Github size={24} /> },
                  ].map((tool, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:scale-110 shadow-sm">
                        {tool.icon}
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-blue-600 uppercase">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Group 2: Core Technologies (Grid) */}
          <FadeInSection delay={200}>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] bg-slate-200 flex-grow"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200">
                  Programming & Core Tech
                </span>
                <div className="h-[1px] bg-slate-200 flex-grow"></div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {[
                  { name: 'Python', color: 'bg-blue-50 text-blue-600 border-blue-100', label: 'Py' },
                  { name: 'JavaScript', color: 'bg-yellow-50 text-yellow-700 border-yellow-100', label: 'Js' },
                  { name: 'TypeScript', color: 'bg-blue-50 text-blue-600 border-blue-100', label: 'Ts' },
                  { name: 'React', color: 'bg-cyan-50 text-cyan-700 border-cyan-100', label: 'Re' },
                  { name: 'SQL / DB', color: 'bg-slate-50 text-slate-700 border-slate-200', label: 'SQL' }
                ].map((lang, i) => (
                  <div key={i} className="group relative">
                    <div className="relative flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-white/60 backdrop-blur-sm border border-slate-200 transition-all duration-500 hover:bg-white hover:border-blue-200 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)]">
                      <div className={`w-14 h-14 rounded-2xl ${lang.color} flex items-center justify-center font-bold text-lg tracking-tighter border shadow-sm`}>
                        {lang.label}
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors tracking-widest uppercase">
                        {lang.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Group 3: Specialized Domains */}
          <FadeInSection delay={300}>
            <div>
              <div className="flex items-center gap-4 mb-16">
                <div className="h-[1px] bg-slate-200 flex-grow"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                  Specialized Domains
                </span>
                <div className="h-[1px] bg-slate-200 flex-grow"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  'AI Content Systems', 'Prompt Engineering', 'LLM Training Data',
                  'EdTech Content Pipeline', 'Learning Experience Design',
                  'Interactive Simulations', 'Knowledge Structuring'
                ].map((domain, i) => (
                  <div key={i} className="group px-6 py-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 transition-all duration-300 hover:bg-blue-50/50 hover:border-blue-200 hover:-translate-y-1 hover:shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all"></div>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                      {domain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Work Experience Section */}
      <section id="experience" className="section-container">
        <FadeInSection>
          <h2 className="section-heading">Experience</h2>
        </FadeInSection>
        <div className="space-y-6">
          <FadeInSection delay={100}>
            <div className="bento-card !p-6 group overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-200 group-hover:bg-blue-500 transition-colors duration-300"></div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 pl-4">
                <div className="w-full md:w-1/4 flex-shrink-0 md:border-r border-slate-200/60 pr-6">
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">Tutero</h3>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-[0.1em] font-bold">Remote, Australia</p>
                </div>
                <div className="w-full md:w-3/4 space-y-10">
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">Content Engineer</h4>
                      <p className="text-sm font-medium text-slate-500 mb-4 tracking-tight">Oct 2023 – Present</p>
                      <p className="text-[15px] text-slate-600 leading-relaxed font-medium mb-5">
                        Design and develop AI-assisted educational content systems, curriculum-aligned learning resources, and structured instructional datasets for large-scale digital learning platforms serving K–12 students.
                      </p>
                      <ul className="space-y-3 text-[15px] text-slate-600">
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Developed curriculum-aligned educational content across all major Australian state curricula, including frameworks aligned with national standards used by schools across Australia.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Contributed to the creation of mathematics learning resources aligned with United States curriculum standards, expanding the platform's global educational coverage.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Designed and implemented AI-assisted content development workflows, improving production efficiency by approximately 60% while maintaining high academic quality standards.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Built two AI-assisted internal learning applications that are currently live on the platform, supporting structured learning workflows and interactive problem-solving for students.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Created structured datasets and knowledge frameworks to support scalable educational content generation and integration with AI-driven learning systems.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Analyzed student learning analytics and educator feedback to identify curriculum gaps and improve instructional design, contributing to an estimated 50% increase in learner engagement.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Developed content architecture, documentation frameworks, and quality standards to maintain consistency across large-scale educational content libraries.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 mr-3 flex-shrink-0"></span> Collaborated cross-functionally with product managers, engineers, and curriculum specialists to align educational content with platform capabilities and classroom learning needs.</li>
                      </ul>
                    </div>

                    <div className="pt-10 border-t border-slate-100/80">
                      <h4 className="text-lg font-bold text-slate-800 mb-1">Product Developer</h4>
                      <p className="text-sm font-medium text-slate-500 mb-4 tracking-tight">Sep 2021 – Oct 2023</p>
                      <p className="text-[15px] text-slate-600 leading-relaxed font-medium mb-5">
                        Worked on the development of interactive digital learning products and curriculum-aligned STEM resources for a large-scale online education platform, focusing on improving conceptual understanding and engagement in mathematics.
                      </p>
                      <ul className="space-y-3 text-[15px] text-slate-600">
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-3 flex-shrink-0"></span> Designed and developed 10,000+ curriculum-aligned STEM content items for K–12 mathematics, supporting structured learning pathways across digital learning environments.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-3 flex-shrink-0"></span> Built interactive concept simulations and visualization tools to help students understand complex mathematical topics through dynamic, exploratory learning experiences.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-3 flex-shrink-0"></span> Developed structured problem-solving modules and interactive practice systems that enabled students to engage with mathematical concepts through guided learning workflows.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-3 flex-shrink-0"></span> Collaborated with cross-functional teams including engineers, educators, and product managers to design and deploy educational features aligned with platform requirements and curriculum standards.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-3 flex-shrink-0"></span> Contributed to the development of scalable digital learning resources, ensuring content consistency, pedagogical clarity, and usability across the platform.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-3 flex-shrink-0"></span> Utilized student performance insights and learning analytics to refine content structure and improve instructional effectiveness.</li>
                        <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-2 mr-3 flex-shrink-0"></span> Participated in product iteration cycles, testing and improving digital learning tools based on educator feedback and learner engagement patterns.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="bento-card !p-6 group overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-slate-400 transition-colors duration-300"></div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 pl-4">
                <div className="w-full md:w-1/4 flex-shrink-0 md:border-r border-slate-200/60 pr-6">
                  <h3 className="font-bold text-slate-900 text-xl group-hover:text-slate-600 transition-colors">Chegg</h3>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-[0.1em] font-bold">India</p>
                </div>
                <div className="w-full md:w-3/4">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Mathematics Subject Matter Expert</h4>
                  <p className="text-[15px] text-slate-600 leading-relaxed font-medium mb-4">
                    Provided expert solutions and explanations for advanced mathematics problems used by global learners.
                  </p>
                  <ul className="space-y-3 text-[15px] text-slate-600">
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 flex-shrink-0"></span> Delivered high-accuracy mathematical solutions across multiple domains</li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 flex-shrink-0"></span> Created clear, structured explanations to improve learner comprehension</li>
                    <li className="flex items-start"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-3 flex-shrink-0"></span> Maintained high quality standards in academic content evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Writing & Talks */}
      <section id="insights" className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeInSection delay={100} className="h-full">
            <div className="bento-card h-full bg-gradient-to-br from-white/80 to-blue-50/40">
              <h2 className="text-xs flex items-center gap-4 font-semibold mb-8 tracking-[0.2em] uppercase text-slate-400">
                Writing <div className="h-[1px] bg-slate-200/70 flex-grow"></div>
              </h2>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">AI & Learning Systems</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">
                I write about the evolving intersection of artificial intelligence, education technology, and human learning.
              </p>
              <ul className="space-y-4 mb-10 text-[15px] text-slate-700 font-medium">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> AI-assisted learning</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Future of education technology</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Intelligent knowledge systems</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Human-AI collaboration in learning</li>
              </ul>
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7343927613368799232"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center w-full py-3.5 px-4 rounded-xl bg-white border border-slate-200/80 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                Read on LinkedIn
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={200} className="h-full">
            <div className="bento-card h-full relative overflow-hidden bg-gradient-to-bl from-white/80 to-slate-50/50">
              <div className="absolute top-0 right-0 p-32 bg-slate-100/50 rounded-bl-full -z-10"></div>
              <h2 className="text-xs flex items-center gap-4 font-semibold mb-8 tracking-[0.2em] uppercase text-slate-400">
                Talks <div className="h-[1px] bg-slate-200/70 flex-grow"></div>
              </h2>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 mb-6 shadow-sm">
                <BookOpen size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">
                AI Pathshala Sabke Liye
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px] mb-6">
                A webinar series exploring how artificial intelligence can empower different sections of society, including students, homemakers, entrepreneurs, and business leaders.
              </p>
              <div className="p-5 rounded-2xl bg-white/60 border border-slate-200/60 backdrop-blur-sm">
                <p className="text-slate-800 leading-relaxed text-[14px] font-medium">
                  The sessions focus on making AI accessible, practical, and understandable for everyday users.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="section-container pb-12 pt-16">
        <FadeInSection>
          <div className="bento-card !p-10 md:!p-16 flex flex-col items-center text-center max-w-4xl mx-auto mb-16 bg-gradient-to-b from-white to-blue-50/20 border-blue-100/30 relative overflow-hidden group/footer">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/50 to-indigo-400/50"></div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-serif italic text-balance">
              Let's build smarter <span className="text-blue-600 not-italic">learning systems.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-xl font-medium">
              I'm always interested in conversations around AI-driven education systems, learning technology, and intelligent content platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="mailto:ayug2098@gmail.com" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-600/10"
              >
                <Mail size={20} strokeWidth={2} />
                Get in touch
              </a>
              <a 
                href="https://calendly.com/ayushig2098/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-blue-200 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <ExternalLink size={20} strokeWidth={2} />
                Book a call
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
              <p className="text-sm font-bold text-slate-400 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Usually responds within 24 hours
              </p>
              <div className="hidden sm:block h-4 w-px bg-slate-200"></div>
              <a href="https://www.linkedin.com/in/ayushigconsistent/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110 flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                <Linkedin size={18} strokeWidth={1.5} />
                <span>LinkedIn</span>
              </a>
              <div className="hidden sm:block h-4 w-px bg-slate-200"></div>
              <a href="https://github.com/Ayushi2098" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110 flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                <Github size={18} strokeWidth={1.5} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400 px-6">
            <p>© {new Date().getFullYear()} Ayushi Goenka.</p>
            <p className="flex items-center gap-1.5">Built with <span className="text-blue-500 font-medium">React</span> & <span className="text-slate-500 font-medium">Tailwind</span></p>
          </div>
        </FadeInSection>
      </footer>
    </div>
  );
};

export default App;
