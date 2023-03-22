import Layout from "../src/components/Common/Layout"
import Head from "next/head"
import Image from "next/image"
import MailFooterIcon from "../src/components/SVG/Footer/MailFooterIcon"
import GithubFooterIcon from "../src/components/SVG/Footer/GithubFooterIcon"
import VelogFooterIcon from "../src/components/SVG/Footer/VelogFooterIcon"

const contact = () => {
  return(
    <Layout>
      <Head>
        <title>프론트엔드 개발자 이창훈</title>
        <meta name="description" content="프론트엔드 개발자 이창훈 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font h-full">
        <div className="container mx-auto flex px-5 py-24 justify-center flex-row gap-5">
          <div className="lg:w-1/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
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
            <div className="flex mb-5 items-center flex-row justify-between">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-[#ece6cc]  dark:text-violet-800">
                <MailFooterIcon/>
              </div>
              <div className="ml-5">
                <a
                  href="mailto:changhoon1030@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h2
                    className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
                    hover:scale-[1.02]  "
                  >
                    changhoon1030@gmail.com
                  </h2>
                </a>
              </div>
            </div>
            <div className="flex mb-5 items-center flex-row">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-[#ece6cc]  ">
                <GithubFooterIcon/>
              </div>
              <div className="ml-5">
                <a
                  href="https://github.com/anotheranotherhoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2
                    className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
                    hover:scale-[1.02]  "
                  >
                    깃허브 바로가기
                  </h2>
                </a>
              </div>
            </div>
            <div className="flex mb-5 items-center flex-row">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-[#ece6cc]  ">
                <VelogFooterIcon/>
              </div>
              <div className="ml-5">
                <a
                  href="https://velog.io/@anotherhoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2
                    className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
                    hover:scale-[1.02]   "
                  >
                    블로그 바로가기
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact