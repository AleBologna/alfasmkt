import Image from "next/image";
import { useState } from "react";
import Modal from "../components/Modal";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function OurServices() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAlfa, setSelectedAlfa] = useState(null);

  const alfas = [
    {
      id: 1,
      name: "DISEÑO",
      description: "¿Buscás mejorar visualmente tu marca?",
      image: "/images/diseño_sin_fondo.png",
      modalimage: "/images/logo.png",
      title1: "Creación de contenido para redes sociales",
      description1:
        "Historias/Estados - Reels - Publicaciones - Destacadas - Esteticidad.",
      title2: "Remodelación de marca",
      description2:
        "Logos, banners, identidad de marca, paleta de colores, tipografía y merchandising",
    },
    {
      id: 2,
      name: "MARKETING Y FINANZAS",
      description: "¿Buscás desarrollar de una manera eficiente tu marca?",
      image: "/images/finanza_sin_fondo.png",
      modalimage: "/images/logo.png",
      title1: "Servicios de análisis de mercado",
      description1:
        "Identificación de publico objetivo y competencias, preferencias de los clientes.",
      title2: "Servicio análisis FODA",
      description2:
        "Identificación de Fortalezas, Oportunidades, Debilidades y Amenazas.",
      title3: "Servicio de planificación financiera",
      description3:
        "Encontrar la rentabilidad del negocio identificando todos los gastos e ingresos, para poder hacer un análisis sobre los costos de producción y ajustar los precios.",
      title4: "Estrategias de retención de clientes",
      title5: "Servicios de Formularios",
    },
    {
      id: 3,
      name: "DESARROLLO WEB",
      description: "¿Buscás una pagina web profesional para tu marca?",
      image: "/images/web_sin_fondo.png",
      modalimage: "/images/logo.png",
      title1: "Creación de Página web + Mantenimiento",
      description1:
        "Incluye una página donde se pueden crear artículos, crear usuarios, eliminar usuarios, registrar e iniciar sesión los clientes, ver catálogo de productos, etc.",
      title2: "Creación de Landing Page + Mantenimiento",
      description2:
        "Incluye una vista de el catálogo de productos con precio e información sobre el lugar.",
      title3: "Asesoramiento de Página Web",
      title4: "Desarrollo de tips y mejoras para la página web.",
    },
  ];

  const handleShowModal = (alfa) => {
    setSelectedAlfa(alfa);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <section
        id="ourServicesSection"
        className="h-full w-full bg-[url('/images/background.png')] bg-cover flex flex-col"
      >
        <div className="h-full flex flex-row flex-wrap py-10 px-2 justify-center ">
          <div className="flex flex-row flex-wrap justify-center">
            {alfas.map((alfa) => (
              <div key={alfa.id} className="mb-4">
                <div className="w-64 h-96 mx-3 my-4 px-6 py-6 hover:scale-110 duration-500 bg-[url('/images/background.png')]">
                  <div className="h-1/2 flex flex-col justify-around">
                    <h3 className="text-2xl text-white font-bold text-center">
                      {alfa.name}
                    </h3>
                    <p className="text-base text-white text-center">
                      "Servicios"
                    </p>

                    <p className="my-6 text-white text-base text-center">
                      {alfa.description}
                    </p>
                  </div>

                  <div className="h-1/2 py-4 flex flex-col items-center justify-center">
                    <div className="h-3/4 flex flex-col justify-center">
                      <Image
                        src={alfa.image}
                        width={90}
                        height={60}
                        alt="WebNova Logo"
                      />
                    </div>
                    <div className="flex justify-center my-4">
                      <button
                        className="text-white px-4 rounded flex items-center gap-1"
                        onClick={() => handleShowModal(alfa)}
                      >
                        Ver más
                        <IoIosArrowDroprightCircle size={20} color="#fff" />
                      </button>
                    </div>
                  </div>
                </div>

                <Modal
                  show={showModal}
                  onClose={handleCloseModal}
                  alfa={selectedAlfa}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-4 w-full bg-slate-800"></div>
    </div>
  );
}
