import React, { useState } from 'react';
    import './App.css';
    import Home from './components/Home';
    import About from './components/About';
    import Education from './components/Education';
    import Library from './components/Library';
    import Syllabus from './components/Syllabus';
    import Tools from './components/Tools';
    import Engineering from './components/Engineering';
    import Exam from './components/Exam';

    function App() {
      const [isSidebarVisible, setIsSidebarVisible] = useState(true);
      const [activeComponent, setActiveComponent] = useState('home');

      const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };

      const handleNavigation = (component) => {
        setActiveComponent(component);
      };

      return (
        <div className="app-container">
          <button className="hide-button" onClick={toggleSidebar}>
            {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
          </button>
          <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
            <h2>Sidebar</h2>
            <ul>
              <li
                className={activeComponent === 'home' ? 'active' : ''}
                onClick={() => handleNavigation('home')}
              >
                Home
              </li>
              <li
                className={activeComponent === 'about' ? 'active' : ''}
                onClick={() => handleNavigation('about')}
              >
                About
              </li>
              <li
                className={activeComponent === 'education' ? 'active' : ''}
                onClick={() => handleNavigation('education')}
              >
                Education
              </li>
              <li
                className={activeComponent === 'library' ? 'active' : ''}
                onClick={() => handleNavigation('library')}
              >
                Library
              </li>
              <li
                className={activeComponent === 'syllabus' ? 'active' : ''}
                onClick={() => handleNavigation('syllabus')}
              >
                Syllabus
              </li>
               <li
                className={activeComponent === 'tools' ? 'active' : ''}
                onClick={() => handleNavigation('tools')}
              >
                Tools
              </li>
               <li
                className={activeComponent === 'engineering' ? 'active' : ''}
                onClick={() => handleNavigation('engineering')}
              >
                Engineering
              </li>
              <li
                className={activeComponent === 'exam' ? 'active' : ''}
                onClick={() => handleNavigation('exam')}
              >
                Exam
              </li>
            </ul>
          </div>
          <div className="content">
            {activeComponent === 'home' && <Home />}
            {activeComponent === 'about' && <About />}
            {activeComponent === 'education' && <Education />}
            {activeComponent === 'library' && <Library />}
            {activeComponent === 'syllabus' && <Syllabus />}
             {activeComponent === 'tools' && <Tools />}
             {activeComponent === 'engineering' && <Engineering />}
             {activeComponent === 'exam' && <Exam />}
          </div>
        </div>
      );
    }

    export default App;
