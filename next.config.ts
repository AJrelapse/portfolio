import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.svgporn.com",
      "ui.shadcn.com",
      "huggingface.co",
      "avatars.githubusercontent.com",
      "cdn-icons-png.flaticon.com",
      "raw.githubusercontent.com",
      "images.unsplash.com",   // 👈 ADD THIS
    ],
  },
};

module.exports = nextConfig;
