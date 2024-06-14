/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'www.google.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*', // APIのパスパターン
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' }, // クレデンシャルの送信を許可
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:8000' }, // 特定のオリジンからのアクセスを許可
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST' }, // 許可するHTTPメソッド
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' }, // 許可するカスタムヘッダー
        ],
      }
    ]
  }
}

export default nextConfig