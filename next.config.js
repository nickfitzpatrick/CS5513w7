/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	optimization: {
		minimizer: []
	},
	productionBrowserSourceMaps: true
};

module.exports = nextConfig;
