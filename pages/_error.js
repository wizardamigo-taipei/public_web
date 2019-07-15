import {Component} from 'react';
import Container from './components/Container';
export default class Error extends Component{
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode: err ? err.statusCode: null;
    return {statusCode}
  }

  render() {
    return (
      // <Card>
      //   {this.props.statusCode ? `An error ${this.props.statusCode} occured on server`:
      //    `An error occured on client`}
      // </Card>
      <Container title={'UliveBuyErrorPage'}
      HeaderComponent={<div>This is Header</div>}
      SiderComponent={<div>This is Sider</div>}
      ContentComponent={<div>{this.props.statusCode ? `An error ${this.props.statusCode} occured on server`:
      `An error occured on client`}</div>}
    />
    )
  }
}
