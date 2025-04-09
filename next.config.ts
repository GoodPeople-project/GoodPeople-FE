import { NextConfig } from 'next';

// next.config.js
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  webpack(config) {
    // 기존 svg 로더 가져오기
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => any } }) => rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // *.svg?url => 원래대로 처리
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // *.svg => React 컴포넌트로 변환
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
    );

    // 기본 파일 로더에서 svg 제외
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // 필요한 경우 추가 설정
};

module.exports = withVanillaExtract(nextConfig);
