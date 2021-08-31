export const getNewsFactory = async (filter) => {

    const apiKey = '53459456819c4042b7cae0f9610b0a51'
    let url = `https://newsapi.org/v2/everything?q=${filter}&apiKey=${apiKey}`

    return await fetch(url)
      .then(res => res.json())
};

// export const getNewsFactoryByCountry = async (country) => {
//     const apiKey = '53459456819c4042b7cae0f9610b0a51'
//     let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`

//     return await fetch(url)
//       .then(res => res.json())
// }

