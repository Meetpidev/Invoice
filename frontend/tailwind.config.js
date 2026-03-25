/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary, #4F46E5)',
                'primary-dark': 'var(--primary-dark, #3730A3)',
                'primary-light': 'var(--primary-light, #EEF2FF)',
                ring: 'var(--primary-ring, #A5B4FC)',
                accent: 'var(--accent, #7C3AED)',
                dark: '#111827',
                light: '#F3F4F6',
            }
        },
    },
    plugins: [],
}
