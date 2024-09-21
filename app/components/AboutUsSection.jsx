import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div>
      <section
        id="aboutUsSection"
        className="h-full w-full bg-[url('/images/background.png')] bg-cover flex flex-col py-10"
      >
        <div className="flex justify-center py-10 text-6xl text-[#2D4C9C] font-semibold">
          <h1 className="text-center">¡NUESTRO EQUIPO!</h1>
        </div>
        <div className="flex justify-center my-6 gap-12 flex-wrap">
          <div className="flex flex-col justify-center items-center gap-1">
            <div>
              <Image
                className="rounded-[100%]"
                src="/images/temporal.png"
                width={150}
                height={150}
                alt="AGUSTIN HERRERA"
              />
            </div>
            <p>AGUSTIN HERRERA</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div>
              <Image
                className="rounded-[100%]"
                src="/images/temporal.png"
                width={150}
                height={150}
                alt="LAUTARO MADRIÑAN"
              />
            </div>
            <p>LAUTARO MADRIÑAN</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div>
              <Image
                className="rounded-[100%]"
                src="/images/temporal.png"
                width={150}
                height={150}
                alt="FACUNDO MADRIÑAN"
              />
            </div>
            <p>FACUNDO MADRIÑAN</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div>
              <Image
                className="rounded-[100%]"
                src="/images/temporal.png"
                width={150}
                height={150}
                alt="ALEJANDRO BOLOGNA"
              />
            </div>
            <p>ALEJANDRO BOLOGNA</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="rounded-xl">
              <Image
                className="rounded-[100%]"
                src="/images/temporal.png"
                width={150}
                height={150}
                alt="SANTIAGO HUMENIUK"
              />
            </div>
            <p>SANTIAGO HUMENIUK</p>
          </div>
        </div>
      </section>
      <div className="h-4 w-full bg-slate-800"></div>
    </div>
  );
}
