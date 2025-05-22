const Imprint = () => {
  return (
	<section className="h-full">
        <div className="mx-auto h-screen xl:pb-24 bg-radial-gradient text-primary-900">
            <div className="container pt-20 xl:pt-0 xl:h-screen flex flex-col xl:flex-row items-center justify-between">
                <div className="mt-12 w-full lg:w-2/3 text-left text-lg text-primary-800">
                    <h1 className="h1 text-primary-900">
                        Imprint
				    </h1>
                    <p className="font-bold text-xl mb-12">
                        Information according to § 5 TMG
				    </p>
                    <p className="mb-9">
                        Tim Breunig<br />
                        Etivalstraße 52<br />
                        75173 Pforzheim<br />
                        Germany
                    </p>
                    <h2 className="h2 text-primary-900">
                        Contact
				    </h2>
                    <p className="mb-9">
                        <a href="mailto:breunig.tim@web.de">breunig.tim@web.de</a><br />
                        <a href="tel:+49 162 5636484">+49 162 5636484</a>
                    </p>
                    <p>
                        Source: eRecht24
                    </p>
                </div>
		    </div>
        </div>
    </section>
  );
};

export default Imprint;