import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export function Blockquote({
  children,
  className,
  ...rest
}: HTMLMotionProps<"blockquote">) {
  return (
    <motion.blockquote
      className={cn(
        "bg-primary/5 text-primary/60 mt-6 ml-2 rounded-[0.3rem] border-l-4 p-2 pl-6 italic",
        className
      )}
      {...rest}
    >
      {children}
    </motion.blockquote>
  )
}

export function InlineCode({
  children,
  className,
  ...rest
}: HTMLMotionProps<"code">) {
  return (
    <motion.code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </motion.code>
  )
}
