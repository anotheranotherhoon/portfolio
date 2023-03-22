import Layout from "../src/components/Common/Layout"
import Head from "next/head"
const PageNotFound = () => {
  return (
    <Layout>
      <Head>
        <title>프론트엔드 개발자 이창훈</title>
        <meta name="description" content="프론트엔드 개발자 이창훈 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>페이지를 찾을 수 없습니다. </h1>
    </Layout>
  )
}

export default PageNotFound