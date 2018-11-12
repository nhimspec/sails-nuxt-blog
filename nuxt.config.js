module.exports = {
  dev: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  srcDir: 'client/',
  /*
   ** Headers of the page
   */
  head: {
    title: 'sample-project',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
};
