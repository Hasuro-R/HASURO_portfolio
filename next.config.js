/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('node:path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
