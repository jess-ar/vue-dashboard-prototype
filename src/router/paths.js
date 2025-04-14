export const ROUTES = {
  // Authentication routes
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',

  // Private routes / dashboard
  HOME: '/home',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  EDIT: '/edit',
  CALENDAR: '/calendar',
  SETTINGS: '/settings',
  EXIT: '/exit',

  // === Audience Steps ===
  AUDIENCE_INDEX: '/campaign/audience',
  AUDIENCE_CHANNEL: '/campaign/audience/channel',
  AUDIENCE_FILTERS: '/campaign/audience/filters',
  AUDIENCE_SUMMARY: '/campaign/audience/summary',

  // === Visuals ===
  VISUALS_INDEX: '/campaign/visuals',

  // === Scheduling ===
  SCHEDULING_INDEX: '/campaign/scheduling',

  // === Validation ===
  VALIDATION_INDEX: '/campaign/validation',

  // === Confirmation ===
  CONFIRMATION_INDEX: '/campaign/confirmation',
}
