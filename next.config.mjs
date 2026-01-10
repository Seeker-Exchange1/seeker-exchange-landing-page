const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "v0.app",
        "*.vusercontent.net",
        "localhost:3000",
      ],
    },
  },
}

export default nextConfig
