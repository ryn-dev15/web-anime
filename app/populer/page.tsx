import AnimeList from "../component/AnimeList";

interface AnimeData {
  id: number;
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
    jpg?: {
      image_url: string;
    };
  };
}
const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();

  return (
    <div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4 pt-24">
        {anime.data.map((data: AnimeData, index: number) => {
          return (
            <div key={data.mal_id} className="shadow-xl rounded-lg bg-white">
              <AnimeList
                key={index}
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
