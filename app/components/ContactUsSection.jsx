import React from "react";
import Form from "./Form";

export default function ContactUsSection() {
  return (
    <section
      id="ContactUsSection"
      className="bg-[url('/images/background.png')] bg-cover h-auto py-8"
    >
      <div className="flex flex-col justify-center items-center mx-1 text-center">
        <h1 className="text-5xl text-white font-semibold mb-3">
          ¡Dejanos tu mensaje!
        </h1>
        <p className="text-xl text-white">
          Para cualquier consulta completa aquí abajo.
        </p>
      </div>

      <Form />
    </section>
  );
}
