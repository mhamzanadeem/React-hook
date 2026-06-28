import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
    return (
        <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/60">
            <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img
                    src={item?.image_url}
                    alt={item?.title || "recipe item"}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex min-h-56 flex-col p-5 text-left">
                <span className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#10B981]">
                    {item?.publisher}
                </span>
                <h3 className="mb-5 line-clamp-3 text-xl font-bold leading-tight text-[#FFFFFF]">
                    {item?.title}
                </h3>
                <Link
                    to={`/recipe-item/${item?.id}`}
                    className="mt-auto inline-flex w-fit items-center justify-center rounded-md bg-[#10B981] px-5 py-3 text-sm font-bold text-[#131619] transition hover:bg-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619]"
                >
                    Recipe Details
                </Link>
            </div>
        </div>
    );
}
