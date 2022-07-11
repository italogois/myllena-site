import Image from "next/image";
import instagram from "../../public/instagram.svg";
import whatsapp from "../../public/whatsapp.svg";

function Contact() {
  return (
    <>
      <footer className="bg-grey">
        <div className="container mx-auto px-8 py-10 xl:py-20 xl:max-w-7xl">
          <h2 className="mb-10 text-center text-3xl xl:text-4xl">
            Vamos conversar e agendar um horário
          </h2>
          <div className="flex gap-8 flex-col items-center justify-center md:justify-evenly md:flex-row">
            <div className="flex items-center gap-4 font-medium">
              <Image
                src={whatsapp}
                alt="icone whatsapp"
                width="40"
                height="40"
              />
              (79) 99687-7168
            </div>
            <div className="flex items-center gap-4 font-medium">
              <Image
                src={instagram}
                alt="icone instagram"
                width="40"
                height="40"
              />
              /fisio_myllena
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
