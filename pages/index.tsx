import type { NextPage } from "next"
import Head from "next/head"
import Layout from "../src/components/Common/Layout"
import Introduce from "../src/components/Home/Introduce"


const Home: NextPage = () => {
    return (
    <Layout>
      <Head>
        <title>프론트엔드 개발자 이창훈</title>
        <meta name="description" content="프론트엔드 개발자 이창훈 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <Introduce/>
      </div>
    </section>
    </Layout>
  )

}

export default Home
