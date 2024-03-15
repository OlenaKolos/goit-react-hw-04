import axios from "axios";

const ACCESSKEY = `0ERgyIHQMHejIldmcKOg4e4JDchmvmkubfmenvtNSEE`;

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getFetchUrl = (page, per_page, query) => {
  return `/photos?client_id=${ACCESSKEY}&page=${page}&per_page=${per_page}&query=${query}`;
};
