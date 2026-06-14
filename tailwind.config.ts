import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        raptor: {
          orange:     '#FF8C00',
          purple:     '#5B2C9F',
          darkpurple: '#3D1A5C',
          blue:       '#2563EB',
          lightblue:  '#60A5FA',
        },
      },
      backgroundImage: {
        'raptor-gradient':      'linear-gradient(135deg, #3D1A5C 0%, #5B2C9F 40%, #2563EB 100%)',
        'raptor-gradient-hero': 'linear-gradient(135deg, #1a0a2e 0%, #3D1A5C 35%, #5B2C9F 65%, #2563EB 100%)',
        'raptor-card':          'linear-gradient(135deg, #1e0a3c 0%, #2d1257 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
