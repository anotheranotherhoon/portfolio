import TypeScriptIcon from "./components/SVG/Skills/TypeScriptIcon"
import ReactIcon from "./components/SVG/Skills/ReactIcon"
import NextIcon from "./components/SVG/Skills/NextIcon"
import ReduxIcon from "./components/SVG/Skills/ReduxIcon"
import ReactQueryIcon from "./components/SVG/Skills/ReactQueryIcon"
import StyledComponentsIcon from "./components/SVG/Skills/StyledComponentsIcon"
import GithubIcon from "./components/SVG/Skills/GithubIcon"
import FigmaIcon from "./components/SVG/Skills/FigmaIcon"
import NotionIcon from "./components/SVG/Skills/NotionIcon"
import SlackIcon from "./components/SVG/Skills/SlackIcon"
import AwsIcon from "./components/SVG/Skills/AwsIcon"
import VercelIcon from "./components/SVG/Skills/VercelIcon"
import TailwindIcon from "./components/SVG/Skills/TailwindIcon"
import RecoilIcon from "./components/SVG/Skills/RecoilIcon"

export const SKILLS = [
  {
    "key" : 1,
    "name" : "React",
    "describe" : "Virtual DOM의 동작 원리를 이해하고 기본적인 hook 사용과 커스텀 hook을 사용해 상태 관리 로직을 재활용할 수 있습니다.",
    "src"  :< ReactIcon/>
  },
  {
    "key" : 2,
    "name" : "TypeScript",
    "describe" : "TypeScript의 타입 시스템을 이해하고 JavaScript코드를 TypeScript로 마이그레이션한 경험이 있습니다.",
    "src"  :< TypeScriptIcon/>
  },
  {
    "key" : 3,
    "name" : "Next.js",
    "describe" : "HTML 요소 <a>, <img>와 Next.js의 <Link>, <Image>의 차이를 이해하여 사용합니다. React의 SEO 문제를 SSR 방법으로 해결 할 수 있습니다.",
    "src"  :< NextIcon/>
  },
  {
    "key" : 4,
    "name" : "React Query",
    "describe" : "useQuery와 useMutation을 사용하여 서버 state를 관리할 수 있습니다.",
    "src"  :< ReactQueryIcon/>
  },
  {
    "key" : 5,
    "name" : "Redux",
    "describe" : "flux 패턴의 동작 원리를 이해하고 있으며 Redux-Toolkit을  사용한 경험이 있습니다.",
    "src"  :< ReduxIcon/>
  },
  {
    "key" : 6,
    "name" : "Recoil",
    "describe" : "Recoil을 사용하여 쉽고, 간편하게 전역상태를 관리할 수 있습니다.",
    "src"  :< RecoilIcon/>
  },
  {
    "key" : 7,
    "name" : "styled-components",
    "describe" : "CSS in JS의 장단점을 이해하고 JavaScript를 사용한 동적인 스타일 처리를 할 수 있습니다.",
    "src"  :< StyledComponentsIcon/>
  } ,
  {
    "key" : 8,
    "name" : "tailwind",
    "describe" : "tailwind의 반응형 키워드를 사용하여 웹 페이지를 제작한 경험이 있습니다.",
    "src"  :< TailwindIcon/>
  }

]

export const TOOLS = [
  {
    "key" : 1,
    "name" : "Github",
    "describe" : "",
    "src"  :< GithubIcon/>
  },
  {
    "key" : 2,
    "name" : "Figma",
    "describe" : "와이어 프레임, 유저플로우, 프로젝트 로고와 파비콘을 제작한 경험이 있습니다.",
    "src"  :< FigmaIcon/>
  },
  {
    "key" : 3,
    "name" : "Notion",
    "describe" : "Notion을 사용한 문서 관리, 데이터베이스를 활용한 일정관리와 Notion API를 사용한 포트폴리오 제작 경험이 있습니다. ",
    "src"  :< NotionIcon/>
  },
  {
    "key" : 4,
    "name" : "Slack",
    "describe" : "채널마다 역할을 부여하여 팀 내 정보 공유를 효율적으로 진행한 경험이 있습니다.",
    "src"  :< SlackIcon/>
  },
  {
    "key" : 5,
    "name" : "AWS S3",
    "describe" : "AWS S3를 사용한 프로젝트 클라이언트 배포 경험이 있습니다.",
    "src"  :< AwsIcon/>
  },
  {
    "key" : 6,
    "name" : "Vercel",
    "describe" : "Vercel을 사용한 프로젝트 배포 경험이 있습니다.",
    "src"  :< VercelIcon/>
  },
]