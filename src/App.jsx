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
  Regalo,
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
      <Invitado />
      <section>
        <Ubicaciones />
      </section>
      <section>
        <Contador />
      </section>
      {/* <section>
        <Familia />
      </section> */}
      <section>
        <Programa />
      </section>
      {/* <section>
        <Regalo />
        */}
      <section className="padding">
        <Confirmacion />
      </section>
    </main>
  );
};

export default App;
