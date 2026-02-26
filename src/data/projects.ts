import type { ProjectInformation } from "../types/types";
import { ProjectsNames } from "../types/types";

import servientregaImage from "../assets/screenshots/servientrega-project.png";
import teojamaImage from "../assets/screenshots/teojama-project.png";
import promariscoImage from "../assets/screenshots/promarisco-project.png";

export const PROJECTS_DATA: ProjectInformation[] = [
  {
    bgColor: "bg-green-100",
    projectName: ProjectsNames.Servientrega,
    projectDescription: "",
    projectSubtitle: "",
    projectLittleDescription: "Servientrega Courier permite al mensajero controlar su ruta con total libertad. Organiza entregas y recolecciones, reordena prioridades al instante y registra cada paquete entregado, haciendo el trabajo diario mucho más ágil, ordenado y eficiente.",
    keyFeatures: [],
    technologiesUsed: [],
    screenshots: [servientregaImage] 
  },
  {
    bgColor: "bg-indigo-100",
    projectName: ProjectsNames.Teojama,
    projectDescription: "",
    projectSubtitle: "",
    projectLittleDescription: "Conductor Teojama es una app de fidelización que premia el mantenimiento preventivo. Los conductores acumulan puntos por cada servicio mecánico realizado, permitiéndoles canjear beneficios exclusivos y asegurar el estado técnico de sus camiones.",
    keyFeatures: [],
    technologiesUsed: [],
    screenshots: [teojamaImage]
  },
  {
    bgColor: "bg-red-100",
    projectName: ProjectsNames.Promarisco,
    projectDescription: "",
    projectSubtitle: "",
    projectLittleDescription: "Promarisco es una solución de seguridad integral. Digitaliza el control de accesos, la verificación física, custodias y agendamiento de visitas, garantizando una vigilancia operativa eficiente y un entorno seguro.",
    keyFeatures: [],
    technologiesUsed: [],
    screenshots: [promariscoImage]
  }
];
