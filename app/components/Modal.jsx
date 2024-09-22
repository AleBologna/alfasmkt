import Image from "next/image";
const Modal = ({ show, onClose, alfa }) => {
  if (!show) return null;

  const handleClose = (e) => {
    if (e.target.id === "modal-container") onClose();
  };

  return (
    <div
      id="modal-container"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      {alfa.name === "DISEÑO" ? (
        <div className="w-2/3 h-[420px] p-4 rounded shadow-lg bg-[url('/images/fondoServicios.png')] bg-cover mt-20 md:mt-0 lg:w-[700px] ">
          <div className="flex justify-between items-center ">
            <img
              src="/images/logo.png"
              alt="Webnova Logo"
              className="w-[70px]  md:w-[130px]"
            />
            <img
              src={alfa.image}
              alt="Imagen Diseño"
              className="w-[50px]  md:w-[70px]"
            />
          </div>
          <div className="md:mt-4">
            <h2 className="text-2xl mb-1 text-white text-center font-bold md:text-5xl md:mb-4">
              {alfa.name}
            </h2>
            <div className="text-center text-sm md:text-base">
              <p className="font-bold text-white">{alfa.title1}</p>
              <p className="text-white">{alfa.description1}</p>
              <p className="font-bold text-white">{alfa.title2}</p>
              <p className="text-white">{alfa.description2}</p>
            </div>
            <div className="flex flex-col gap-3  items-center mt-4 md:flex-row md:justify-center">
              <a
                target="_blank"
                href="/Diseño.pdf"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Contrato</span>
              </a>
              <button
                className=" bg-red-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : alfa.name === "MARKETING Y FINANZAS" ? (
        <div className="w-2/3 h-[420px] p-4 rounded shadow-lg bg-[url('/images/fondoServicios.png')] bg-cover mt-20 md:mt-0 md:h-[500px] lg:w-[700px] ">
          <div className="flex justify-between items-center ">
            <img
              src="/images/logo.png"
              alt="Webnova Logo"
              className="w-[70px]  md:w-[130px]"
            />
            <img
              src={alfa.image}
              alt="Imagen Diseño"
              className="w-[50px]  md:w-[70px]"
            />
          </div>
          <div className="md:mt-4">
            <h2 className="text-2xl mb-1 text-white text-center font-bold md:text-5xl md:mb-4">
              {alfa.name}
            </h2>
            <div className="text-center text-sm md:text-base">
              <p className="font-bold">{alfa.title1}</p>
              <p className="hidden md:block">{alfa.description1}</p>
              <p className=" font-bold">{alfa.title2}</p>
              <p className="hidden md:block">{alfa.description2}</p>
              <p className="font-bold">{alfa.title3}</p>
              <p className="hidden md:block">{alfa.description3}</p>
              <p className="font-bold">{alfa.title4}</p>
              <p className="font-bold">{alfa.title5}</p>
            </div>
            <div className="flex flex-col gap-3  items-center mt-4 md:flex-row md:justify-center">
              <a
                target="_blank"
                href="/Marketing_y_Finanzas.pdf"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Contrato</span>
              </a>
              <button
                className=" bg-red-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-2/3 h-[420px] p-4 rounded shadow-lg bg-[url('/images/fondoServicios.png')] bg-cover mt-20 md:mt-0 md:h-[500px] lg:w-[700px] ">
          <div className="flex justify-between items-center ">
            <img
              src="/images/logo.png"
              alt="Webnova Logo"
              className="w-[70px]  md:w-[130px]"
            />
            <img
              src={alfa.image}
              alt="Imagen Diseño"
              className="w-[50px]  md:w-[70px]"
            />
          </div>
          <div className="md:mt-4">
            <h2 className="text-2xl mb-1 text-white text-center font-bold md:text-5xl md:mb-4">
              {alfa.name}
            </h2>
            <div className="text-center text-sm md:text-base">
              <p className="font-bold">{alfa.title1}</p>
              <p className="hidden md:block">{alfa.description1}</p>
              <p className=" font-bold">{alfa.title2}</p>
              <p className="hidden md:block">{alfa.description2}</p>
              <p className="font-bold">{alfa.title3}</p>
              <p className="font-bold">{alfa.title4}</p>
            </div>
            <div className="flex flex-col gap-3  items-center mt-4 md:flex-row md:justify-center">
              <a
                target="_blank"
                href="/Desarrollo_Web.pdf"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Contrato</span>
              </a>
              <button
                className=" bg-red-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
