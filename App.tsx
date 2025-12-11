import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { translations, personalInfo, experienceData, educationData, skillsData, projectsData, certificates } from './data';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="bg-dark min-h-screen text-slate-200 selection:bg-primary/30 selection:text-white">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        t={t.nav} 
      />
      
      <main>
        <Hero 
          t={t.hero} 
          info={personalInfo} 
        />
        
        <Experience 
          titleExp={t.sectionTitles.experience}
          titleEdu={t.sectionTitles.education}
          expData={experienceData[language]}
          eduData={educationData}
        />
        
        <Skills 
          title={t.sectionTitles.skills}
          certTitle={t.sectionTitles.certificates}
          skills={skillsData}
          certificates={certificates}
        />
        
        <Projects 
          title={t.sectionTitles.projects}
          projects={projectsData[language]}
          commonT={t.common}
        />
      </main>

      <Contact 
        info={personalInfo}
        title={t.sectionTitles.contact}
      />
    </div>
  );
}

export default App;