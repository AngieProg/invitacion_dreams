import { useEffect } from "react";
import {
  Contador,
  Familia,
  Invitado,
  Message,
  Ubicaciones,
  Programa,
  Hero,
  Confirmacion,
  Regalos,
  CodigoVestimenta
} from "./sections";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <main>
      <Hero />
      <section>
        <Message />
      </section>
      <section>
        <Programa />
      </section>
      <Invitado />
      <section>
        <Familia />
      </section>
      <section>
        <Ubicaciones />
      </section>
      <section>
        <Contador />
      </section>
      <section className="padding">
        <CodigoVestimenta />
      </section>
      <section>
        <Regalos />
      </section>
      <section className="padding">
        <Confirmacion />
      </section>
    </main>
  );
};

export default App;
