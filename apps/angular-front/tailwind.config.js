const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const flowbiteAngularTailwindConfig = require('flowbite-angular/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [flowbiteAngularTailwindConfig],
  content: [
    join(__dirname, '../../node_modules/flowbite-angular/**/*.{html,ts,mjs}'),
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,md}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
