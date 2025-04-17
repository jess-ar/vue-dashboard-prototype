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
          background: '#F0F5F9',
          primary: '#FFFFFF',
          surface: '#DFEFF9',
          secondary: '#529BC5',
          terciary: '#424242',
          textColor: '#5F5F5F',
          textAccent:'#0085DB',
          activeBackground: '#0085DB1F',
          cardColor: '#FFFFFF',
          textCard: '#707A82',
          graphPrimary: '#5A9ECF',
          accent: '#F3BF41',
          error: '#F87171',
          button2: '#60A5FA',
          success: '#10B981',
          warning: '#F59E0B',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.04)',

        },
      },
      dark: {
        colors: {
          background: '#16293E',
          primary: '#111C2D',
          surface: '#0F2942',
          secondary: '#105B93',
          terciary: '#0F2942',
          textColor: '#C7CEDA',
          textAccent:'#0085DB',
          activeBackground: '#0085DB1F',
          cardColor: '#111C2D',
          textCard: '#7C8FAC',
          graphPrimary: '#90CAF9',
          accent: '#F3BF41',
          error: '#F87171',
          button2: '#60A5FA',
          success: '#10B981',
          warning: '#F59E0B',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
})
