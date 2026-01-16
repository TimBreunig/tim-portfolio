import PolicyText from "@/components/PolicyText"

const PrivacyPolicy = () => {
    return (
        <div>
            <section>
                <div className="container-wide pb-12 pt-24 xl:pt-36 z-10 bg-primary-900">
                    <h1 className="h1">
                        Privacy Policy<span className="accent-dot">.</span>
                    </h1>

                    <div className="w-full box-border p-4 xl:p-8 bg-primary-100 rounded-xl xl:rounded-2xl shadow-md text-primary-900 hover:cursor-pointer transition-colors duration-300">
                        <div className="flex flex-col gap-2 p-4 xl:p-8 pb-8 xl:pb-12 bg-primary-200 rounded-lg xl:rounded-xl">
                            <span className="block mb-2 font-semibold text-primary-600 uppercase tracking-wider">Information in accordance with GDPR (General Data Protection Regulation)</span>
                            <div className="space-y-10">
                                <PolicyText title="Provider">
                                    My website address is: https://www.timbreunig.de.
                                </PolicyText>

                                <PolicyText title="Media">
                                    Visitors of this website are able to retrieve and extract any location data from images on this website.
                                </PolicyText>

                                <PolicyText title="Cookies & Tracking">
                                    This website does not use its own cookies or Google Analytics.
                                    <br />
                                    <br />
                                    My hosting provider Vercel automatically collects anonymous, aggregated data  (e.g. IP address, location information derived from your IP address, date/time, system configuration).
                                    This is necessary for security, maintenance and optimization. For more information, you can read up about Vercel's Privacy and Compliance&nbsp;
                                    <a
                                        href="https://vercel.com/docs/analytics/privacy-policy"
                                        className="hyperlink">
                                            here
                                    </a>.
                                </PolicyText>

                                <PolicyText title="Who we share your data with">
                                    No collected data is shared with third parties, except when legally required or technically necessary (e.g., hosting provider).
                                </PolicyText>

                                <PolicyText title="What rights you have over your data">
                                    You can request that I erase any personal data I hold about you at any given time. This does not include any data I am obliged to keep for administrative, legal or security purposes.
                                </PolicyText>

                                <PolicyText title="Contact">
                                    If you have any questions regarding data privacy, feel free to contact me under&nbsp;
                                    <a
                                        href="mailto:breunig.tim@web.de"
                                        className="hyperlink"
                                    >
                                        breunig.tim@web.de
                                    </a>
                                </PolicyText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;