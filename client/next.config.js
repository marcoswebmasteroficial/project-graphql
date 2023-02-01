// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
module.exports = withPWA()

const Pwa = {
  pwa: {
    dest: 'public',
    fallbacks: {
      image: '/static/images/fallback.png'
    }
  }
}

const settings = {
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true
    }
  }
}

module.exports =
  process.env.NODE_ENV === 'development' ? settings : withPWA(settings, ...Pwa)
