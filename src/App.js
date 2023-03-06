import { Breadcrumb, Layout, theme} from 'antd';
import "./App.css";
import Before from './components/Before';
import Next from './Next';
import React,{useState} from 'react';
const { Header, Content} = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isShown, setIsShown] = useState("0");
  return (
    <Layout className="layout">
      <Header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <a href="#" class=" text-white px-4 py-4 text-xl font-medium" aria-current="page">HOME</a>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content mb-100 rounded border-8 border-indigo-500/100"
          style={{
            background: colorBgContainer,
          }}
        >{isShown==="1" && <Next/>}
        {isShown==="0"&&<Before/>}
         {isShown==="0"&&<button onClick={()=>setIsShown("1")} className='but underline hover:bg-indigo-500 hover:text-white hover:rounded'>Начать</button>}
        </div>
      </Content>
  
      <footer className='bg-indigo-800 h-64 text-white text-xl font-medium mt-48 text-center'>
        <div className='mt-8'>Arg ©2023 Created by me</div><br/>
      </footer>
    </Layout>
  );
};
export default App;