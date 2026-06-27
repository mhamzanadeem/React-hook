import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav >
      <h2 >
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          
        />
      </form>
      <ul >
        <li>
          <NavLink
            to={"/"}
          
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
          
          >
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}