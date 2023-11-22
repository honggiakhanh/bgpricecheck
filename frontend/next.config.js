/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'en.lautapelit.fi',
                port: '',
                pathname: '/tuotekuvat/**'
            },
            {
                protocol: 'https',
                hostname: 'z1.adlibris.com',
                port: '',
                pathname: '/35/**'
            },{
                protocol: 'https',
                hostname: 'z2.adlibris.com',
                port: '',
                pathname: '/35/**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.verk.net',
                port: '',
                pathname: '/kuvastin/**'
            },
            {
                protocol: 'https',
                hostname: 'www.puolenkuunpelit.com',
                port: '',
                pathname: '/kauppa/**'
            },
        ]
    }
}

module.exports = nextConfig
