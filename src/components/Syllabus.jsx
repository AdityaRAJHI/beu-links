import React from 'react';
    import './Syllabus.css';

    function Syllabus() {
      return (
        <div className="syllabus-container">
          <h1>Syllabus</h1>
           <p>
            Click the links below to view the syllabus for various universities.
          </p>
          <a
            href="https://beubiharsyllabus.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BEU University Syllabus
          </a>
          <br/>
           <a
            href="https://www.akubihar.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AKU University Syllabus
          </a>
          <br/>
           <a
            href="https://ppup.ac.in/ug-syllabus"
            target="_blank"
            rel="noopener noreferrer"
          >
            PPU University Syllabus
          </a>
           <br/>
           <a
            href="https://www.cusb.ac.in/index.php?option=com_content&view=article&id=119&Itemid=190"
            target="_blank"
            rel="noopener noreferrer"
          >
            CUSB University Syllabus
          </a>
           <br/>
           <a
            href="https://cuet.nta.nic.in/syllabus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CUET Syllabus
          </a>
           <br/>
           <a
            href="https://www.gdcollegerajgir.org.in/academics/syllabus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GDC Rajgir Syllabus
          </a>
          <div className="note-section">
            <p>
              <b>Note:</b> These links will take you to external websites. Please verify the information
              provided on the external sites.
            </p>
          </div>
        </div>
      );
    }

    export default Syllabus;
