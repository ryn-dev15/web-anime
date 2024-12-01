import Link from "next/link";

interface AnimeData {
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

interface AnimeListProps {
  api: {
    data: AnimeData[];
  }; // api is an array, so no need for .data
}

const AnimeList = ({ api }: AnimeListProps) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => (
        <Link
          key={anime.mal_id}
          href={`/${anime.mal_id}`}
          className="cursor-pointer"
        >
          <div className="rounded-lg">
            <img
              src={anime.images.webp.image_url}
              alt={anime.title} // alt dynamic
              width={350}
              height={350}
              className="rounded-t-lg md:max-h-80 max-h-64 w-full object-cover"
            />
            <h3 className="font-bold md:text-xl text-sm md:p-4 p-2">
              {anime.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
