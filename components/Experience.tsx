import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { ExperienceItem, EducationItem } from '../types';

interface ExperienceProps {
  expData: ExperienceItem[];
  eduData: EducationItem[];
  titleExp: string;
  titleEdu: string;
}

const Experience: React.FC<ExperienceProps> = ({ expData, eduData, titleExp, titleEdu }) => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
            <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary w-8 h-8" />
                <h2 className="text-3xl font-bold text-white">{titleEdu}</h2>
            </div>
            
            <div className="bg-card border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors relative overflow-hidden group">
                {eduData.map((edu, idx) => (
                    <div key={idx} className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                            <span className="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                {edu.period}
                            </span>
                        </div>
                        <h4 className="text-lg text-slate-300 font-medium mb-2">{edu.degree}</h4>
                        <p className="text-slate-400">{edu.details}</p>
                    </div>
                ))}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all" />
            </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
            <div className="flex items-center gap-3 mb-12">
                <Briefcase className="text-secondary w-8 h-8" />
                <h2 className="text-3xl font-bold text-white">{titleExp}</h2>
            </div>

            <div className="space-y-12 border-l-2 border-slate-800 ml-3 md:ml-6">
                {expData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-secondary group-hover:bg-secondary transition-colors" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                                {item.company}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-400 text-sm mt-1 sm:mt-0">
                                <Calendar size={14} />
                                <span>{item.period}</span>
                            </div>
                        </div>
                        
                        <h4 className="text-lg text-primary font-medium mb-4">{item.role}</h4>
                        
                        <ul className="space-y-2">
                            {item.description.map((desc, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle2 size={18} className="text-slate-500 mt-1 flex-shrink-0" />
                                    <span className="leading-relaxed">{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;