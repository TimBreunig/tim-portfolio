const Imprint = () => {
  return (
	<section className="h-full">
        <div className="mx-auto h-screen xl:pb-24 bg-radial-gradient text-primary-900">
            <div className="container pt-20 xl:pt-0 xl:h-screen flex flex-col xl:flex-row items-center justify-between">
                <div className="mt-12 min-w-full text-left text-base text-primary-800">
                    <h1 className="h1 text-primary-900">
                        Imprint
				    </h1>
                    <p className="mb-6">
                        Information in accordance with Section 5 TMG (German Telemedia Act)
				    </p>
                    <p className="mb-12">
                        Tim Breunig<br />
                        Etivalstraße 52<br />
                        75173 Pforzheim<br />
                        Germany
                    </p>
                    <h2 className="h2 text-primary-900">
                        Contact
				    </h2>
                    <p className="mb-6">
                        E-Mail: <a href="mailto:breunig.tim@web.de">breunig.tim@web.de</a>
				    </p>
                    <p className="mb-12">
                        Responsible for content according to § 55 Abs. 2 RStV:<br />
                        Tim Breunig, address same as above
                    </p>
                    <h2 className="h2 text-primary-900">
                        Disclaimer
				    </h2>
                    <p className="mb-6">
                        Despite careful content control, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for
                        their content. This website is intended for showcasing design work in the context of job applications and is not operated for commercial purposes or
                        revenue generation.
				    </p>
                </div>
		    </div>
        </div>
    </section>
  );
};

export default Imprint;