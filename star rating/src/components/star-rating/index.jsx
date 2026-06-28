import { useState } from "react";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <section className="rating-card w-full rounded-lg border border-white/10 bg-white/[0.04] p-5 text-center shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-white/60">
        Star Rating
      </p>
      <h1 className="text-4xl font-black leading-tight text-[#10B981] sm:text-5xl lg:text-6xl">
        Rate your experience
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
        Tap a star to select your rating. Hover to preview before choosing.
      </p>

      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2 rounded-lg border border-white/10 bg-[#131619]/80 p-3 sm:gap-3 sm:p-5">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          const isActive = index <= (hover || rating);

          return (
            <button
              key={index}
              type="button"
              className={`star-button grid h-12 w-12 place-items-center rounded-md text-4xl leading-none transition sm:h-14 sm:w-14 sm:text-5xl ${isActive ? "text-[#10B981] shadow-lg shadow-[#10B981]/20" : "text-white/25 hover:text-[#10B981]/70"}`}
              aria-label={`Rate ${index} out of ${noOfStars}`}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              *
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="rounded-md border border-white/10 bg-[#131619]/80 px-5 py-3">
          <span className="text-sm font-bold uppercase tracking-wide text-white/60">
            Selected
          </span>
          <p className="text-3xl font-black text-[#FFFFFF]">
            {rating || 0}/{noOfStars}
          </p>
        </div>
        <button
          type="button"
          className="min-h-12 rounded-md bg-[#10B981] px-7 font-bold text-[#131619] transition hover:bg-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619]"
          onClick={() => {
            setRating(0);
            setHover(0);
          }}
        >
          Reset Rating
        </button>
      </div>
    </section>
  );
}
