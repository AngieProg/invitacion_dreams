import { adornoDoradoDer, adornoDoradoIzq, brumaFamilia, manosPadres, manosPadrino } from "../assets/images";

const Familia = () => {
  return (
    <div className="relative h-[100vh] flex flex-col md:flex-row md:gap-8 items-center justify-center bg-soft-pink pt-10 pb-5 xl:px-3 xl:py-20">
       {/* Imagenes top y bottom */}
       <img
        src={adornoDoradoIzq}
        alt="adorno superior"
        className="w-full h-[60px] top-0 absolute"
      />
      <img
        src={adornoDoradoDer}
        alt="adorno inferior"
        className="w-full h-[60px] bottom-0 absolute "
      />
       <img
        src={brumaFamilia}
        alt="adorno central"
        className="w-[370px] h-[370px] absolute"
      /> 
      <img
        src={manosPadrino}
        alt="manos padrino"
        className="absolute top-[70px] right-[30px] w-[150px] h-[150px] md:right-[250px] md:w-[250px] md:h-[250px]"
        data-aos="zoom-in"
      />
      <img
        src={manosPadres}
        alt="manos papas"
        className="absolute bottom-6 left-[30px] w-[150px] h-[150px] md:w-[250px] md:h-[250px] md:left-[250px]"
        data-aos="zoom-in"
      /> 
      <div className="z-10 font-bold">
      <h2 className="font-sofia text-2xl px-3 text-center text-dark-brown md:text-3xl mb-3">
        Mis Padres
      </h2>
      <h1
        className="font-mea text-3xl mb-6 text-center text-dark-brown md:text-6xl"
        data-aos="fade-left"
      >
        Esmeralda Velasco Orta <br /> &<br /> Rubén Rodriguez
      </h1>
      <h2 className="font-sofia text-2xl px-3 text-center text-dark-brown md:text-3xl mb-1">
        Mi Padrino
      </h2>
      <h1
        className="font-mea text-3xl mb-2 text-center text-dark-brown md:text-6xl"
        data-aos="fade-left"
      >
        Oscar Ángeles Velasco
      </h1>
      </div>
    </div>
  );
};

export default Familia;
