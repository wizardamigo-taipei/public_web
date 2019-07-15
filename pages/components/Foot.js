import {Layout} from 'antd';

const Foot = (props) => (
  <Layout.Footer style={{position:"fixed",width:"100vw", bottom:0}}>
    {props.children}
  </Layout.Footer>
);
export default Foot;