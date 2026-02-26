export interface NavItem{
  title: string;
  url: string;
}

export enum ProjectsNames{
  Servientrega = "Servientrega Courier",
  Teojama = "Conductor Teojama",
  Promarisco = "Promarisco"
}



export interface ProjectInformation{
  bgColor: String;
  projectName: ProjectsNames;
  projectSubtitle: String;
  projectLittleDescription: String;
  projectDescription: String;
  keyFeatures: KeyFeatures[]
  technologiesUsed: String[];
  screenshots?: ImageMetadata[];
}
export interface KeyFeatures{
  title: String;
  description: String;
  icon: string;
}



