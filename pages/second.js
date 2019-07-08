import Head from 'next/head';
import Link from 'next/link'
const Second = ()=>{
  return (<div>
    <Head>
      <title>Second</title>
    </Head>
    <Link href="/"><a>Home</a></Link>
  </div>);
}
export default Second;