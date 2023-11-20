import hero from '~/assets/jpg/hero.jpg'

export default function Header({ heading = "Heading" }) {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={hero}
            alt={heading}
          />
          <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
        </div>
        <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
          <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
            <span className="block uppercase text-yellow-500 drop-shadow-md">
                {heading}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
