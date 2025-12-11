import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { PersonalInfo } from '../types';

interface ContactProps {
  info: PersonalInfo;
  title: string;
}

const Contact: React.FC<ContactProps> = ({ info, title }) => {
  return (
    <footer id="contact" className="bg-dark pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-slate-800 hover:border-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <Phone size={20} />
                    </div>
                    <span className="text-slate-300 font-medium">{info.phone}</span>
                </div>

                <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-slate-800 hover:border-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                    </div>
                    <a href={`mailto:${info.email}`} className="text-slate-300 font-medium hover:text-white">{info.email}</a>
                </div>

                <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-slate-800 hover:border-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <MapPin size={20} />
                    </div>
                    <span className="text-slate-300 font-medium text-center">{info.address}</span>
                </div>
            </div>

            <div className="flex justify-center gap-6">
                <a href={info.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <Github size={24} />
                </a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                    <Linkedin size={24} />
                </a>
            </div>
        </motion.div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-sm">
            <p>© {new Date().getFullYear()} Nguyen Quang Long. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;