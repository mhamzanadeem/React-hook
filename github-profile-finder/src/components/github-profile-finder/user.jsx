export default function User({ user }) {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at,
    } = user;

    const createdDate = new Date(created_at);

    return (
        <article className="profile-card mx-auto grid w-full max-w-5xl gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 sm:p-7 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div className="mx-auto lg:mx-0">
                <img
                    src={avatar_url}
                    alt={name || login}
                    className="h-40 w-40 rounded-full border-4 border-[#10B981] object-cover shadow-xl shadow-[#10B981]/15 sm:h-52 sm:w-52"
                />
            </div>
            <div className="flex flex-col justify-center text-center lg:text-left">
                <div>
                    <a
                        href={`https://github.com/${login}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl font-black leading-tight text-[#10B981] transition hover:text-[#34D399] sm:text-4xl"
                    >
                        {name || login}
                    </a>
                    <p className="mt-2 text-lg font-semibold text-[#FFFFFF]">@{login}</p>
                    <p className="mt-3 text-sm text-white/70 sm:text-base">
                        User joined on{" "}
                        {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                            month: "short",
                        })} ${createdDate.getFullYear()}`}
                    </p>
                </div>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-md border border-white/10 bg-[#131619]/80 p-4">
                        <p className="text-sm font-bold uppercase tracking-wide text-white/65">Public Repos</p>
                        <p className="mt-2 text-3xl font-black text-[#FFFFFF]">{public_repos}</p>
                    </div>
                    <div className="rounded-md border border-white/10 bg-[#131619]/80 p-4">
                        <p className="text-sm font-bold uppercase tracking-wide text-white/65">Followers</p>
                        <p className="mt-2 text-3xl font-black text-[#FFFFFF]">{followers}</p>
                    </div>
                    <div className="rounded-md border border-white/10 bg-[#131619]/80 p-4">
                        <p className="text-sm font-bold uppercase tracking-wide text-white/65">Following</p>
                        <p className="mt-2 text-3xl font-black text-[#FFFFFF]">{following}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
