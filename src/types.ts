export interface NewsAgg {
  uid: string;
  url: string;
  title: string;
  siteNameDisplay: string;
}

export interface Topic {
  uid: string;
  title: string;
  publishDate: string;
  newsAggList: NewsAgg[];
}

export interface TopicListResponse {
  data: {
    items: Topic[];
  };
}
