import imgIdle from "../assets/idle.png";

export default function Idle() {
  return (
    <div className="relative size-full" data-name="idle">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[305.54%] left-[-8.65%] max-w-none top-[-33.19%] w-[308.39%]" src={imgIdle} />
      </div>
    </div>
  );
}
