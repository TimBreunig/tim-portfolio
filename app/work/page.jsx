import CardGrid from "@/components/CardGrid";
import MotionHeading from "@/components/MotionHeading";

const Work = () => {
    return (
      <section
          id ="work"
          className="container-wide pb-12 pt-24 z-10">
          <MotionHeading as="h2" className="text-primary-100 text-left">Featured Work<span className="accent-dot">.</span></MotionHeading>
          <CardGrid showCompact={false} />
        </section>
    );
};

export default Work;