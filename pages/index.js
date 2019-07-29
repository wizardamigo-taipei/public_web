import './assets/index.css';
import AntdCarousel from './components/CarouselComponent';
import Container from './components/Container';
import LeftBar from './components/LeftBar';
const IndexPage = () => (
  <Container title={'wizardAmigoTaipei'}
    HeaderComponent={<div style={{display: "flex", justifyContent:"flex-end", alignItems:"center"}}><LeftBar/></div>}
    ContentComponent={<div>This is content</div>}
  />
);

export default IndexPage;