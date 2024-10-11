/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	optimization: {
		minimizer: []
	}
};

module.exports = nextConfig;
