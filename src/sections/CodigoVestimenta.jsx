import { CodigoVestimenta } from "../constants/index";
import { separador } from "../assets/icons";
import { Link } from "react-router-dom";

const Confirmacion = () => (
  <section className="flex justify-center">
    <div className="flex flex-col justify-center items-center pt-8 pb-3 border-double border-dark-pink border-4 text-center">
      <div>
        <div data-aos="fade-right">
          <h2 className="font-mea text-3.5xl text-center text-dark-brown md:text-6xl">
            Código de Vestimenta
          </h2>
        </div>
      </div>
      <img
        src={separador}
        alt="Separador"
        className="w-[150px] md:w-[300px] md:mb-11 mb-8"
      />
      <div className="flex flex-wrap gap-5 justify-center px-3 md:px-10 md:gap-9">
        {CodigoVestimenta.map((codigo, index) => (
          <div key={index}>
            <div className="flex flex-col border-dark-pink border-4 justify-center items-center px-8 py-8 mb-5 w-[300px] shadow-3xl">
              <img
                src={codigo.icon}
                alt={codigo.titulo1}
                className="w-[50px] h-[50px]"
                data-aos="zoom-out-up"
              />

              <h3 className="font-sofia text-base py-2">
                {codigo.titulo1}
              </h3>

              <h2 className="font-mea text-2xl py-3">{codigo.titulo2}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Confirmacion;
