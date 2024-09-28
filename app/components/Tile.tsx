// import Image from "next/image";

export interface TileProps {
    articles: {
      title: string;
      description: string; // Fixed typo from 'desctiption' to 'description'
      url: string;
      image: string,
      source: {
        name: string
      },
      publishedAt: string
    }[];
  }
  
  export default function Tile({
    articles
}: TileProps) {
    return (
      <div className="flex items-center justify-center">
        <div className="p-2 max-w-4xl">
          {articles.map((article, index) => (
            <div key={index} className="grid grid-cols-4 mt-3 h-[250px] overflow-hidden rounded border border-gray-300 shadow-lg bg-white p-4">
                <div className="col-span-1 flex items-center justify-center h-full overflow-hidden">
                    <img src={article.image} alt="image" className="h-full w-full object-cover pb-2"/>
                    {/* <Image src={article.url} alt={article.title} height={500} width={300} className="rounded"></Image> */}
                </div>
                <div className="col-span-3 p-3">
                    <div className="text-md font-semibold">{article.title}</div>
                    <div className="text-xs text-slate-500">{article.publishedAt.slice(0, 10)} {article.publishedAt.slice(11, 19)}</div>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 on hover:text-blue-600">
                        Read more at {article.source.name}
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  