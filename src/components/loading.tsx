import { cn } from "@/lib/utils"

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  expand?: boolean
}

export default function Loading({
  expand = false,
  className,
  ...rest
}: LoadingProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        { "h-screen w-full": expand },
        className
      )}
      {...rest}
    >
      <div className="border-primary border-b-accent h-6 w-6 animate-spin rounded-full border-[0.15rem] p-2" />
    </div>
  )
}
