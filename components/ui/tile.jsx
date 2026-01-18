const Tile = ({ text }) => {
    return (
        <span
            className="px-3 xl:px-4 py-2 font-semibold text-[0.625rem] leading-[0.825rem] xl:leading-5 xl:text-sm uppercase tracking-wider bg-primary-300 text-primary-600 rounded-md"
        >
            {text}
        </span>
    )
}

export default Tile;