/**
 * https://caniuse.bitsofco.de/embed/index.html
 * @param param
 * @returns
 */
const Compatibility = ({ feat, height }: { feat: string; height: string | number }) => {
  return (
    <iframe
      aria-hidden
      title={feat}
      src={`https://caniuse.bitsofco.de/embed/index.html?feat=${feat}`}
      className="w-full"
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    />
  )
}

export default Compatibility
