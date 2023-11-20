export default function Card({
  imgSrc,
  heading = "Heading",
  copy = "Lorem...",
}) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow ">
      <img className="rounded-t-lg w-full h-72 object-cover object-center" src={imgSrc} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {heading}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          {copy}
        </p>
      </div>
    </div>
  );
}
