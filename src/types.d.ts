type SearchParams = {
  // [key: string]: string | string[] | undefined;
  q?: Promise<string>;
  pathname?: Promise<string>;
  viewport?: Promise<string>;
};

type Articles = {
  author: string | undefined;
  content: string | undefined;
  source: {
    id: string | undefined;
    name: string | undefined;
  };
  title: string | undefined;
  description: string | undefined;
  url: string | undefined;
  urlToImage: string | undefined;
  publishedAt: string | undefined;
};

type ValidateArticles = {
  data: Articles;
  isValid?: boolean;
};

type SearchHistory = {
  Search: string;
  SearchRef: React.RefObject<HTMLInputElement>;
  ContainerRef: React.RefObject<HTMLDivElement>;
  GetEmptySearch: boolean;
  handleClick: (search: string) => void;
  setSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

type SearchHistoryList = {
  Id: string;
  Key: string;
  Value: string;
};

type Carousel = {
  articles: Articles[];
  isMobile?: boolean;
};