import Layout from "../src/components/Common/Layout"
import Head from "next/head"
import Link from "next/link"
import {SKILLS, TOOLS} from "../src/constValue"
import type { SkillsType } from "../types/interface"
import SkillCard from "../src/components/Skills/SkillCard"

const skills = () => {
  return(
    <Layout>
      <Head>
      <title>프론트엔드 개발자 이창훈</title>
          <meta name="description" content="프론트엔드 개발자 이창훈 포트폴리오" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="w-full">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            기술 스택
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            새로운 기술을 익히는 도전을 즐깁니다.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 md:mx-auto sm:mb-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-8 py-5 w-full">
            {
              SKILLS.map((skill:SkillsType)=>
              <SkillCard key={skill.key} skill={skill}/>
              )
            }
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="w-full">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Tools
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              다양한 커뮤니케이션 툴을 활용하여 협업할 수 있습니다. 
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-8 py-5 w-full">
            {
              TOOLS.map((el:SkillsType)=>
              <div key={el.key} className="flex">
                <div className="mr-3">{el.src}</div>
                <div>
                <div className="text-blue-600 font-medium">{el.name}</div>
                <div>{el.describe}</div>
                </div>
              </div>)
            }
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center my-16 text-center">
            <Link href="projects" className="btn-project">
              프로젝트 바로가기
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default skills