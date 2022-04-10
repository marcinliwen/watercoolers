module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors:{
        'blue': '#0069AA',
      },
    },
    container:{
        maxWidth: {
          xl:'1024px',
        },
        maxWidth: {
          xxl: '1024px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
        }
      })
    }
  ],
}
