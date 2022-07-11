import Image from "next/image";
import serviceData from "../../data/services";

function Services() {
  return (
    <section className="services pt-8 pb-20 bg-grey">
      <div className="container mx-auto px-8 xl:max-w-7xl">
        <h2 className="text-center text-3xl xl:text-4xl">Serviços</h2>
        <div className="text-center my-12">
          Sed imperdiet lorem nec lectus cursus, ut lacinia enim malesuada.
          Vestibulum a ipsum ac dolor consequat dapibus ac nec ligula. Aenean
          ipsum magna, ultricies eu quam at, mollis ornare est. Proin a tellus
          vestibulum, cursus massa vel, egestas urna.
        </div>

        <div className="grid gap-16 mt-8 md:grid-cols-2">
          {serviceData.map((data) => {
            return (
              <div key={data.id}>
                <Image
                  alt={data.name}
                  src={data.image}
                  width="580"
                  height="315"
                  layout="responsive"
                  className="rounded-2xl"
                />
                <h4 className="my-5 text-center">{data.name}</h4>
                <div>{data.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
