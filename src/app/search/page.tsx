import { getFetchUrl, validArticles } from "utils/Utility";
import { redirect } from "next/navigation";
import BackLink from "components/BackLink";
import ResultList from "components/ResultList";

type props = {
  searchParams: Promise<SearchParams>;
};

export default async function Search(props: props) {
  const searchParams = await props.searchParams;
  const search = await searchParams?.q;

  if (!search) redirect("/");
  // const data = await fetch(
  //   `https://newsapi.org/v2/everything?q=india&from=2024-12-07&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`,
  // );
  const data = await fetch(getFetchUrl("api"), {
    method: "POST",
    body: JSON.stringify({ ...searchParams, q: search }),
  });
  const articles = (await data.json()) as Articles[];

  const newArticles = await validArticles(articles, 7, 20);

  return (
    <div
      id="page-id"
      className="m-0 mx-auto flex w-full max-w-[70rem] flex-col p-0 py-5"
    >
      <div className="flex justify-start pl-2.5 md:pl-5">
        <BackLink />
      </div>
      <section className="flex w-full flex-col space-y-5 px-2.5 md:space-y-7 md:px-5 md:pt-7">
        <div className="flex flex-col px-2.5 md:px-0">
          <h2 className="truncate text-[1.15rem] md:text-[1.75rem]">
            {search}
          </h2>
          <p className="flex items-center space-x-1 truncate text-xs text-gray-600 md:text-base">
            {newArticles.length} results found
          </p>
        </div>
        <ResultList articles={newArticles} />
      </section>
    </div>
  );
}