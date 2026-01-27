import CardGrid from "@/components/CardGrid";
import MotionHeading from "@/components/MotionHeading";

const Work = () => {
    return (
      <section
          id ="work"
          className="container-wide pb-12 pt-24 z-10">
          <CardGrid showCompact={false} />
        </section>
    );
};

export default Work;