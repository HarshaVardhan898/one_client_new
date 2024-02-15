/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  mode: 'jit',
  theme: {
    placeholderColor: {
      'customGray': '#cbd5e1'
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {

      colors: {
        'invalid-field-border-color': '#E54335',
        'field-outline': '#D1D5DB',
        'on-selection-field-outline': '#0F2830',
        'primary-button': '#0F2830',
        'primary-button-hover': '#02161D',
        'primary-button-text': '#FFFFFF',
        'secondary-button': '#FFFFFF',
        'secondary-button-text': '#0F2830',
        'secondary-button-hover': '#F4F2F2',
        'button-border': '#D1D5DB',
        'secondary-button-onclick-border': '#0F2830',
        'error-text-color': '#E54335',
        'table-list-border': '#E5E7EB',
        'table-head-background': '#F7F7F7',
        'table-head-text': '#6B7280',
        'table-data-text': '#6B7280',
        'table-background': '#F6F6F6',
        'table-text-color': '#6B7280',
        'projects': ' #0F2830'
      },
      lineheight: {
        'table-head': '2.3rem',
        'table-data': '1.25rem',
        'P-button': '1.25rem'
      },
      width: {
        'input': '100%',
      },
      height: {
        'tableheader': '2.5rem',
        'tablebody': '2.25rem',
        'tabledata': '2.25rem',
        'primarybuttonheight': '2.375rem',
        'secondarybuttonheight': '2.375rem',
        'inputheight': '2.375rem',
      },
      fontSize: {
        'tableheader': '0.75rem',
        'tabledata': '0.875rem',
        'P-button': '0.875rem',

      },

      fontFamily: {
        'tableheader': 'Inter',
        'tabledata': 'Inter',
        'P-button': 'Inter',
        'label': 'Inter',


      },
      fontWeight: {
        'tabledata': '500',
        'P-button': '500',
        'inputfield': '500',

      },


      whitespace: {
        'tableheader': 'nowrap',
        'tabledata': 'nowrap'

      },
      spacing: {
        'primarybuttonheight': '2.375rem'
      },
      borderWidth: {
        'tablehead': '1px',
        'tabledata': '1px'

      },
      hover: {
        'primarybuttonhover': '#02161D',
      }
    },



  },
  plugins: [

  ],

}