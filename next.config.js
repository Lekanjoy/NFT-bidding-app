/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.externals.push('pino-pretty', 'lokijs', 'encoding')
        return config
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "i.seadn.io",
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "storage.googleapis.com",
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "raw.seadn.io",
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "openseauserdata.com",
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "nft-cdn.alchemy.com",
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "ipfs.io",
            port: '',
            pathname: '/**',
          },
        ],
      },
    
        
    
}

module.exports = nextConfig
