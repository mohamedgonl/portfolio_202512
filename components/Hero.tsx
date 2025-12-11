import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Translation, PersonalInfo } from '../types';

interface HeroProps {
  t: Translation['hero'];
  info: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ t, info }) => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="text-primary font-medium tracking-wide text-lg mb-4 block">
              {t.greeting}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {info.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-semibold">
              {t.role}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8 mx-auto md:mx-0">
              {t.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="#contact"
                className="px-8 py-3 bg-primary hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20"
              >
                {t.cta} <ArrowRight size={20} />
              </a>
              <a
                  href="/2025_03cv.pdf"
                  download="CV_NguyenQuangLong.pdf"
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all border border-slate-700 hover:border-slate-600"
              >
                Download CV <Download size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden bg-slate-800">
                {/* Placeholder for Profile Image */}
                <img 
                  src="/avatar.png"
                  alt="Nguyen Quang Long" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;