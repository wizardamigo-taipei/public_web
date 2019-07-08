import Head from 'next/head';
import Link from 'next/link';

const first = ()=>{
  return (<div>
    <Head>
      <title>Test</title>
    </Head>
    <Link href="/"><a>Home</a></Link>
  </div>)
}
export default first;