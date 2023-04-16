/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '320px',

      'sm-plus': '640px',
      // => @media (min-width: 640px) { ... }
      'md':'768px',
      'md-plus': '864px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg-plus': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container:{
      center: true,
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      height: {
        '115': '115vh',
      },
      backgroundImage: {
        'linear-background': "url('./public/images/Rectangle7.svg')",
        'about-background': "url('./public/images/AboutSection.svg')",
        'about-card-background': "url('./public/images/Rectangle18.svg')",
        'blog-background': "url('./public/images/BlogSectionbg.svg')",
        'footer-background': "url('./public/images/Footer.svg')",
      },
      colors: {
        'site-border' : '#23674F',
        'site-paragraph': '#E5E6E5',
        'site-text': '#E9FFF7',
        'site-light-green' :'#35CF62',
        'site-dark-green' : '#02291B',
        'site-stroke-green' : '#15C586',
        'site-linear-green-from' :'#24C68C',
        'site-linear-green-to' : '#000000',
      },
    },
  },
  plugins: [],
}

