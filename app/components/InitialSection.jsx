import Image from "next/image";

export default function InitialSection() {
  return (
    <>
      <section
        id="initialSection"
        className="bg-[url('/images/background.png')] bg-cover flex flex-col sm:flex-row py-10 px-4"
      >
        <div className="h-full px-12 sm:w-7/12 sm:px-26 md:px-28">
          <div className="h-full flex flex-col justify-between items-center ">
            <div className="w-full mt-32 sm:mt-36">
              <div className="flex justify-center items-center">
                <span className=" text-white text-5xl text-center font-bold tracking-wide sm:text-6xl">
                  ALFAS MKT
                </span>
              </div>
              <p className="text-white text-center mt-3 sm:mt-8 text-xl md:text-2xl md:text-left">
                SOMOS UNA AGENCIA DE DISEÑO LA CUAL SE ESPECIALIZA EN VARIOS
                CAMPOS
              </p>
            </div>

            <div className="w-full my-5 flex justify-center sm:flex-row sm:items-end sm:my-11">
              <a href="#ContactUsSectionx">
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
                >
                  CONTACTANOS
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mr-16 hidden flex-col md:flex justify-center items-center h-auto w-full  sm:flex sm:justify-center sm:h-auto sm:w-5/12">
          <Image
            src="/images/celular.png"
            alt="imagen tecnologia chico sentado"
            width={550}
            height={550}
            className="mt-0 md:mt-20"
          ></Image>
        </div>
      </section>
      <div className="h-4 w-full bg-slate-800"></div>
    </>
  );
}
