interface SkeletonProps {
  className?: string
  children?: ReactNode
}

const Skeleton = (props: SkeletonProps) => {
  const { className, children } = props
  return (
    <div
      className={`flex aspect-golden w-full animate-pulse items-center justify-center rounded bg-slate-300 ${className ? className : ''}`}
    >
      {children}
    </div>
  )
}

export default Skeleton
