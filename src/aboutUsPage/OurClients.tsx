import SectionIntro from "../components/SectionIntro";

function OurClients() {
  return (
    <section className="container m-auto px-4 py-8 md:py-16 xl:px-10">
      <SectionIntro
        stars={true}
        title="Our Valued Clients"
        description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
      />
    </section>
  );
}

export default OurClients;
