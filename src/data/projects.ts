import type { ProjectInformation } from "../types/types";
import { ProjectsNames } from "../types/types";

import servientregaImage from "../assets/screenshots/servientrega-project.png";
import teojamaImage from "../assets/screenshots/teojama-project.png";
import teojamaImage2 from "../assets/screenshots/teojama-project-2.png";
import teojamaImage3 from "../assets/screenshots/teojama-project-3.png";
import teojamaImage4 from "../assets/screenshots/teojama-project-4.png";
import teojamaImage5 from "../assets/screenshots/teojama-project-5.png";
import promariscoImage from "../assets/screenshots/promarisco-project.png";

export const PROJECTS_DATA: ProjectInformation[] = [
  {
    bgColor: "bg-green-100",
    projectName: ProjectsNames.Servientrega,
    projectDescription: "Diseñado para el ritmo real del mensajero. Servientrega te ofrece una experiencia fluida donde la inteligencia de rutas guía tu camino. Ya sea desde los lugares mas reconditos y sin señal de internet, nunca te detienes: gestiona cada paquete en modo offline con la confianza de que tu trabajo se sincronizará solo. Convierte tu logística en una operación ágil, ordenada y sin interrupciones.",
    projectLittleDescription: "Servientrega permite al mensajero controlar su ruta con total libertad. Organiza entregas y recolecciones, reordena prioridades al instante y registra cada paquete entregado, haciendo el trabajo diario mucho más ágil, ordenado y eficiente.",
    keyFeatures: [
      {title: 'Modo Offline', description: 'Guarda en el dispositivo todo lo necesario para que el operador gestione sus guías sin necesidad de conexión a internet', icon: 'fa-solid fa-cloud-arrow-down'},
      {title: 'Background', description: 'Motor del modo offline, verifica conexión a internet sincronizando las guías gestionadas y guardando guías nuevas asignadas', icon: 'fa-solid fa-forward-fast'},
      {title: 'Scanner de código de barras', description: 'Búsqueda de guías y consulta de tracking por medio de código de barras', icon: 'fa-solid fa-barcode'},
      {title: 'Generación de rutas', description: 'Generación de ruta (óptima o personalizada) de entrega de las guías', icon: 'fa-solid fa-route'},
      {title: 'Multigestion de guías', description: 'Gestiona multiples guías al mismo tiempo', icon: 'fa-brands fa-buffer'},
      {title: 'Organización por carpetas', description: 'Organización de guías en carpetas personalizadas según ruta, zona o flujo de trabajo', icon: 'fa-brands fa-buffer'},
    ],
    technologiesUsed: ['Flutter', 'Firebase', 'Firebase Crashlytics'],
    playStoreUrl: '',
    appStoreUrl:'',
    screenshots: [servientregaImage] 
  },
  {
    bgColor: "bg-indigo-100",
    projectName: ProjectsNames.Teojama,
    projectDescription: "Diseñada para recompensar la excelencia en el camino, Conductor Teojama transforma el mantenimiento preventivo en una experiencia de beneficios exclusivos. No es solo una herramienta de registro, es un ecosistema de fidelización donde cada visita al taller fortalece la vida útil de tu camión y acumula valor real. Desde el escaneo ágil de servicios hasta la emoción de canjear premios logrados con esfuerzo, la app garantiza que el conductor sea el protagonista. Convierte cada mantenimiento en una oportunidad de crecimiento, asegurando un rendimiento técnico impecable y una ruta siempre premiada.",
    projectLittleDescription: "Conductor Teojama es una app de fidelización que premia el mantenimiento preventivo. Los conductores acumulan puntos por cada servicio mecánico realizado, permitiéndoles canjear beneficios exclusivos y asegurar el estado técnico de sus camiones.",
    keyFeatures: [
      {title: 'Reclamo de premios', description: 'Juego interactivo donde se selecciona y se reclama los premios alcanzados', icon: 'fa-solid fa-award'},
      {title: 'Scanner de código QR', description: 'Escaneo de código QR para reclamo de premios y finalización de mantenimientos vehiculares', icon: 'fa-solid fa-barcode'},
      {title: 'Notificaciones', description: 'Notificaciones personalizadas y segmendatas con fines informativos y de preferencias segun los usuarios', icon: 'fa-solid fa-bell'},
    ],
    technologiesUsed: ['Flutter', 'Firebase', 'Firebase Messaging', 'Google Sign-in'],
    playStoreUrl: '',
    appStoreUrl:'',
    screenshots: [teojamaImage, teojamaImage2, teojamaImage3, teojamaImage4, teojamaImage5]
  },
  {
    bgColor: "bg-red-100",
    projectName: ProjectsNames.Promarisco,
    projectDescription: "Solución integral de seguridad operativa que digitaliza el control de accesos, agendamientos y reporte de incidencias. Diseñada para garantizar la trazabilidad de custodias y una respuesta ágil ante novedades, optimizando la vigilancia física en un entorno logístico de alta exigencia.",
    projectLittleDescription: "Promarisco es una solución de seguridad integral. Digitaliza el control de accesos, la verificación física, custodias y agendamiento de visitas, garantizando una vigilancia operativa eficiente y un entorno seguro.",
    keyFeatures: [
      {title: 'Scanner de código QR', description: 'Escaneo para confirmar entradas de visitas, logistica, etc', icon: 'fa-solid fa-barcode'},
    ],
    technologiesUsed: ['Flutter'],
    screenshots: [promariscoImage]
  }
];
