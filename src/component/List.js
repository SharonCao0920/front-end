import React from 'react';
import '../style/sideList.css';

export const List = () => {
  // Define your styles as objects
  const sectionStyle = {
    padding: '20px', // Padding around the content
    borderRadius: '8px', // Rounded corners
    marginTop: '100px', // Space above the section
    marginBottom: '20px', // Space below the section
  };

  const headingStyle = {
    marginTop: '10px', // No space on top of the heading
    color: '#333', // Dark grey text for the heading
    marginBottom: '10px', // Space below the heading
  };

  const listStyle = {
    listStyleType: 'none', // Remove default list styling
    paddingLeft: '0', // Remove default padding
    left: '0', // Align list items flush with left side of section
  };

  const listItemStyle = {
    padding: '5px 0', // Space above and below each list item
    left: '0', // Align list items flush with left side of section
  };

  const linkStyle = {
    color: '#0066cc', // Link color
    textDecoration: 'none', // No underline on links
  };

  return (
    <section style={sectionStyle}>
      
      <h2 style={headingStyle}>Employer Forms</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/fw2.pdf" target="_blank" rel="noopener noreferrer">Form W-2</a></li>
        <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/f940.pdf" target="_blank" rel="noopener noreferrer">Forms 940</a></li>
        <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/f941.pdf" target="_blank" rel="noopener noreferrer">Form 941</a></li>
        <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/f944.pdf" target="_blank" rel="noopener noreferrer">Form 944</a></li>
        <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/f1095c.pdf" target="_blank" rel="noopener noreferrer">Form 1095-C</a></li>
        <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/fw3.pdf" target="_blank" rel="noopener noreferrer">Form W-3</a></li>
      </ul>

        <h2 style={headingStyle}>Employee Forms</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/fw4.pdf" target="_blank" rel="noopener noreferrer">W-4</a></li>
          <li style={listItemStyle}><a style={linkStyle} href="https://www.irs.gov/pub/irs-pdf/f1099msc.pdf" target="_blank" rel="noopener noreferrer">1099-MISC</a></li>
        </ul>

    </section>
  );
};

