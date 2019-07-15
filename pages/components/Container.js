import {Layout} from 'antd';
import {Component} from 'react';
import Head from './Head';
import Foot from './Foot';
import Sider from './Sider';
import Content from './Content';
export default class Container extends Component{
  constructor(props){
    super(props);
  }
  render () {
    let { SiderComponent, ContentComponent, HeaderComponent  } = this.props;
    return (<Layout>
      <Head title={this.props.title}>
        {HeaderComponent}
      </Head>
      <Layout style={{marginTop: 64}}>
        <Sider>
          {SiderComponent}
        </Sider>
        <Content>
          {ContentComponent}
        </Content>
      </Layout>
      <Foot>
        <div>&copy; UliveBuy Footer</div>
      </Foot>
    </Layout>);
  }
}