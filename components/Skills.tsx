import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Award } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skills: SkillCategory[];
  certificates: string[];
  title: string;
  certTitle: string;
}

const Skills: React.FC<SkillsProps> = ({ skills, certificates, title, certTitle }) => {
  return (
    <section id="skills" className="py-20 bg-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <Cpu className="text-primary w-8 h-8" />
             <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          </div>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-primary/5 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-gradient-to-b from-primary to-transparent rounded-full block"></span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:text-white hover:border-primary/50 hover:bg-slate-700 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
             <h3 className="text-2xl font-bold text-white mb-8 text-center">{certTitle}</h3>
             <div className="flex flex-col md:flex-row gap-6 justify-center">
                {certificates.map((cert, i) => (
                    <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 max-w-lg w-full">
                        <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500">
                             <Award size={24} />
                        </div>
                        <span className="text-slate-200 font-medium">{cert}</span>
                    </div>
                ))}
             </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;