import Link from "next/link"
import Animation from "./Animation"

const Introduce = () => {
  return (
    <>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Animation/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="text-[#5367FF] font-bold ">
            <span className="pr-2">#포기하지 않는</span>
            <span className="pr-2">#즐기는</span>
            <span className="pr-2">#기록하는</span>
          </div>
          <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-20 font-pt">I am <span className="text-[orange]">Chang Hoon</span>
          <div>
          Frontend Developer
          </div>
          </h1>
          <div className="xl:text-lg leading-relaxed mb-8 md:mb-12d">
          <div className="pb-3 font-semibold">실패를 두려워하지 않고 배우고 기록하여 내일의 밑거름 삼아 다음 단계로 성장합니다.</div>
          <div className="pb-3 font-semibold">프로젝트를 통해 학습한 것을 <a href="https://velog.io/@anotherhoon/series/%ED%9A%8C%EA%B3%A0" className="text-[#5367FF] hover:text-[#5388FF]">회고</a>로 꾸준히 기록합니다. </div>
          <div className="pb-3 font-semibold">그렇다구요</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:justify-center lg:justify-start">
            <Link href="/profile" className="btn-project">
            프로필
            </Link>
            <Link href="/projects"  className="btn-project">
            프로젝트
            </Link>
          </div>
        </div>
    </>
  )
}

export default Introduce