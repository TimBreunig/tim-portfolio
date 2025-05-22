const Imprint = () => {
  return (
	<section className="h-full">
        <div className="mx-auto h-screen xl:pb-24 bg-radial-gradient text-primary-900">
            <div className="container h-screen flex flex-col items-center justify-center">
                <div className="mt-12 text-center text-lg text-primary-800">
                    <h1 className="h1 text-primary-900">
                        Imprint
				    </h1>
                    <h2 className="h2 text-primary-900">
                        Angaben gemäß § 5 TMG
				    </h2>
                    <p>
                        Tim Breunig<br />
                        Etivalstraße 52<br />
                        75173 Pforzheim<br />
                        Germany
                    </p>
                    <h2 className="h2 text-primary-900">
                        Contact
				    </h2>
                    <p>
                        <a href="mailto:breunig.tim@web.de">breunig.tim@web.de</a><br />
                        <a href="tel:+49 162 5636484">+49 162 5636484</a>
                    </p>
                </div>
		    </div>
        </div>
    </section>
  );
};

export default Imprint;