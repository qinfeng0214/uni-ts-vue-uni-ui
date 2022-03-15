/*
 * @Author: yuanfutong
 * @Date: 2022-03-14 11:35:46
 * @LastEditTime: 2022-03-15 11:37:47
 * @LastEditors: yuanfutong
 * @Description:
 * @FilePath: \uni-vue3-ts-template\vite.config.ts
 *
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import viteCompression from 'vite-plugin-compression'

const dev = ''

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  transpileDependencies: ['@dcloudio/uni-ui'],
  plugins: [
    uni(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/assets/styles/global.scss";',
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: dev,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    outDir: 'dist',
    //生成静态资源的存放路径
    assetsDir: 'assets',
    minify: 'terser',
    //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 4096,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
