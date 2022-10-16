module.exports = {
  reactStrictMode: true,
  env: {
    URL: process.env.URL,
  },
  images: {
    loader: 'default',
    domains: ['localhost', 'res.cloudinary.com'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    trailingSlash: true,
  },
};
