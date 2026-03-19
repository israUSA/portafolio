export interface NavItem{
  title: string;
  url: string;
}

export enum ProjectsNames{
  Servientrega = "Servientrega Mensajero",
  Teojama = "Conductor Teojama",
  Promarisco = "Promarisco"
}

export interface ProjectInformation{
  bgColor: String;
  projectName: ProjectsNames;
  projectLittleDescription: String;
  projectDescription: String;
  keyFeatures: KeyFeatures[]
  technologiesUsed: String[];
  screenshots?: ImageMetadata[];
  playStoreUrl?: String,
  appStoreUrl?: String
}
export interface KeyFeatures{
  title: String;
  description: String;
  icon: string;
}



