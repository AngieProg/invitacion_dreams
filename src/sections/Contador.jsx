import { bici } from "./../assets/images";
import Reloj from "./../components/Reloj";
import { useState, useEffect } from "react";

const Contador = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //End of time
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "¡Hoy es el gran día!",
  });

  const targetDate = new Date("april 27, 2024 13:00:00");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.max(
        Number(targetDate) - Number(currentTime),
        0
      );

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (timeDifference === 0) {
        clearInterval(timerInterval);
        setShowEndScreen({ ...showEndScreen, show: true });
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Cleanup the interval when the component unmounts.
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-soft-pink">
      {/* Titulo */}
      <div data-aos="fade-right">
        {showEndScreen.show ? (
          <h3 className="font-mea text-4xl px-14 py-4 md:text-6xl">
            {showEndScreen.message}
          </h3>
        ) : (
          <div
            className="flex flex-col items-center pt-6"
            data-aos="fade-right"
          >
            <h1 className="font-mea text-4xl mb-1 text-dark-brown md:text-6xl">
              ¡Solo Faltan!
            </h1>
          </div>
        )}
      </div>

      {/* Circulos con tiempo y medidas de tiempo */}
      <div className="flex flex-wrap justify-between items-center w-[300px] mb-3 md:w-[500px]">
        <Reloj tiempo={time.days} medida="Dìas" />

        <Reloj tiempo={time.hours} medida="Horas" />

        <Reloj tiempo={time.minutes} medida="Minutos" />

        <Reloj tiempo={time.seconds} medida="Segundos" />
      </div>

      {/* Imagenes centrales */}
      <div className="flex w-[390px] h-[320px] md:w-[900px] md:h-[500px] mt-3 mb-5  justify-center">
        <img
          src={bici}
          alt="chica en bici"
          className="w-[200px] h-[320px] md:w-[400px] md:h-[500px]"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Contador;
