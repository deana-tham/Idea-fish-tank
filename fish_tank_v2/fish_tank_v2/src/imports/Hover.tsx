import imgHover from "../assets/hover.png";

export default function Hover() {
  return (
    <div className="relative size-full" data-name="hover">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-178.77%] max-w-none size-[278.82%] top-[-19.55%]" src={imgHover} />
      </div>
    </div>
  );
}
