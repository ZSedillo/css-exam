import React from 'react';

const footerStyle = {
  backgroundColor: '#007bff', // Blue background like the image
  color: 'white',
  padding: '40px 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
  flexWrap: 'wrap', // Allows wrapping on smaller screens
};

const logoStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '20px', // Adds space for mobile
};

const textStyle = {
  color: 'white',
  marginTop: '5px',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#F0F0F0',
  color: '#333',
  padding: '8px 12px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '14px',
  marginTop: '10px',
};

const linksStyle = {
  display: 'flex',
  paddingLeft:'',
  flexDirection: 'column',
  fontSize: '14px',
  marginBottom: '20px', // Adds space for mobile
};

const socialStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  fontSize: '14px',
  marginBottom: '20px', // Adds space for mobile
};

// Adding media query styles for responsiveness
const mediaQueryStyles = {
  '@media (max-width: 768px)': {
    footerStyle: {
      flexDirection: 'column', // Stack elements vertically on smaller screens
      textAlign: 'center', // Center content for mobile
      padding: '20px',
    },
    logoStyle: {
      alignItems: 'center',
    },
    socialStyle: {
      textAlign: 'center',
    },
  },
};

const Footer = () => {
  return (
    <footer style={{ ...footerStyle, ...mediaQueryStyles.footerStyle }}>
      <div style={{ ...logoStyle, ...mediaQueryStyles.logoStyle }}>
        <h2 style={{ fontSize: '28px', margin: 0 }}>Courses</h2>
        <p style={{ fontSize: '18px', margin: '5px 0' }}>CSS Headliner</p>
        <button style={buttonStyle}>
          Passionately designed & developed by CSS
        </button>
      </div>

      <div style={linksStyle}>
        <h4 style={{ margin: 0 }}>UST Computer Science Society</h4>
        <p>About Us</p>
        <p>Community</p>
        <p>News & Events</p>
      </div>

      <div style={{ ...socialStyle, ...mediaQueryStyles.socialStyle }}>
        <p>☑ Email</p>
        <p>☑ Facebook</p>
        <p>☑ Twitter</p>
        <p>☑ Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
