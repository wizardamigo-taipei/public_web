import {Layout} from 'antd';

const Content = (props) => (
  <Layout.Content style={{background:"white"}}>
    {props.children}
  </Layout.Content>
);

export default Content;