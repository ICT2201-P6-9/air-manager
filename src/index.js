import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import LoginCheck from "./components/Login/LoginCheck";
import PageBanner from './components/Home/PageBanner';
import reportWebVitals from './reportWebVitals';
import {Layout} from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));

const {Header} = Layout;

root.render(
  <React.StrictMode>
    <Layout>
      <Header>
      </Header>
      <LoginCheck login_status={1}/>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
