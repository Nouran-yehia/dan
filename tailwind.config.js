/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        lightGrey: '#F0F0F0',
        lightOrange: '#F97A00',
        midOrange1: '#EA820A',
        midOrange2: '#E88225',
        orangeBtn: '#E55A52',
        darkOrange1: '#E98108',
        darkOrange2: '#D15E00',
        OrangeBrown: '#C36500',
        Brown:'#5A2910',
        DarkBrown: '#54290E',
        lightBlue: '#0095D9',
        midBlue: '#1A92D3',
        darkBlue: '#408FCF',
        lightGreen: '#7EBD85',
        midGreen: '#64C07D',
        darkGreen:'#7BBE83',


      },
      backgroundSize: {
        'size-main':'100% 100vh',
      },
      backgroundImage: {
        'main_img': "url('/images/Image 27@2x.png')",
        'mainMask': "url('/images/Mask Group 72.png')",
        'about': "url('/images/Mask Group 69@2x-1.png')"
      },
      height:{
        '151px':'151px !important',
        '31px':'31px !important',
        '60vh':'60vh'
      },
      width:{
        '219px':'219px',
        '46px':'46px',
        '84%':'84%',
        '20px':'20px',
        '15%':'15%',
        '40%':'40%',
        '60%':'60%',
        '70px':'70px'
      },
      inset: {
        '-6%': '-6%',
        'top': '75vh'
      },
      fontFamily: {
        readex_reg: ["Readex-regular"],
        readex_med: ["Readex-medium"],
        readex_bold: ["Readex-bold"]
      },
      fontSize: {
        '26px': '26px',
        '14px':'14px',
        '17px':'17px',
      },
      margin: {
        '12%': '12%',
      }
    }
  },
  plugins: [],
}
