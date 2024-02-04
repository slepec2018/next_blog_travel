import Image from "next/image";

const CtaCard = () => {
  return (
    <div
      className="rounded-md bg-slate-100 py-10 px-6 relative"
    >
      <div
        className="absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30"
      />
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="boat"
        fill
        className="object-center object-cover overflow-hidden"
      />
      <div
        className="relative z-20"
      >
        <div
          className="font-medium text-lg"
        >
          #exploretheworld
        </div>
        <h3
          className="text-4xl font-semibold mt-3"
        >
          Explore the world with me!
        </h3>
        <p
          className="mt-2 text-lg max-w-lg"
        >
          Explore the world with me! I m travelling around the world. I ve visited
          most of the great cities of USA and currently I m travelling in UE. Join
          me!
        </p>
        <form
          className="mt-6 flex items-center gap-2 w-full"
        >
          <input
            className="bg-white/80 text-base rounded-md py-2 px-3 outline-none focus:ring-2 ring-neutral-600
            placeholder:text-sm w-full md:w-auto"
            placeholder="Write your email."
          />
          <button
            className="bg-neutral-900 rounded-md py-2 px-3 text-neutral-200 whitespace-nowrap"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default CtaCard;