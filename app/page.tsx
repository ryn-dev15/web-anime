import AnimeList from "./component/AnimeList";
import Header from "./component/AnimeList/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();

  return (
    <>
      <section className="pt-20">
        <Header
          link="Paling Populer"
          linkHref="/populer"
          linkTitle="View all"
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="pt-20">
        <Header link="Paling Baru" linkHref="/terbaru" linkTitle="View all" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
