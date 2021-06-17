import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm a computer programmer from Nairobi.
          Currently working on/with the blockchain technology and crypto to bring
          social and economic change in Kenya. You can contact me on{' '} <a href='https://twitter.com/014_kk'
          >Twitter</a>
        </p>
        
        
      </section>
    </Layout>
  )
}