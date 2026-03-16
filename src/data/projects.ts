import type { ProjectInformation } from "../types/types";
import { ProjectsNames } from "../types/types";

import servientregaImage from "../assets/screenshots/servientrega-project.png";
import teojamaImage from "../assets/screenshots/teojama-project.png";
import promariscoImage from "../assets/screenshots/promarisco-project.png";

export const PROJECTS_DATA: ProjectInformation[] = [
  {
    bgColor: "bg-green-100",
    projectName: ProjectsNames.Servientrega,
    projectDescription: "Diseñado para el ritmo real del mensajero. Servientrega te ofrece una experiencia fluida donde la inteligencia de rutas guía tu camino. Ya sea desde los lugares mas reconditos y sin señal de internet, nunca te detienes: gestiona cada paquete en modo offline con la confianza de que tu trabajo se sincronizará solo. Convierte tu logística en una operación ágil, ordenada y sin interrupciones.",
    projectSubtitle: "Plataforma de gestión para couriers logística para la gestión de guías en Servientrega.",
    projectLittleDescription: "Servientrega permite al mensajero controlar su ruta con total libertad. Organiza entregas y recolecciones, reordena prioridades al instante y registra cada paquete entregado, haciendo el trabajo diario mucho más ágil, ordenado y eficiente.",
    keyFeatures: [
      {title: 'Modo Offline', description: '', icon: ''},
      {title: 'Scanner de código de barras', description: '', icon: ''},
      {title: 'Modo Background', description: '', icon: ''},
    ],
    technologiesUsed: ['Flutter', 'Firebase', 'Firebase Crashlytics'],
    playStoreUrl: '',
    appStoreUrl:'',
    screenshots: [servientregaImage] 
  },
  {
    bgColor: "bg-indigo-100",
    projectName: ProjectsNames.Teojama,
    projectDescription: "",
    projectSubtitle: "",
    projectLittleDescription: "Conductor Teojama es una app de fidelización que premia el mantenimiento preventivo. Los conductores acumulan puntos por cada servicio mecánico realizado, permitiéndoles canjear beneficios exclusivos y asegurar el estado técnico de sus camiones.",
    keyFeatures: [
      {title: 'Notificaciones', description: '', icon: ''},
    ],
    technologiesUsed: ['Flutter', 'Firebase', 'Firebase Messaging', 'Google Sign-in'],
    playStoreUrl: '',
    appStoreUrl:'',
    screenshots: [teojamaImage]
  },
  {
    bgColor: "bg-red-100",
    projectName: ProjectsNames.Promarisco,
    projectDescription: "",
    projectSubtitle: "",
    projectLittleDescription: "Promarisco es una solución de seguridad integral. Digitaliza el control de accesos, la verificación física, custodias y agendamiento de visitas, garantizando una vigilancia operativa eficiente y un entorno seguro.",
    keyFeatures: [],
    technologiesUsed: ['Flutter'],
    screenshots: [promariscoImage]
  }
];
