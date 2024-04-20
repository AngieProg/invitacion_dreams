import {
  //email,
  iglesia,
  llamada,
  recepcion,
  whatsapp,
  persona,
  reloj,
  confirmar,
  iglesiaPrograma,
  recepcionPrograma,
  comidaPrograma,
  valsPrograma,
  gps,
  mujer,
  hombre,
  //circuloRosa,
} from "./../assets/icons";

import { iglesiaUbicacion, salon } from "./../assets/images";

  export const fecha = "25 05 2024";
  export const nombre = "Sarah Michelle Rodríguez Velasco";
  export const nombreHero = "Sarita";
  export const fechaContador = "may 25, 2024 13:45:00";
  export const mensaje = `Les hacemos la más cordial invitación a un día lleno de diversión, baile y alegría mientras celebramos este importante hito en la vida de ${nombre}. Esperamos contar con su presencia y compartir momentos inolvidables juntos.`;

export const ubicaciones = [
  {
    img: iglesiaUbicacion,
    icon: iglesia,
    titulo1: "CEREMONIA RELIGIOSA",
    titulo2: "Capilla Terraza Real",
    icon2: reloj,
    hora: "13:45",
    parrafo: "Carretera Atlacomulco-San Lorenzo km 10.5, Atlacomulco Edo. Mex. ",
    btn1: "VER EN GPS",
    url1: "https://maps.app.goo.gl/hkjhQSckAgxfmPbN6",
    icon3: gps,
  },
  {
    img: salon,
    icon: recepcion,
    titulo1: "RECEPCIÓN",
    titulo2: "Terraza Real",
    icon2: reloj,
    hora: "15:00",
    parrafo: "Carretera Atlacomulco-San Lorenzo km 10.5, Atlacomulco Edo. ",
    btn1: "VER EN GPS",
    url1: "https://maps.app.goo.gl/hkjhQSckAgxfmPbN6",
    icon3: gps,
  },
];
export const confirmaciones = [
  {
    icon: whatsapp,
    titulo1: "CONFIRMAR POR",
    titulo2: "Whatsapp",
    btn1: "7221603000",
    url1: "https://wa.me/7221603000",
    icon3: confirmar,
  },
  /*{
    icon: llamada,
    titulo1: "CONFIRMAR POR",
    titulo2: "Llamada",
    btn1: "7221406931",
    btn2: "7228444568",
    url1: "tel:+527221406931",
    url2: "tel:+527228444568",
    icon3: confirmar,
  },
  {
    icon: email,
    titulo1: "CONFIRMAR POR",
    titulo2: "Correo Electrónico",
    btn1: "Enviar",
  },*/
];

export const CodigoVestimenta = [
  {
    icon: mujer,
    titulo1: "MUJERES",
    titulo2: "Formal",
  },
  {
    icon: hombre,
    titulo1: "HOMBRES",
    titulo2: "Formal",
  },
];
export const datosInvitado = [
  {
    icon2: persona,
    label: "PASES",
    input: "4",
  },
  // {
  //   icon2: reloj,
  //   label: "MESA",
  //   input: "8",
  // },
  // {
  //   icon2: circuloRosa,
  //   label: "ASIENTO",
  //   input: "3-5",
  // },
];

export const programa = [
  {
    icon: iglesiaPrograma,
    hora: "13:45",
    itinerario: "CEREMONIA RELIGIOSA",
  },
  {
    icon: recepcionPrograma,
    hora: "15:00",
    itinerario: "RECEPCIÓN",
  },
  {
    icon: comidaPrograma,
    hora: "16:00",
    itinerario: "COMIDA",
  },
  {
    icon: valsPrograma,
    hora: "19:00",
    itinerario: "VALS",
  },
  /*{
    icon: valsPrograma,
    hora: "20:00",
    itinerario: "BAILE",
  },*/
];

export const familia = [
  {
    titulo1: "CON LA BENDICIÓN DE ",
    titulo2: "Mis Padres",
    nombre1: "Esmeralda Velasco Orta",
    nombre2: "Rubén Rodríguez Hernández ",
  },
  {
    titulo1: "PADRINOS DE VELACIÓN",
    titulo2: "Mi Padrino",
    nombre1: "Oscar Angeles Velasco"
  },
];

export const Invitados = [
  {
    id: 1,
    nombre: "Ricardo Mtz y Esposa",
    adultos: 2,
  },
];
