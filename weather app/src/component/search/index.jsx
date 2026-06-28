export default function Search({ search, setSearch, handleSearch }) {
    return (
        <form
            className="mx-auto flex w-full max-w-2xl flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30 sm:flex-row sm:p-4"
            onSubmit={(event) => {
                event.preventDefault();
                handleSearch();
            }}
        >
            <input
                type="text"
                placeholder="Enter City Name"
                name="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="min-h-12 flex-1 rounded-md border border-white/10 bg-[#1B2023] px-4 text-[#FFFFFF] outline-none transition placeholder:text-white/45 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/30"
            />
            <button
                type="submit"
                className="min-h-12 rounded-md bg-[#10B981] px-7 font-bold text-[#131619] transition hover:bg-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619]"
            >
                Search Weather
            </button>
        </form>
    )
}
