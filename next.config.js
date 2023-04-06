/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.pixabay.com', 'upload.wikimedia.org'],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
