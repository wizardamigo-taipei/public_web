import {Layout} from 'antd';
import NextHead from 'next/head';
const Head = (props)=>{
  let {title, children} = props;
  return (
    <Layout.Header style={{background:'white',position: 'fixed', zIndex: 1, width: '100vw', border: '1px blue solid'}}>
      <NextHead>
        <title>{title}</title>
      </NextHead>
      {children}
    </Layout.Header>
  )
};
export default Head;