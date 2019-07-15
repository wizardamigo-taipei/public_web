import './assets/index.css';
import AntdCarousel from './components/CarouselComponent';
import Container from './components/Container';
import LeftBar from './components/LeftBar';
const IndexPage = () => (
  <Container title={'wizardAmigoTaipei'}
    HeaderComponent={<div style={{display: "flex", justifyContent:"flex-end", alignItems:"center"}}><LeftBar/></div>}
    SiderComponent={<div>This is Sider</div>}
    ContentComponent={<AntdCarousel>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
    </AntdCarousel>}
  />
);

export default IndexPage;