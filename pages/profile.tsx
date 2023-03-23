import Layout from "../src/components/Common/Layout"
import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
const AboutMe = () => {
  return (
    <Layout>
      <Head>
        <title>프론트엔드 개발자 이창훈</title>
        <meta name="description" content="프론트엔드 개발자 이창훈 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col gap-5">
          <div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900 ">
            사용자 중심의 프론트엔드 개발자 이창훈입니다.
            </h1>
            <p className="mb-20 leading-relaxed">
            사용자의 요구에 따라 최신 기술과 디자인을 활용하여 직관적이고 사용하기 쉬운 어플리케이션을 만드는 것에 집중합니다.
            </p>
          </div>
          <div className="flex xl:flex-row flex-col  gap-10 lg:w-4/5">
            <div className="xl:w-3/5 lg:w-3/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
              <Image
              src={"/profile.jpg"}
                width={100}
                height={100}
                alt="이창훈 프로필 이미지"
                className="rounded-xl"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col leading-relaxed">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-[#5367FF] text-white dark:bg-slate-700 p-1 rounded-md ">
                ✏️ 교육 이력
              </h1>
              <div className="font-semibold text-xl">
                코드스테이츠 (Code States)
              </div>
              <div>
                Software Engineering Bootcamp Frontend 39기 수료
              </div>
              <p className="leading-relaxed">2022.04 - 2022.10</p>
              <ul className="list-disc list-inside mb-9">
                <li>
                  페어 프로그래밍을 통해 <span className="font-bold">React</span>를 집중 학습했습니다. 
                </li>
                <li>
                2번의 팀 프로젝트를 통해 백엔드와 협업을 경험했습니다. 
                </li>
                <li>
                  DeepDive <a href="https://github.com/anotheranotherhoon/ModernJS_Study" className="text-[#5367FF] hover:text-[#5388FF]">스터디</a>에 참여하여 JS 개발을 위한 핵심 개념을 학습했습니다.
                </li>
              </ul>
              <div className="font-semibold text-xl">
                원티드 (wanted)
              </div>
              <div>
                원티드 프리온보딩 Frontend 과정 수료
              </div>
              <p className="leading-relaxed">2022.10 - 2022.11</p>
              <ul className="list-disc list-inside mb-9">
                <li>기업 과제를 중심으로 TypeScript, Next.js, React Query를 집중 학습했습니다.
                </li>
              </ul>
              <div className="font-semibold text-xl">
                부산대학교 (Pusan National University)
              </div>
              <div >
                경제학부 학사 졸업
              </div>
              <p className="leading-relaxed">2015.03 - 2021.02</p>
              <ul className="list-disc list-inside mb-9">
                <li>
                  컴퓨터 활용 능력 1급
                </li>
                <li>
                  워드프로세서 1급
                </li>
                <li>
                  SK 대학생 자원봉사단 SUNNY 행복한 모바일 세상
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center lg:w-4/5 w-full">
            <h3 className="text-3xl font-bold text-left">
              자기 소개
            </h3>
            <p className="mt-4 mb-8 leading-relaxed text-left">
            안녕하세요! 사용자의 입장에서 생각하고자 노력하는 신입 개발자 이창훈입니다. 코드스테이츠와 원티드 프리온보딩을 수료하여 현재까지의 경험과 개발 기술을 향상시키는 데 큰 도움을 받았습니다. 저는 사용자 중심의 UI/UX 디자인과 뛰어난 기술력을 바탕으로 웹사이트와 어플리케이션을 개발하는 것을 즐깁니다. 최신 웹 개발 트렌드를 적용하면서도 세심한 디테일과 사용자 경험을 고려한 개발을 지향합니다. 저는 HTML, CSS, JavaScript를 비롯한 프론트엔드 기술 스택을 다룰 수 있습니다. 또한 React, Next.js 프레임워크를 사용하여 웹 개발에 필요한 기능을 구현하는 것이 가능합니다. 제가 가진 기술과 열정으로 뛰어난 사용자 경험과 완벽한 기능을 가진 웹 사이트를 만들어보고 싶습니다.
            </p>
            <h3 className="text-3xl font-bold text-left">
              왜 개발자가 되고 싶나요?
            </h3>
            <p className="mt-4 mb-8 leading-relaxed text-left">
              계량 경제학 수업시간에 R을 사용한 축구팀 데이터 분석을 하면서 처음으로 컴퓨터 프로그래밍에 관심을 갖게 되었습니다. 대학생 자원봉사단 활동으로 노인복지회관에서 스마트폰 교육봉사 활동 중 교재 제작 과정에 참여하여 어르신들의 입장에서 바라보는 UI를 바라보게 되었고, 프론트엔드 개발자가 좋은 UI와 UX를 고민하는 직업이라는 것을 알게 되었습니다. 모든 사용자가 직관적이고 사용하기 쉽다 느끼는 어플리케이션을 만들고 싶습니다.
            </p>
            <h3 className="text-3xl font-bold text-left">
              어떤 개발자로 성장하고 싶은가요?
            </h3>
            <p className="mt-4 mb-20 leading-relaxed text-left">
            학습한 것들을 꾸준히 기록하고, 그로 인해 다른 개발자분들이 도움이 받고, 오픈소스에 기여하고, 스택오버플로우에 질문 하고 답변도 할 수 있는 개발자, 동료 개발자들의 성장을 진심으로 도와주고 응원하는, 개발자 문화에 기여하는 개발자로 성장하고 싶습니다.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-center gap-2.5">
              <Link href="/skills" className="btn-project">
                기술 스택
              </Link>
              <Link href="/projects" className="btn-project">
                프로젝트
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default AboutMe