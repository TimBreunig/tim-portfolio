import PolicyText from "@/components/PolicyText"

const Imprint = () => {
    return (
        <div>
            <section>
                <div className="container-wide pb-12 pt-24 xl:pt-36 z-10 bg-primary-900">
                    <h1 className="h1">
                        Imprint<span className="accent-dot">.</span>
                    </h1>

                    <div
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        className="w-full box-border p-4 xl:p-8 bg-primary-100 rounded-xl xl:rounded-2xl shadow-md text-primary-900 transition-colors duration-300"
                    >
                        <div className="flex flex-col gap-2 p-4 xl:p-8 pb-8 xl:pb-12 bg-primary-200 rounded-lg xl:rounded-xl">
                            <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Information in accordance with Section 5 TMG (German Telemedia Act)</span>
                            <div className="space-y-10">
                                <PolicyText title="Provider">
                                    Tim Breunig<br />
                                    Etivalstraße 52<br />
                                    75173 Pforzheim<br />
                                    Germany
                                </PolicyText>

                                <PolicyText title="Contact">
                                    E-Mail:&nbsp;
                                    <a
                                        href="mailto:breunig.tim@web.de"
                                        className="hyperlink"
                                    >
                                        breunig.tim@web.de
                                    </a>
                                    <br />
                                    <br />
                                    Responsible for content according to § 55 Abs. 2 RStV:<br />
                                    Tim Breunig, address same as above
                                </PolicyText>

                                <PolicyText title="Disclaimer">
                                    Despite careful content control, I assume no liability for the content of external links. The operators of the linked pages are solely responsible for
                                    their content. This website is solely intended for showcasing project work in the context of job applications and is not operated under commercial purposes or
                                    for the sake of revenue generation.
                                </PolicyText>
                            </div>
                            <span className="block font-semibold text-primary-600 uppercase tracking-wider">Source: https://www.e-recht24.de</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Imprint;