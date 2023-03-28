import { useEffect, useState } from "react";
import { SkillsType } from "../../../types/interface";

interface SkillCardProps {
  skill : SkillsType;
}

const SkillCard = ({skill} : SkillCardProps) => {
  const [hydrated, setHydrated] = useState<boolean>(false)
  useEffect(()=>{
    setHydrated(true)
  },[])
  return(
    <div key={skill.key} className="flex">
    <div className="mr-3">{skill.src}</div>
    <div>
    <div className="text-[#5367FF] font-medium">{skill.name}</div>
    <div>{skill.describe}</div>
    </div>
  </div>
  )
}
export default SkillCard