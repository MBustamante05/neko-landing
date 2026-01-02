export default function Navbar() {
  const aStyle = "text-white uppercase font-bold hover:text-gray-300 text-xl cursor-pointer transition-all duration-300";
  return (
    <div className="fixed top-0 left-0 right-0 z-9999 ">
      <div className="max-w-[1680px] flex items-center py-4 text-white uppercase mx-auto">
        <h1 className="text-2xl font-bold">Navbar</h1>
        <ul className="flex gap-10 text-center mx-auto">
          <li className={aStyle}>Home</li>
          <li className={aStyle}>Projects</li>
          <li className={aStyle}>Contact</li>
        </ul>
      </div>
    </div>
  );
}
