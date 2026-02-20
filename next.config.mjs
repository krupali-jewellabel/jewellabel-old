/** @type {import('next').NextConfig} */
const nextConfig = {
    headers() {
      return [
        {
          source: "/videos/:video*",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  