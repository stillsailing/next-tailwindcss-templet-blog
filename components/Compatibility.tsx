/**
 * https://caniuse.bitsofco.de/embed/index.html?feat=feature
 * @param param0 
 * @returns 
 */
const Compatibility = ({ feat, height }: { feat: string; height: string | number }) => {
  return (
    <iframe
      title={feat}
      src={`https://caniuse.bitsofco.de/embed/index.html?feat=${feat}`}
      className="w-full"
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    />
  )
}

export default Compatibility
