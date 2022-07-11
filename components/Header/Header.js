import Image from "next/image";
import logo from "../../public/logo.svg";
import photomyllena from "../../public/photo-myllena.png";
import whatsapp from "../../public/whatsapp.svg";
import s from "./header.module.scss";

function Header() {
  return (
    <>
      <header className={s.header}>
        <div className="container px-8 mx-auto">
          <div className="flex flex-col-reverse gap-8 md:flex-row">
            <div className="md:w-full xl:w-1/2">
              <Image src={logo} alt="logomarca Myllena" />

              <div className="mt-16">
                <h1 className="text-4xl  xl:text-5xl">
                  Lorem ipsum dolor sit amet
                </h1>
                <div className="text-xl  xl:text-2xl mt-3">
                  Formada pela Estacio, com especialidade em quiropraxia também
                  atuando a domícilio com fisioterapia
                </div>
                <a
                  target="_blank"
                  title="Abrir conversa no whatsapp 5579996877168"
                  className="transition-all mt-8 flex items-center justify-center gap-3 font-medium bg-green w-60 p-4 rounded-full hover:bg-green-dark"
                  href="https://api.whatsapp.com/send?phone=5579996877168"
                  rel="noreferrer"
                >
                  <Image
                    src={whatsapp}
                    alt="icone whatsapp"
                    width="30"
                    height="30"
                  />
                  Enviar mensagem
                </a>
              </div>
            </div>

            <div className="flex-grow">
              <Image src={photomyllena} alt="logomarca Myllena" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
