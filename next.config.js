module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000'],
  },
  publicRuntimeConfig: {
    API: process.env.BASE_API,
    ENV: process.env.BASE_ENV,
    HOST: process.env.BASE_HOST,
    API_CLIENT_ID: process.env.BASE_API_CLIENT_ID,
  },
}
