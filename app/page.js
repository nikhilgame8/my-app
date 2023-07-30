import SecondaryHeading from "./components/SecondaryHeading";
import NewsCard from "./components/CardUI/NewsCard";
import BuletinsCard from "./components/CardUI/BuletinsCard";
import TopNews from "./components/TopNews";
import ShortNewsCard from "./components/CardUI/ShortNewsCard";
import NewsBanner from "./components/BannerUI/NewsBanner";
import TopCreator from "./components/CardUI/TopCreator";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  const latestNewsData = [0, 1, 2, 3];
  const buletinsData = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1];
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];

  return (
    <div>
      <div className="max-w-[1140px] md:mx-auto px-4 space-y-8 my-6 carousel-animation-show">
        <section className="bg-gray-100 mx-auto rounded-lg min-h-[150px]  flex flex-col items-center justify-center">
          <h1 className="text-center font-medium uppercase text-gray-500 text-sm tracking-widest">
            WELCOME TO BULETIN
          </h1>
          <h2 className="text-center md:text-2xl text-lg font-bold">
            Craft narratives ✍️ that ignite{" "}
            <span className="text-red-600">inspiration 💡knowledge 📕</span>,
            and <span className="text-red-600">entertainment</span>
          </h2>
        </section>
        <section>
          <TopNews data={people} />
        </section>
        <section>
          <SecondaryHeading title={"Latest News"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {latestNewsData.map((item, index) => (
              <div key={index}>
                <NewsCard index={index} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <SecondaryHeading title={"Buletin Story"} />
          <div className="md:grid md:grid-cols-10 gap-2 flex overflow-x-auto hide-scroll">
            {buletinsData.map((item, index) => (
              <div key={index}>
                <BuletinsCard index={index} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <SecondaryHeading title={"Must Read"} />
          <div className="grid md:grid-cols-8 grid-cols-1 gap-4">
            <div className="md:col-span-2">
              <div>
                <NewsCard />
              </div>
            </div>
            <div className="md:col-span-4 h-[400px] md:h-full">
              <NewsBanner />
            </div>
            <div className="md:col-span-2 gap-4 grid sm:grid-cols-2 md:grid-cols-1">
              {latestNewsData.map((item, index) => (
                <div key={index}>
                  <ShortNewsCard />
                  <div className=" border-dashed border-b-2 mt-2 w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <SecondaryHeading title={"Editor's Pick"} />
          <div>
            <div className="h-[400px]">
              <NewsBanner />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {latestNewsData.map((item, index) => (
                <div key={index}>
                  <NewsCard index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex md:flex-row flex-col">
          <div>
            <SecondaryHeading title={"Business"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {latestNewsData.slice(0, 2).map((item, index) => (
                <div key={index}>
                  <NewsCard index={index} />
                </div>
              ))}
            </div>
          </div>
          <div className=" border-dashed border-l-2 mx-4 w-2 hidden md:block"></div>
          <div>
            <SecondaryHeading title={"Sport News"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {latestNewsData.slice(0, 2).map((item, index) => (
                <div key={index}>
                  <NewsCard index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <SecondaryHeading title={"Top Creator"} />
          <ul
            role="list"
            className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          >
            {people.map((person, index) => (
              <li key={index}>
                <TopCreator person={person} />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <NewsLetter />
        </section>
      </div>
    </div>
  );
}
