import SectionIntro from "../components/SectionIntro";

interface Achievement {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "3+ Years of Excllence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

function OurAchievments() {
  return (
    <section className="container m-auto px-4 py-8 sm:py-16 xl:px-10">
      <SectionIntro
        stars={true}
        title="Our Achievments"
        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
      />

      <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
        {achievements.map(({ title, description }) => (
          <div
            className="ring-grey-10 border-grey-15 rounded-lg border p-6 ring-6 lg:p-10"
            key={title}
          >
            <h4 className="mb-2.5 text-2xl font-semibold">{title}</h4>
            <p className="text-grey-60 text-lg">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurAchievments;
