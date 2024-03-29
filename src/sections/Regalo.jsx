import { mono, regalo } from "../assets/images";

const Regalo = () => {
  return (
    <div className="bg-primary relative flex flex-col justify-center h-[100vh] items-center">
      {/* <img src={top} alt="adorno top" className="absolute top-0 z-5" />
      <img src={down} alt="adorno down" className="absolute bottom-0" /> */}
      {/* <img
        src={mono}
        alt="moño rosa"
        className="absolute z-10 top-[70px] w-[100%] h-[250px]"
        data-aos="zoom-in"
      /> */}
      {/* <img
        src={regalo}
        alt="regalo"
        className="w-[150px] h-[150px] absolute bottom-[150px] right-0 z-15"
        data-aos="zoom-in"
      /> */}

      {/* {familiar.nombre1}
            <br /> &<br /> {familiar.nombre2} */}
      <div className="z-20">
        <h1
          className="font-mea text-4xl mb-2 mt-3 text-center text-dark-blue md:text-6xl"
          data-aos="fade-left"
        >
          Mesa de Regalos
        </h1>
        <p className="font-mea leading-relaxed text-3xl px-8 text-center text-dark-blue md:text-2xl md:w-[500px] md:mt-5">
          Agradecemos de antemano su presencia en nuestra celebración, su
          compañía es el mejor regalo que podemos recibir, pero si quisieras
          llevar un regalo, puedes hacer una contribución en efectivo
          depositando el sobre en el buzón de regalos.
        </p>
      </div>
    </div>
  );
};

export default Regalo;
