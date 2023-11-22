/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 解决tailwindcss和antd样式冲突的问题
  },
}