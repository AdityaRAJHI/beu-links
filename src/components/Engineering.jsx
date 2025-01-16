import React, { useState } from 'react';
    import './Engineering.css';

    function Engineering() {
      const [activeField, setActiveField] = useState(null);

      const handleFieldClick = (field) => {
        setActiveField(field);
      };

      return (
        <div className="engineering-container">
          <h1>Engineering</h1>
          <p>Choose your field of interest:</p>
          <ul className="engineering-fields">
            <li
              className={activeField === 'mechanical' ? 'active' : ''}
              onClick={() => handleFieldClick('mechanical')}
            >
              Mechanical Engineering
            </li>
            <li
              className={activeField === 'electrical' ? 'active' : ''}
              onClick={() => handleFieldClick('electrical')}
            >
              Electrical Engineering
            </li>
            <li
              className={activeField === 'cse' ? 'active' : ''}
              onClick={() => handleFieldClick('cse')}
            >
              Computer Science Engineering
            </li>
            <li
              className={activeField === 'civil' ? 'active' : ''}
              onClick={() => handleFieldClick('civil')}
            >
              Civil Engineering
            </li>
          </ul>
        </div>
      );
    }

    export default Engineering;
