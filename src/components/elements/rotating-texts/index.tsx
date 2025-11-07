import React from "react";

const RotatingTextsComponent = ({
  texts,
  active,
}: {
  texts: string[];
  active: number;
}) => {
  const relIndex = (i: number) => {
    const n = texts.length;
    let delta = i - active;
    if (delta > n / 2) delta -= n;
    if (delta < -n / 2) delta += n;
    return delta;
  };

  return (
    <div className="relative w-full flex justify-center items-center h-32 mt-10 overflow-hidden">
      <div className="relative w-full flex justify-center items-center">
        {texts.map((text, i) => {
          const d = relIndex(i);
          const isActive = d === 0;

          return (
            <h1
              key={i}
              className={`absolute left-1/2 top-1/2 transform-gpu transition-all duration-700 ease-in-out text-main-green text-layer-fix`}
              style={{
                transform: `translate3d(-50%, calc(${
                  d * 120
                }% - 50%), 0) scale(${isActive ? 1.4 : 0.8})`,
                opacity: isActive ? 1 : 0.2,
                fontSize: "2rem",
                transitionProperty: "transform, opacity",
              }}
            >
              {text}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

const RotatingTexts = React.memo(RotatingTextsComponent);
RotatingTexts.displayName = "RotatingTexts"; // helps debugging

export default RotatingTexts;
