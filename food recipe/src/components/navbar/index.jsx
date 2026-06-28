import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex flex-col items-center gap-5 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-5 shadow-2xl shadow-black/30 sm:px-6 lg:flex-row lg:justify-between">
      <h2 className="text-2xl font-extrabold tracking-wide text-[#10B981] sm:text-3xl">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xl lg:w-[44%]">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="w-full rounded-lg border border-white/10 bg-[#1B2023] px-4 py-3 text-sm text-[#FFFFFF] outline-none transition placeholder:text-white/45 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/30 sm:text-base"
        />
      </form>
      <ul className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#FFFFFF] sm:gap-3">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `rounded-md px-4 py-2 transition hover:bg-[#10B981] hover:text-[#131619] ${isActive ? "bg-[#10B981] text-[#131619]" : "text-[#FFFFFF]"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              `rounded-md px-4 py-2 transition hover:bg-[#10B981] hover:text-[#131619] ${isActive ? "bg-[#10B981] text-[#131619]" : "text-[#FFFFFF]"}`
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
