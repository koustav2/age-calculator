/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    backgroundColor: {
      'p1': 'hsl(259, 100%, 65%)',
      'p2': 'hsl(0, 100%, 67%)',
      'g1': 'hsl(0, 0%, 86%)',
      'g2': 'hsl(0, 1%, 44%)',
      'b1': 'hsl(0, 0%, 8%)',
      'w1': 'hsl(0, 0%, 100%)',
      'w2': 'hsl(0, 0%, 94%)',
    },
    textColor: {
      'p1': 'hsl(259, 100%, 65%)',
      'p2': 'hsl(0, 100%, 67%)',
      'g1': 'hsl(0, 0%, 86%)',
      'g2': 'hsl(0, 1%, 44%)',
      'b1': 'hsl(0, 0%, 8%)',
      'w1': 'hsl(0, 0%, 100%)',
      'w2': 'hsl(0, 0%, 94%)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
