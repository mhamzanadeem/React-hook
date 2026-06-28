import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
    const { id } = useParams();
    const {
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        handleAddToFavorite,
    } = useContext(GlobalContext);

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
            const data = await response.json();

            console.log(data);
            if (data?.data) {
                setRecipeDetailsData(data?.data);
            }
        }

        getRecipeDetails();
    }, []);

    console.log(recipeDetailsData, "recipeDetailsData");

    return (
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.85fr)] lg:gap-10">
            <div>
                <div className="overflow-hidden rounded-lg bg-white/5">
                    <img
                        src={recipeDetailsData?.recipe?.image_url}
                        alt={recipeDetailsData?.recipe?.title || "Recipe"}
                        className="h-full max-h-[620px] min-h-72 w-full object-cover"
                    />
                </div>
            </div>
            <div className="text-left">
                <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-[#10B981]">
                    {recipeDetailsData?.recipe?.publisher}
                </span>
                <h3 className="mb-6 text-3xl font-extrabold leading-tight text-[#10B981] sm:text-4xl lg:text-5xl">
                    {recipeDetailsData?.recipe?.title}
                </h3>
                <div className="mb-8">
                    <button
                        onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
                        className="rounded-md bg-[#10B981] px-6 py-3 text-sm font-bold text-[#131619] transition hover:bg-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619] sm:text-base"
                    >
                        {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
                            (item) => item.id === recipeDetailsData?.recipe?.id
                        ) !== -1
                            ? "Remove from favorites"
                            : "Add to favorites"}
                    </button>
                </div>
                <div>
                    <span className="mb-4 block text-2xl font-extrabold text-[#FFFFFF]">
                        Ingredients:
                    </span>
                    <ul className="grid gap-3">
                        {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
                            <li key={`${ingredient.description}-${index}`} className="rounded-md border border-white/10 bg-[#131619]/70 p-4 text-[#FFFFFF]">
                                <span className="mr-2 font-bold text-[#10B981]">
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span className="text-white/90">
                                    {ingredient.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
