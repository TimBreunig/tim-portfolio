const Imprint = () => {
    return (
        <div>
            <section>
                <div className="container-wide pb-12 pt-36 z-10 bg-primary-900">
                    <h1 className="h1">
                        Imprint<span className="accent-dot">.</span>
                    </h1>

                    <div
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        className="w-full box-border p-8 bg-primary-100 rounded-2xl shadow-md text-primary-900 transition-colors duration-300"
                    >
                        <div className="flex flex-col gap-2 p-8 pb-12 bg-primary-200 rounded-xl">
                            <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Information in accordance with Section 5 TMG (German Telemedia Act)</span>
                            <p className="p-2xl">
                                <h2 className="h5">
                                    Provider<span className="accent-dot">.</span>
                                </h2>
                                Tim Breunig<br />
                                Etivalstraße 52<br />
                                75173 Pforzheim<br />
                                Germany
                            </p><br />
                            <p className="p-2xl">
                                <h2 className="h5">
                                    Contact<span className="accent-dot">.</span>
                                </h2>
                                E-Mail: <a href="mailto:breunig.tim@web.de">breunig.tim@web.de</a>
                                <br />
                                <br />
                                Responsible for content according to § 55 Abs. 2 RStV:<br />
                                Tim Breunig, address same as above
                            </p><br />
                            <p className="p-2xl">
                                <h2 className="h5">
                                    Disclaimer<span className="accent-dot">.</span>
                                </h2>
                                Despite careful content control, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for
                                their content. This website is intended for showcasing design work in the context of job applications and is not operated for commercial purposes or
                                revenue generation.
                            </p><br />
                            <span className="block font-semibold text-primary-600 uppercase tracking-wider">Source: https://www.e-recht24.de</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Imprint;