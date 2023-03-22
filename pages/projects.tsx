import Head from "next/head"
import Layout from "../src/components/Common/Layout"
import axios from "axios";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../src/components/Project/ProjectItem";
import type { ProjecInterface } from "../types/interface";

interface ProjectInterface {
  projects: ProjecInterface[];
}

const Projects = ({ projects }: ProjectInterface) => {
  return (
    <Layout>
      <Head>
        <title>프론트엔드 개발자 이창훈</title>
        <meta name="description" content="프론트엔드 개발자 이창훈 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-4">
        <h1 className="text-4xl sm:text-6xl py-5 flex justify-center font-bold">프로젝트는 <span className="text-[#5367FF] ml-2">{projects.length}</span>개 입니다.</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-30 py-10 w-4/5">
          {projects.map((project: ProjecInterface) => (
            <ProjectItem key={project.id} projectInfo={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    data: { page_size: 100 }
  };

  const response = await axios.request(options)
  const projects = await response.data.results
  return {
    props: {
      projects
    }
  }
}


export default Projects