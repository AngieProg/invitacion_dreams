import { mono, regalo, sobreRegalo } from "../assets/images";

const Regalo = () => {
  return (
    <div className="bg-primary relative flex flex-col justify-center h-[100vh] items-center">
      {/* <img src={mono} alt="adorno moño" className="w-full" /> */}
        <h1
          className="font-mea text-4xl mb-2 mt-3 text-center text-dark-blue md:text-6xl"
          data-aos="fade-left"
        >
          Mesa de Regalos
        </h1>
        <p className="font-mea text-3xl px-8 text-center text-dark-blue md:text-2xl md:w-[500px] md:mt-5">
        Mi mejor regalo es compartir contigo este gran día. Si deseas regalarme algo lo sabre apreciar
        </p>
        {/* <img
          src={regalo}
          alt="regalo"
          className="w-[60px] h-[60px]"
        /> */}
        <p className="info-text">O puedo sugerirte la siguiente opción</p>
        {/* <img
          src={sobreRegalo}
          alt="regalo"
          className="w-[60px] h-[60px]"
        /> */}
        <p className="info-text font-bold">Lluvia de sobres</p>
      </div>
    
  );
};

export default Regalo;
