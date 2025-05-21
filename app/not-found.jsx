const NotFound = () => {
    return (
        <section className="h-full">
            <div className="mx-auto h-screen xl:pb-24 bg-radial-gradient text-primary-900">
                <div className="container h-screen flex flex-col items-center justify-center">
                    <div className="mt-12 text-center text-lg text-primary-800">
                        <h1 className="h1 text-primary-900">
                            404 - Page Not Found :&#40;
				        </h1>
                        <p>
                            Did you already try switching it off and on again?
                        </p>
                    </div>
		        </div>
            </div>
        </section>
    );
};
  
export default NotFound;