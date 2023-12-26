import { textContent } from "~/content/textContent";

const About = () => {
  const { description } = textContent.about;
  const { enterpriseName } = textContent;
  return (
    <section
      id="about"
      className="md:p-12 md:px-20 flex flex-col gap-8 bg-gray-700 bg-opacity-25 p-8 lg:flex-row"
    >
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-xl font-semibold">{enterpriseName}</h2>
        <p className="text-md font-extralight">{description}</p>
      </div>
    </section>
  );
};

export default About;
