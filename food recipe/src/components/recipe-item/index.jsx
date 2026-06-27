import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
    return (
        <div>
            <div>
                <img src={item?.image_url} alt="recipe item" className="block w-full" />
            </div>
            <div>
                <span >
                    {item?.publisher}
                </span>
                <h3>
                    {item?.title}
                </h3>
                <Link
                    to={`/recipe-item/${item?.id}`}

                >
                    Recipe Details
                </Link>
            </div>
        </div>
    );
}