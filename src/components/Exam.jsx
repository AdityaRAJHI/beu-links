import React from 'react';
    import './Exam.css';

    function Exam() {
      return (
        <div className="exam-container">
          <h1>Exam</h1>
          <p>Here are some useful links for exam preparation:</p>
          <div className="exam-links">
            <h2>Official Government Websites</h2>
            <ul>
              <li>
                <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer">
                  Union Public Service Commission (UPSC)
                </a>
                - For Central Government jobs like IAS, IPS, IFS, etc.
              </li>
              <li>
                <a href="https://ssc.nic.in/" target="_blank" rel="noopener noreferrer">
                  Staff Selection Commission (SSC)
                </a>
                - For various posts in Central Government departments.
              </li>
              <li>
                <a href="https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281" target="_blank" rel="noopener noreferrer">
                  Railway Recruitment Boards (RRBs)
                </a>
                - For jobs in Indian Railways.
              </li>
              <li>
                <a href="https://www.jpsc.gov.in/" target="_blank" rel="noopener noreferrer">
                  Jharkhand Public Service Commission (JPSC)
                </a>
                 - Example of a State Public Service Commission (SPSC). Each state has its own SPSC for state-level government jobs.
              </li>
              <li>
                Many ministries and departments have their own recruitment sections on their official websites.
              </li>
            </ul>
            <h2>Job Portals</h2>
            <ul>
              <li>
                <a href="https://sarkarinaukri.com/" target="_blank" rel="noopener noreferrer">
                  Sarkari Naukri
                </a>
              </li>
              <li>
                <a href="https://www.rojgarsamachar.gov.in/NewRS/Home.aspx" target="_blank" rel="noopener noreferrer">
                  Rojgar Samachar
                </a>
              </li>
               <li>
                <a href="https://www.freshersworld.com/" target="_blank" rel="noopener noreferrer">
                  Freshersworld
                </a>
              </li>
            </ul>
          </div>
          <div className="note-section">
            <p>
              <b>Note:</b> These links will take you to external websites. Please verify the information
              provided on the external sites.
            </p>
          </div>
        </div>
      );
    }

    export default Exam;
