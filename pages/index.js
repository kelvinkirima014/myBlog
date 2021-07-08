import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm a computer programmer and a crypto enthusiast from Nairobi currently 
          having lots of fun learning and building on smart contract platforms
          especially Ethereum and Solana. 
           You can contact me on{' '} <a href='https://twitter.com/014_kk'
          >Twitter</a>{' '} or via {' '}<a href='https://mail.google.com/mail/u/0/#inbox'>Email</a>.
           Also, here is my <a href='https://github.com/kelvinkirima014'>GitHub.</a>
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
               <Link href={`/posts/${id}`}>
                 <a>{title}</a>
               </Link>
               <br />
               <small className={utilStyles.lightText}>
                 <Date dateString={date} />
               </small>
              </li>
            ))}
          </ul>
      </section>
    </Layout>
  )
}

