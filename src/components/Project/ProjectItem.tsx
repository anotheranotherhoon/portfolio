import type { ProjecInterface, TagType, WorkPeriodType } from "../../../types/interface"
import Image from "next/image";

interface ProjectItemProps {
  projectInfo: ProjecInterface;
}

const ProjectItem = ({ projectInfo }: ProjectItemProps) => {
  const feature: string[] | undefined = projectInfo.properties.feature.rich_text[0]?.plain_text ? projectInfo.properties.feature.rich_text[0]?.plain_text.split(",") : undefined
  const imgSrc = projectInfo.cover.file?.url || projectInfo.cover.external.url
  const title = projectInfo.properties.Name.title[0].plain_text;
  const description = projectInfo.properties.Description.rich_text[0].plain_text;
  const deployUrl = projectInfo.properties.URL.url;
  const githubUrl = projectInfo.properties.Github.url;
  const portfolioUrl = projectInfo.properties.portfolio.url;
  const coverUrl = projectInfo.properties.coverLink.url;
  const start = projectInfo.properties.WorkPeriod.date.start;
  const end = projectInfo.properties.WorkPeriod.date.end;
  const extraStart : string | null =  projectInfo.properties.extraPeriod.date?.start ;
  const extraEnd : string | null  = projectInfo.properties.extraPeriod.date?.end ;
  const tags = projectInfo.properties.Tags.multi_select;
  const projectType = projectInfo.properties.team.rich_text[0].plain_text;
  console.log(extraStart, extraEnd)
  const calculatedPeriod = (start: string, end: string) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");
    var startDate = new Date(Number(startDateStringArray[0]), Number(startDateStringArray[1]), Number(startDateStringArray[2]));
    var endDate = new Date(Number(endDateStringArray[0]), Number(endDateStringArray[1]), Number(endDateStringArray[2]));
    const diffInMs = Math.abs(Number(endDate) - Number(startDate));
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };
  return (
    <div className="project-card">
      <a href={coverUrl}>
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          width={100}
          height={100}
          alt="project cover image"
          layout="responsive"
          objectFit="none"
          quality={100}
        />
      </a>
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-lg">{description}</h3>
        <h3 className="mt-3 mb-1">{projectType}</h3>
        {feature ? <div className="mt-1 mb-4 p-1  bg-[#f3f4f6] rounded-md ">
          <ul>
            {feature.map((el: string, key: number) =>
              <li key={key} className="text-slate-800 dark:text-slate-900">
                {el}
              </li>)}
          </ul>
        </div> : <></>
        }
        <a href={deployUrl}>🔗 배포 링크 바로가기</a>
        <a href={githubUrl}>🔗 깃허브 링크 바로가기</a>
        <a href={portfolioUrl}>🔗 회고 링크 바로가기</a>
        <h4 className="my-2">
          프로젝트 기간 : {start} ~ {end} (
          {calculatedPeriod(start, end)}
          일)
        </h4>
        {extraStart&&extraEnd&&
        <h4 className="mb-2">
          리팩토링 기간 : {extraStart} ~ {extraEnd} (
          {calculatedPeriod(extraStart, extraEnd)}
          일)
        </h4>}
        <div className="flex items-start mt-2 overflow-auto ">
          {tags!.map((aTag : TagType)   => (
            <h1
              className="px-1 py-1 mr-2 rounded-md bg-[#5367FF] dark:bg-[#5388FF] text-white dark:text-slate-900 w-30 "
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectItem