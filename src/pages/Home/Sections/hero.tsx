import { useTranslation } from "react-i18next"

import waves from "@/assets/waves.svg"

export default function Hero() {
  const { t } = useTranslation("pages/home")

  return (
    <section className="relative h-[calc(100vh-64px)]">
      <div
        className="bg-primary/40 absolute -z-10 h-full w-full"
        style={{
          maskImage: `url(${waves})`,
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskPosition: "center"
        }}
      />

      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl sm:text-6xl md:text-6xl lg:text-8xl">
          {t("hero.title")}
        </h1>
        <p className="xs:text-nowrap m-0 bg-linear-to-r from-rose-500 to-purple-400 bg-clip-text text-center font-mono text-lg font-bold tracking-widest text-wrap text-transparent uppercase drop-shadow-[0_0_10px_rgba(244,64,96,0.8)] sm:text-xl md:text-2xl lg:text-3xl dark:from-cyan-400 dark:to-purple-400 dark:drop-shadow-[0_0_10px_rgba(121,168,246,0.8)]">
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  )
}
