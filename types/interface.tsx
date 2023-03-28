export interface Projects {
  object: string;
  results?: ProjecInterface[] | null;
  next_cursor?: null;
  has_more: boolean;
  type: string;
  page: Page;
}


export interface ProjecInterface {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: DateType;
  last_edited_by: DateType;
  cover: CoverType;
  icon?: null;
  parent: ParentType;
  archived: boolean;
  properties: PropertiesType;
  url: string;
}

export interface DateType {
  object: string;
  id: string;
}
export interface CoverType {
  type: string;
  external: UrlType;
  file: UrlType;
}
export interface UrlType {
  url: string;
}
export interface ParentType {
  type: string;
  database_id: string;
}
export interface PropertiesType {
  Github: GithubTypes;
  URL: DeployType;
  Description: DescriptionType;
  WorkPeriod: WorkPeriodType;
  extraPeriod :WorkPeriodType;
  Tags: TagsType;
  Name: NameType;
  portfolio : PortfolioType;
  team : TeamType;
  feature : FeatureType;
  coverLink : CoverLinkType;
}
export interface FeatureType {
  id: string;
  type: string;
  rich_text: RichTextType[];
}
export interface CoverLinkType {
  id: string;
  type: string;
  url?: string;
}
export interface TeamType {
  id: string;
  type: string;
  rich_text: RichTextType[];
}

export interface GithubTypes {
  id: string;
  type: string;
  url?: string;
}

export interface DeployType {
  id: string;
  type: string;
  url: string;
}

export interface PortfolioType {
  id: string;
  type: string;
  url: string;
}
export interface DescriptionType {
  id: string;
  type: string;
  rich_text: RichTextType[];
}
export interface RichTextType {
  type: string;
  text: Text;
  annotations: AnnotationsType;
  plain_text: string;
  href?: null;
}
export interface Text {
  content: string;
  link?: null;
}
export interface AnnotationsType {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}
export interface WorkPeriodType {
  id: string;
  type: string;
  date: Date;
}
export interface Date {
  start: string;
  end: string;
  time_zone?: null;
}
export interface TagsType {
  id: string;
  type: string;
  multi_select?:TagType[]
}

export interface NameType {
  id: string;
  type: string;
  title: TitleType[];
}
export interface TitleType {
  type: string;
  text: Text;
  annotations: AnnotationsType;
  plain_text: string;
  href?: null;
}
export interface Page {}

export interface SkillsType {
  key : number;
  name : string;
  describe : string;
  src :  JSX.Element
}

export interface TagType{
  id : string;
  name : string;
  color : string
}