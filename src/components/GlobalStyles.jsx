import React from 'react';

const GlobalStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400;700&family=Courier+Prime&display=swap');
    `}} />
  );
};

export default GlobalStyles;
