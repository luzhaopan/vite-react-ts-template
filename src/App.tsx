
import { Suspense } from 'react'
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
// import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import Loading from '@/components/Loading'
import RenderRouter from '@/router'

import './App.less'
// HashRouter和BrowserRouter决定了路由模式分别是hash模式和history模式，并且这两个组件是路由的容器，必须放在最外层。
function App() {
  // const getAntdLocale = () => {
  //   if (locale.toLowerCase() === "en-us") {
  //     return enUS;
  //   } else if (locale.toLowerCase() === "zh-cn") {
  //     return zhCN;
  //   }
  // };
  return (
    <ConfigProvider locale={zhCN} componentSize="middle">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </Suspense>
    </ConfigProvider>
  )
}

export default App
