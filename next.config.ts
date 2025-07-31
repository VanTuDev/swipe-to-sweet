const nextConfig = {
  // experimental: {
  //   allowedDevOrigins: [
  //     "http://localhost:3000",
  //     "http://192.168.0.3:3000",
  //     "http://172.24.64.1:3000",
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
