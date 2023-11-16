
// import { Suspense } from 'react'
// import { RouterProvider } from 'react-router-dom';
// import Loading from '@/components/Loading'
import RenderRouter from '@/router'
import { ConfigProvider } from "antd";
// import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import { BrowserRouter } from "react-router-dom";
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
    // <Suspense fallback={<Loading />}>
    //   <RouterProvider router={router}></RouterProvider>
    // </Suspense>
    <ConfigProvider locale={zhCN} componentSize="middle">
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
