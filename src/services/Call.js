export const getNewsFactory = ({ filter, consoleMessage }) => {
  console.log(consoleMessage);
  const apiKey = "53459456819c4042b7cae0f9610b0a51";
  let url = `https://newsapi.org/v2/everything?q=${filter}&apiKey=${apiKey}`;

  return fetch(url).then((res) => res.json());
};

export const getNewsFactoryAsync = async (filter) => {
  const news = await getNewsFactory({ filter });
  return news;
}