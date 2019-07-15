import {Carousel} from 'antd';

const AntdCarousel = (props)=>{
  let {children} = props;
  return (<Carousel autoplay>
    {children}
  </Carousel>)
};

export default AntdCarousel;