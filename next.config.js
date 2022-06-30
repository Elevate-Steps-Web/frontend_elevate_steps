module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'fr', 'de', 'es', 'nl'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    trailingSlash: true,
  },
};
