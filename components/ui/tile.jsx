const Tile = ({ text }) => {
    return (
        <span
            className="px-3 lg:px-4 py-2 font-semibold text-[0.625rem] leading-[0.825rem] lg:leading-5 lg:text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md"
        >
            {text}
        </span>
    )
}

export default Tile;