import { useEffect, useState } from "react";
import User from "./user";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("mhamzanadeem");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('')
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!userName.trim()) return;
    fetchGithubUserData()
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center text-center">
        <h1 className="text-3xl font-extrabold text-[#10B981] sm:text-5xl">
          Loading data ! Please wait
        </h1>
      </section>
    );
  }

  return (
    <section className="flex flex-1 flex-col justify-center gap-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-black leading-tight text-[#10B981] sm:text-5xl lg:text-6xl">
          GitHub Profile Finder
        </h1>
        <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
          Search any GitHub username and view their profile stats in one clean place.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30 sm:flex-row sm:p-4"
      >
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          className="min-h-12 flex-1 rounded-md border border-white/10 bg-[#1B2023] px-4 text-[#FFFFFF] outline-none transition placeholder:text-white/45 focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/30"
        />
        <button
          type="submit"
          className="min-h-12 rounded-md bg-[#10B981] px-7 font-bold text-[#131619] transition hover:bg-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619]"
        >
          Search
        </button>
      </form>
      {userData !== null ? <User user={userData} /> : null}
    </section>
  );
}
