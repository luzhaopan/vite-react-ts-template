import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 配置前端服务地址和端口
  server: {
    host: '0.0.0.0', //自定义主机名
    port: 8080, // 自定义端口
    open: true, // 自动在浏览器打开
    https: false, // 是否开启 https
    // 设置反向代理，跨域
    proxy: {
      '/api': {
        // 后台地址
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
