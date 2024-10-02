import Appbar from "../components/Appbar"; // Adjust the path to import the component
import News from "../components/News";

export default async function NewsPage() {
  const apikey = '45921a1229f56a34d3efd5f627d3693d';
  const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apikey}`;

  const res = await fetch(url);
  const data = await res.json();
  const articles = data.articles || [];

  return (
    <div>
      <div className="bg-gray-400 flex flex-col items-center">
        <div className="w-full max-w-5xl bg-slate-400">
          <Appbar name="shashidhar" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <News articles={articles} />
        </div>
      </div>
    </div>
  );
}
