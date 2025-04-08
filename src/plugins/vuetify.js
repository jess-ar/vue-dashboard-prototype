/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#EFF4F8',
          primary: '#FEFEFE',
          surface: '#DFEFF9',
          secondary: '#529BC5',
          terciary: '#424242',
          textColor: '#5F5F5F',
          textAccent:'#529BC5',
          accent: '#F59E0B',
          error: '#F87171',
          info: '#60A5FA',
          success: '#10B981',
          warning: '#F59E0B',

        },
      },
      dark: {
        colors: {
          background: '#274163',
          primary: '#1D3351',
          surface: '#0F2942',
          secondary: '#105B93',
          terciary: '#0F2942',
          textColor: '#C7CEDA',
          textAccent:'#105B93',
          accent: '#F59E0B',
          error: '#F87171',
          info: '#60A5FA',
          success: '#10B981',
          warning: '#F59E0B',
        },
      },
    },
  },
})
