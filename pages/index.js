import {Layout} from "antd";
import NextHead from 'next/head';
import Head from './components/Head';
import Foot from './components/Foot';
import Sider from './components/Sider';
import Content from './components/Content';
import Container from './components/Container';
const IndexPage = () => (
  <Container title={'wizardAmigoTaipei'}
    HeaderComponent={<div>This is Header</div>}
    SiderComponent={<div>This is Sider</div>}
    ContentComponent={<div>First Content</div>}
  />
);

export default IndexPage;