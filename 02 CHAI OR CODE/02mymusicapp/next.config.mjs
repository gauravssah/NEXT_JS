// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// --------for using image domains ------------------

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['static.vecteezy.com', 'images.unsplash.com', 'res.cloudinary.com'],
    },
};

export default nextConfig;

