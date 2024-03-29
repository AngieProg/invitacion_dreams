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
  //circuloRosa,
} from "./../assets/icons";

import { iglesiaUbicacion, salon } from "./../assets/images";

export const Invitados = [
  {
    id: 1,
    nombre: "Ricardo Mtz y Esposa",
    adultos: 2,
  },
];

export const ubicaciones = [
  {
    img: iglesiaUbicacion,
    icon: iglesia,
    titulo1: "CEREMONIA RELIGIOSA",
    titulo2: "Catedral Toluca de Lerdo",
    icon2: reloj,
    hora: "13:00",
    parrafo: "Av. Independencia 303, Centro, 50000 Toluca de Lerdo, Méx.",
    btn1: "VER EN GPS",
    url1: "https://maps.app.goo.gl/r6GejTonLwqwEt1o6",
    icon3: gps,
  },
  {
    img: salon,
    icon: recepcion,
    titulo1: "RECEPCIÓN",
    titulo2: "Salón Dalias Paris",
    icon2: reloj,
    hora: "15:00",
    parrafo:
      "Calle Ignacio López Rayón Tejocote 320, 50010 Santiago Miltepec, Méx.",
    btn1: "VER EN GPS",
    url1: "https://maps.app.goo.gl/kdzPSM31eNd3YAXs6",
    icon3: gps,
  },
];
export const confirmaciones = [
  {
    icon: whatsapp,
    titulo1: "CONFIRMAR POR",
    titulo2: "Whatsapp",
    btn1: "7221406931",
    btn2: "7228444568",
    url1: "https://wa.me/7221406931",
    url2: "https://wa.me/7228444568",
    icon3: confirmar,
  },
  {
    icon: llamada,
    titulo1: "CONFIRMAR POR",
    titulo2: "Llamada",
    btn1: "7221406931",
    btn2: "7228444568",
    url1: "tel:+527221406931",
    url2: "tel:+527228444568",
    icon3: confirmar,
  },
  /*{
    icon: email,
    titulo1: "CONFIRMAR POR",
    titulo2: "Correo Electrónico",
    btn1: "Enviar",
  },*/
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
    hora: "13:00",
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
    hora: "18:00",
    itinerario: "VALS",
  },
];

export const familia = [
  {
    titulo1: "CON LA BENDICIÓN DE ",
    titulo2: "Mis Padres",
    nombre1: "Maria del Carmen Martínez Valdez ",
    nombre2: "Horacio Pablo Flores",
  },
  {
    titulo1: "PADRINOS DE VELACIÓN",
    titulo2: "Mis Padrinos",
    nombre1: "María Guadalupe Martínez Valdez",
    nombre2: "Rigoberto Baltazar de Santiago",
  },
];
