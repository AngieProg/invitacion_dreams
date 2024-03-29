import { brumaFamilia, manosPadres, manosPadrino } from "../assets/images";

const Familia = () => {
  return (
    <div className="relative h-[100vh] flex flex-col md:flex-row md:gap-8 items-center justify-center bg-soft-pink pt-10 pb-5 xl:px-3 xl:py-20">
      <img
        src={manosPadrino}
        alt="manos padrino"
        className="absolute top-[100px] w-[200px] h-[200px]"
        data-aos="zoom-in"
      />
      <img
        src={manosPadres}
        alt="manos papas"
        className="absolute bottom-11 w-[200px] h-[200px]"
        data-aos="zoom-in"
      />
      <img
        src={brumaFamilia}
        alt="fondo rosa"
        className="absolute w-[100%] h-[80%]"
        data-aos="zoom-in"
      />
      <h2 className="font-sofia text-3xl px-3 text-center text-dark-brown md:text-3xl mb-3">
        Mis Padres
      </h2>
      <h1
        className="font-mea text-4xl mb-11 text-center text-dark-brown md:text-6xl"
        data-aos="fade-left"
      >
        Esmeralda Velasco Orta <br /> &<br /> Rubén Rodriguez
      </h1>
      <h2 className="font-sofia text-3xl px-3 text-center text-dark-brown md:text-3xl mb-1">
        Mi Padrino
      </h2>
      <h1
        className="font-mea text-4xl mb-2 text-center text-dark-brown md:text-6xl"
        data-aos="fade-left"
      >
        Oscar Ángeles Velasco
      </h1>
    </div>
  );
};

export default Familia;
