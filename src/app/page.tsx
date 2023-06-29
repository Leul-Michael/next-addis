import Btncta from "@/components/Btncta"

export default function Home() {
  return (
    <section className="hero flex items-center py-16">
      <div className="flex w-full flex-col gap-8">
        <h1 className="font-title font-serif font-bold leading-none">
          Digital Innovation You Need to Build, Scale & Grow.
        </h1>
        <p className="leading-[1.2] text-clr-muted">
          We help <span className="font-medium underline">Fast Growth</span>{" "}
          Teams Scale Their Design Roadmaps At Lightning Speeds
        </p>
        <Btncta />
      </div>
      <div className="flex w-full flex-col"></div>
    </section>
  )
}
