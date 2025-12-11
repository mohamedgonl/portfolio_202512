import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Code2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  projects: ProjectItem[];
  title: string;
  commonT: {
    techStack: string;
    viewProject: string;
  };
}

const Projects: React.FC<ProjectsProps> = ({ projects, title, commonT }) => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <Code2 className="text-secondary w-8 h-8" />
             <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          </div>
          <div className="h-1 w-20 bg-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-slate-800 overflow-hidden hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/10 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 text-secondary group-hover:text-white group-hover:bg-secondary transition-colors">
                        <FolderGit2 size={24} />
                    </div>
                    <div className="flex gap-3">
                         <a href={project.url} className="text-slate-400 hover:text-white transition-colors" title="View Code">
                            <Github size={20} />
                         </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="p-6 bg-slate-900/50 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {commonT.techStack}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;