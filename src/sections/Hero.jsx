import { letraS, mainInferiro, mainSuperior } from "../assets/images";
import Sobre from "./Sobre";
import { fecha } from "../constants";

const Hero = () => {
  return (
    <section className="pink_gradient relative flex flex-col justify-center h-[100vh] items-center">
      {/* Boton play/pausa de música */}
      <div className="fixed items-end cursor-pointer z-10 right-[20px] bottom-[60px]">
        <Sobre />
      </div>
      {/* Imagenes top y bottom */}
      <img
        src={mainSuperior}
        alt="adorno superior"
        className="w-full h-[220px] top-0 absolute"
      />
      <img
        src={mainInferiro}
        alt="adorno inferior"
        className="w-full h-[170px] bottom-0 absolute "
      />

      <div className="flex items-center justify-end">
        <h2
          className="font-mea text-[60px] text-dark-brown md:text-4xl z-10"
          //data-aos="fade-left"
        >
          Mis XV
        </h2>
      </div>
      <div className="flex justify-center items-end mb-5">
        <img
          src={letraS}
          className="w-[180px] h-[180px] md:w-[50px] md:h-[50px]"
        />
        <h1 className="font-mea text-[140px]  text-dark-brown md:text-[75px]">
          arita
        </h1>
      </div>
      <p className="info-text mb-5">MAYO <span className="semibold text-3.5xl">25</span> 2025</p>
      <p className="info-text font-medium uppercase z-10">Capilla Terraza Real</p>
    </section>
  );
};

export default Hero;
