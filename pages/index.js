import * as React from 'react';
import stylesheet from 'antd/dist/antd.min.css'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider, Header } = Layout;

import _Header from './components/header';
import _Footer from './components/footer';
export default class App extends React.Component {
  render() {
    return <Layout>
      <Header>
        <title>Wizard Amigo Taipei</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx global>{`
          #components-layout-demo-top-side-2 .logo {
            width: 120px;
            height: 31px;
            background: #333;
            border-radius: 6px;
            margin: 16px 28px 16px 0;
            float: left;
          }
        `}</style>
        <_Header/>
      </Header>
      
      <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        Content
      </Content>
      <_Footer/>
    </Layout>
  }
}