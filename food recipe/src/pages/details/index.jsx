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
        <div >
            <div>
                <div>
                    <img
                        src={recipeDetailsData?.recipe?.image_url}

                    />
                </div>
            </div>
            <div >
                <span >
                    {recipeDetailsData?.recipe?.publisher}
                </span>
                <h3 >
                    {recipeDetailsData?.recipe?.title}
                </h3>
                <div>
                    <button
                        onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
                    >
                        {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
                            (item) => item.id === recipeDetailsData?.recipe?.id
                        ) !== -1
                            ? "Remove from favorites"
                            : "Add to favorites"}
                    </button>
                </div>
                <div>
                    <span >
                        Ingredients:
                    </span>
                    <ul >
                        {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                            <li>
                                <span >
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span >
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