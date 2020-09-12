module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Grandstander', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#009eaf',
        primary: '#00e437',
        secondary: '#bad394',
      },
      height: {
        80: '20rem',
      },
      boxShadow: {
        xxg:
          '0 10px 15px -3px rgba(0, 0, 0,.3), 0 4px 6px -2px rgba(0, 0, 0,.3)',
      },
      borderWidth: {
        default: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
};
