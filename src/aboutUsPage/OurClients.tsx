import LinkButton from "../components/LinkButton";
import PrevNextButtons from "../components/PrevNextButtons";
import SectionIntro from "../components/SectionIntro";
import useDataSize from "../hooks/useDataSize";

const clients = [
  {
    id: 1,
    since: "2019",
    name: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estaten's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    website: "https://abc-corp.com",
  },
  {
    id: 2,
    since: "2018",
    name: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estaten's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    website: "https://greentech-enterprises.com",
  },
  {
    id: 3,
    since: "2020",
    name: "UrbanVista Group",
    domain: "Residential Real Estate",
    category: "High-Rise Apartments",
    testimonial:
      "Thanks to Estaten, we secured key properties in high-demand areas. Their market insights are second to none.",
    website: "https://urbanvista.com",
  },
  {
    id: 4,
    since: "2021",
    name: "BlueSky Holdings",
    domain: "Industrial Real Estate",
    category: "Warehousing & Logistics",
    testimonial:
      "Estaten helped us locate optimal warehouse locations, boosting our operational efficiency significantly.",
    website: "https://blueskyholdings.com",
  },
  {
    id: 5,
    since: "2017",
    name: "NovaBuild Inc.",
    domain: "Commercial Real Estate",
    category: "Mixed-Use Development",
    testimonial:
      "Our collaboration with Estaten was a turning point. Their strategic approach to property acquisition accelerated our project timelines.",
    website: "https://novabuild.com",
  },
];

function OurClients() {
  const { index, maxIndex, start, visibleItems, setIndex } = useDataSize(
    clients,
    2,
  );

  return (
    <section className="container m-auto px-4 py-8 md:py-16 xl:px-10">
      <SectionIntro
        stars={true}
        title="Our Valued Clients"
        description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
      />

      <div className="text-white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {visibleItems.map((client) => (
            <div
              className="border-grey-15 ring-grey-10 flex flex-col gap-8 rounded-lg border p-6 ring-6"
              key={client.id}
            >
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center md:gap-0">
                <div>
                  <p className="text-grey-60 mb-2.5">Since {client.since}</p>
                  <p className="text-[20px] font-semibold">{client.name}</p>
                </div>
                <LinkButton to="" buttonType="">
                  Visit Website
                </LinkButton>
              </div>
              <div className="flex gap-10">
                <p className="text-lg">
                  <span className="text-grey-60 block text-[15px]">Domin</span>
                  {client.domain}
                </p>
                <p className="text-lg">
                  <span className="text-grey-60 block text-[15px]">
                    Category
                  </span>
                  {client.category}
                </p>
              </div>
              <p className="border-grey-15 rounded-lg border p-4 text-lg">
                <span className="text-grey-60 mb-2.5 block text-[15px]">
                  What They Said 🤗
                </span>
                {client.testimonial}
              </p>
            </div>
          ))}
        </div>
        <PrevNextButtons
          maxIndex={maxIndex}
          setIndex={setIndex}
          start={start}
          index={index}
        />
      </div>
    </section>
  );
}

export default OurClients;
