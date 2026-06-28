import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
    const { recipeList, loading } = useContext(GlobalContext);

    if (loading) return <div className="py-20 text-center text-2xl font-bold text-[#10B981]">Loading...Please wait!</div>;

    return (
        <div className="recipe-grid">
            {recipeList && recipeList.length > 0 ? (
                recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
            ) : (
                <div className="col-span-full flex min-h-[50vh] items-center justify-center rounded-lg border border-dashed border-[#10B981]/40 bg-white/[0.03] px-6 text-center">
                    <p className="max-w-xl text-2xl font-extrabold leading-tight text-[#FFFFFF] sm:text-4xl">
                        Nothing to show. Please search something
                    </p>
                </div>
            )}
        </div>
    );
}
