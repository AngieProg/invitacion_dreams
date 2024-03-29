import { letraS } from "../assets/images";
//import Song from "../components/Song";
import Sobre from "./Sobre";

const Hero = () => {
  return (
    <section className="pink_gradient relative flex flex-col justify-center h-[100vh] items-center">
      {/* Boton play/pausa de música */}
      <div className="fixed items-end cursor-pointer right-[40px] bottom-[140px]">
        <Sobre />
      </div>

      <h2
        className="font-monserrat text-3xl mb-3  text-dark-brown md:text-4xl"
        data-aos="fade-left"
      >
        MIS XV
      </h2>
      <div className="flex justify-center items-start">
        <img
          src={letraS}
          className="w-[200px] h-[200px] md:w-[50px] md:h-[50px]"
        />
        <h1 className="font-mea text-[130px] text-dark-brown md:text-[75px]">
          arita
        </h1>
      </div>

      <p>Mayo 25 2024</p>
      <p>Capilla Terraza Real</p>
    </section>
  );
};

export default Hero;
