import { mono, regalo, sobreRegalo } from "../assets/images";

const Programa = () => {
  return (
    <section className="flex flex-col h-[100vh] md:h-[auto] justify-center items-center bg-soft-pink py-4 md:py-11 relative">
       <img src={mono} alt="adorno moño" className="w-full h-[150px] absolute -top-10 md:w-[700px]" />
      <div className="flex flex-col items-center pt-6 z-10">
        <h1
          className="font-mea text-4xl mb-5 text-dark-brown md:text-8xl font-bold"
          data-aos="fade-right"
        >
          Mesa de Regalos
        </h1>
        <p className="font-montserrat text-xl px-2 text-center text-dark-brown md:text-2xl md:w-[500px] md:mt-5 mb-3">
        Mi mejor regalo es compartir contigo este gran día. Si deseas regalarme algo lo sabre apreciar
        </p>
        <img src={regalo} alt="adorno regalo" className="w-[150px] h-[150px] mb-3" data-aos="zoom-out"/>  
        <p className="font-montserrat text-xl px-2 text-center text-dark-brown md:text-2xl md:w-[500px] md:mt-5 mb-3">
        O puedo sugerirte la siguiente opción
        </p>
        <img src={sobreRegalo} alt="adorno regalo" className="w-[100px] h-[100px] mb-3" data-aos="zoom-in"/> 
        <p className="font-mea font-bold text-3xl px-2 text-center text-dark-brown md:text-4xl md:w-[500px] md:mt-5">
        Lluvia de Sobres
        </p> 
      </div>
      
    </section>
  );
};
export default Programa;
