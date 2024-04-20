import { confirmaciones } from "../constants/index";
import { separador } from "../assets/icons";
import { Link } from "react-router-dom";

const Confirmacion = () => (
  <section className="flex justify-center">
    <div className="flex flex-col justify-center items-center pt-8 pb-3 border-double border-dark-pink border-4 text-center">
      <div>
        <div data-aos="fade-right">
          <h2 className="font-mea text-3.5xl text-center text-dark-brown md:text-6xl">
            Confirmación de asistencia
          </h2>
        </div>
      </div>
      <img
        src={separador}
        alt="Separador"
        className="w-[150px] md:w-[300px] md:mb-11 mb-8"
      />
      <div className="flex flex-wrap gap-5 justify-center px-3 md:px-10 md:gap-9">
        {confirmaciones.map((confirmacion, index) => (
          <div key={index}>
            <div className="flex flex-col border-dark-pink border-4 justify-center items-center px-8 py-8 mb-5 w-[300px] shadow-3xl">
              <img
                src={confirmacion.icon}
                alt={confirmacion.titulo1}
                className="w-[50px] h-[50px]"
                data-aos="zoom-out-up"
              />

              <h3 className="font-sofia text-base py-2">
                {confirmacion.titulo1}
              </h3>

              <h2 className="font-mea text-2xl py-3">{confirmacion.titulo2}</h2>
              {confirmacion.hora && (
                <div className="flex p-2 items-center ">
                  <img
                    src={confirmacion.icon}
                    alt="hora"
                    className="w-[17px] h-[17px]"
                  />
                  <p className="font-montserrat text-sm ml-2">
                    {confirmacion.hora} HRS
                  </p>
                </div>
              )}
              <div data-aos="flip-up">
                <Link
                  target={"_blank"}
                  to={confirmacion.url1}
                  className="pink_gradient flex justify-around items-center border-2 border-dark-brown rounded-2xl p-1 mb-3 w-[150px]"
                >
                  <img
                    src={confirmacion.icon3}
                    alt="gps"
                    className="w-[20px] h-[20px]"
                  />
                  {confirmacion.btn1}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Confirmacion;
