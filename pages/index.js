import Head from 'next/head';
import {Button, Card, Row} from 'antd'
const Home = () => (
  <Card>
    <Head>
      <title>WizardAmigo Taipei</title>
    </Head>
    <Row justify="center" type="flex">Welcome to Wizard Amigos Taipei</Row>
    <Row justify="center" type="flex"><Button type="primary">Button</Button></Row>
  </Card>
);

export default Home;