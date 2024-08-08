const Compatibility = ({ target, height }: { target: string; height: string | number }) => {
  return (
    <iframe
      title={target}
      src={`https://caniuse.bitsofco.de/embed/index.html?feat=${target}`}
      className="w-full"
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    />
  )
}

export default Compatibility
