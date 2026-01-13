const PolicyText = ({ title, children }) => {
  return (
    <section>
      <h2 className="h5 text-primary-900">{title}<span className="accent-dot">.</span></h2>
      <div className="p-xl text-primary-800">
        {children}
      </div>
    </section>
  );
};

export default PolicyText;