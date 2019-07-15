import {Layout} from 'antd';

const Sider = (props)=>{
  let {children} = props;
  return (<Layout.Sider style={{background:"gray",height: "100vh"}}>
    {children}
  </Layout.Sider>)
};

export default Sider;