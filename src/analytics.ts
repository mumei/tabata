type AnalyticsParameter = string | number | boolean

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      parameters?: Record<string, AnalyticsParameter>,
    ) => void
  }
}

export const trackEvent = (
  eventName: string,
  parameters: Record<string, AnalyticsParameter> = {},
) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, parameters)
}
