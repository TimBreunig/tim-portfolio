import CardGrid from "@/components/CardGrid";

const Work = () => {
  return (
    <section
        id ="work"
        className="container-wide pb-12 pt-36 z-10">
        <h2 className="h2 text-left mb-8 text-primary-100">Featured Work<span className="accent-dot">.</span></h2>
          <CardGrid />
      </section>
  );
};

export default Work;