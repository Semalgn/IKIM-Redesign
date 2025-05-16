import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";

const About = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 my-5">
        <TitleHeader
          title="Why Choose Us _"
          sub="⭐️ We Deliver"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ name, mentions, review }) => (
            <GlowCard card={{ review }}>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
