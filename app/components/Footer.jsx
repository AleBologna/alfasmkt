import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-16 bg-[#191128] flex justify-between px-7">
      <div className="flex justify-center items-center">
        <p className="text-[#99C1DA] font-semibold">
          Copyright © 2024 - alfas.marketing. Todos los derechos reservados.
        </p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <a target="_blank" href="mailto:alfasmkt5@gmail.com">
          <CgMail size={35} color="#2D4C9C" />
        </a>
        <a target="_blank" href="https://www.instagram.com/alfas_mkt/">
          <FaInstagram size={35} color="#2D4C9C" />
        </a>
        <a target="_blank" href="http://wa.me/+541126759098">
          <FaWhatsapp size={35} color="#2D4C9C" />
        </a>
      </div>
    </div>
  );
}
