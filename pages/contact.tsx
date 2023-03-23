import Layout from "../src/components/Common/Layout"
import Head from "next/head"
import Image from "next/image"
import MailFooterIcon from "../src/components/SVG/Footer/MailFooterIcon"
import GithubFooterIcon from "../src/components/SVG/Footer/GithubFooterIcon"
import VelogFooterIcon from "../src/components/SVG/Footer/VelogFooterIcon"
import PlaceToContact from "../src/components/Contact/PlaceToContact"
const contact = () => {
  return(
    <Layout>
      <Head>
        <title>프론트엔드 개발자 이창훈</title>
        <meta name="description" content="프론트엔드 개발자 이창훈 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font h-screen">
        <div className="container mx-auto lg:flex md:flex md: flex-row lg:flex-row px-5 py-24 justify-center gap-5 sm:flex-col">
          <div className="lg:w-1/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded ">
            <Image
            src={"/profile.jpg"}
            width={100}
            height={100}
            alt="이창훈 프로필 이미지"
            className="rounded-xl"
            layout="responsive"
            />
          </div>
          <div className="flex flex-col flex-wrap -mb-10 lg:text-left text-center"> 
          <PlaceToContact  contact={<MailFooterIcon/>} url={"mailto:changhoon1030@gmail.com"} way={"changhoon1030@gmail.com"}/>
          <PlaceToContact  contact={<GithubFooterIcon/>} url={"https://github.com/anotheranotherhoon"} way={"깃허브 바로가기"}/>
          <PlaceToContact  contact={<VelogFooterIcon/>} url={"https://velog.io/@anotherhoon"} way={"블로그 바로가기"}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact