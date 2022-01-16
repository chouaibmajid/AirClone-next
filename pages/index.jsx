import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card2 from "../components/Card2"
import axios from "axios";
import SmallCard from "../components/SmallCard";
export default function Home({ data , data2 }) {
  console.log(data2)
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/index.jpeg" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl px-8 sm:px-16 mx-auto">
        <section className="pt-6">
          <h2 className="font-bold pb-7 text-4xl">Explore Nearby </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-3 lg:grid-cols-3">
            {data.map((item) => (
              <SmallCard {...item} />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="font-bold pb-7 text-4xl">Live Anywhere </h2>
          <div className="flex overflow-auto  space-x-4">
          {data2.map((item) => (
              <Card2 {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const { data } = await axios.get("https://links.papareact.com/pyp");
 const response2 = await axios.get("https://links.papareact.com/zp1");
  return {
    props: {
      data : data,
      data2: response2.data
    },
  };
}
