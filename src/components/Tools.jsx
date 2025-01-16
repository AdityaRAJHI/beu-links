import React from 'react';
    import './Tools.css';

    function Tools() {
      return (
        <div className="tools-container">
          <h1>Tools</h1>
          <p>This is the tools page.</p>
          <div className="pdf-merge-tool">
            <h2>PDF Merge Tool</h2>
            <p>
              Due to the limitations of this environment, we cannot directly merge PDF files here.
              Please use a third-party online tool to merge your PDF files.
            </p>
            <p>
              Here are some recommended online PDF merge tools:
              <ul>
                <li>
                  <a href="https://www.ilovepdf.com/merge_pdf" target="_blank" rel="noopener noreferrer">
                    iLovePDF
                  </a>
                </li>
                <li>
                  <a href="https://smallpdf.com/merge-pdf" target="_blank" rel="noopener noreferrer">
                    Smallpdf
                  </a>
                </li>
                <li>
                   <a href="https://www.adobe.com/acrobat/online/merge-pdf.html" target="_blank" rel="noopener noreferrer">
                    Adobe Acrobat Online
                  </a>
                </li>
              </ul>
            </p>
            <p>
              Simply upload your PDF files to one of these tools, merge them, and download the merged PDF.
            </p>
          </div>
        </div>
      );
    }

    export default Tools;
