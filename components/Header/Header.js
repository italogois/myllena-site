import Image from "next/image";
import logo from "../../public/logo.svg";
import photomyllena from "../../public/photo-myllena.png";
import s from "./header.module.scss";

function Header() {
  return (
    <>
      <header className={s.header}>
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 md:flex-row">
            <div>
              <Image src={logo} alt="logomarca Myllena" />

              <div className="mt-16">
                <h1>Lorem ipsum dolor sit amet</h1>
                <div className="text-2xl mt-2">
                  formada pela Estacio, com especialidade em quiropraxia também
                  atuando a domícilio com fisioterapia
                </div>
              </div>
            </div>

            <div>
              <Image src={photomyllena} alt="logomarca Myllena" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
