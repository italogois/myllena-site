import serviceData from "../../data/services";

function Services() {
  return (
    <section className="services">
      <div className="container mx-auto md:max-w-5xl">
        <h2 className="text-center">Serviços</h2>
        <div className="text-center mt-8">
          Sed imperdiet lorem nec lectus cursus, ut lacinia enim malesuada.
          Vestibulum a ipsum ac dolor consequat dapibus ac nec ligula. Aenean
          ipsum magna, ultricies eu quam at, mollis ornare est. Proin a tellus
          vestibulum, cursus massa vel, egestas urna.
        </div>

        <div>
          {serviceData.map((data) => {
            return <div key={data.id}>{data.name}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
