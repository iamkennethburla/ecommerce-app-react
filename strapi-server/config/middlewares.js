module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: [
        'http://localhost:1337',
        'http://localhost:4200',
        'http://127.0.0.1:4200',
        'http://localhost:4201',
        'http://127.0.0.1:4201',
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]
