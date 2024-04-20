import { Parallax } from "react-parallax";
import { fotoBackground } from "../assets/images";
import { mensaje } from "../constants";

const Message = () => (
  <Parallax
    bgImage={fotoBackground}
    strength={800}
    className="relative h-[100vh]"
  >
    <div
      className="flex items-center justify-center absolute h-[100vh] w-[100%]"
      data-aos="zoom-in"
    >
      <p className="bg-soft-pink opacity-65 font-mea text-2xl py-5 px-8 text-justify md:text-4xl md:px-[100px] md:py-10">
        {mensaje}
      </p>
    </div>
  </Parallax>
);

export default Message;
