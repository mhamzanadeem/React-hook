import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="recipe-grid">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="col-span-full flex min-h-[50vh] items-center justify-center rounded-lg border border-dashed border-[#10B981]/40 bg-white/[0.03] px-6 text-center">
          <p className="text-2xl font-extrabold leading-tight text-[#FFFFFF] sm:text-4xl">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
