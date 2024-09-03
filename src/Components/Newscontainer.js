import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

function Newscontainer({ category, country, page, setPage, query }) {

  // here we found article by setArticle use useSate
  const [articles, setArticle] = useState([])
  // here we count number of article ans setTotalpages article by setArticle use useSate
  const [totalPages, setTotalPages] = useState(0);


  // Use Effect () for geting data through api
  useEffect(() => {

    // if there have no query then only category and country wise data fetch
    if (!query) {

      let url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${query}&category=${category}&apiKey=698f75294c174e94a37e652756b3ca50&page=${page}&pageSize=12`;
      fetch(url).then(response => response.json())
        .then(data => {
          const totalResults = data.totalResults;
          const totalPages = Math.ceil(totalResults / 12); // 12 is the pageSize
          setTotalPages(totalPages);
          setArticle(data.articles);
        });

    }
    // if Query then only fetch data query wise
    else {
      let url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=698f75294c174e94a37e652756b3ca50`;
      fetch(url).then(response => response.json())
        .then(data => {
          const totalResults = data.totalResults;
          const totalPages = Math.ceil(totalResults / 12); // 12 is the pageSize
          setTotalPages(totalPages);
          setArticle(data.articles);
        });

    }

  }, [category, country, page, query])


  // Here we set next Page button when articles have more
  const HandleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // Here we set previous Page button when articles was satnd a 1st page  
  const HandlePrev = () => {
    setPage(page - 1);
  };



  return (
    <div className='conatiner my-4'>
      <h3 className='text-center'><span className='bedge text-dark'>TopHeadlines Of Your Country</span>- ({country})</h3>
      <div className='container d-flex justify-content-between'>
        {/* when article paga stand in 1st page then button was disablled */}
        <button type="button" className="btn btn-outline-dark" disabled={page === 1 ? true : false} onClick={HandlePrev}>&larr;Previous</button>
        {/* when article paga have no more articles  then button was disablled */}
        <button type="button" className="btn btn-outline-dark" onClick={HandleNext} disabled={page >= totalPages}>NextPage&rarr;</button>
      </div>
      {/* here we use map for a itreate over articles with index*/}
      {articles.map((news, index) => {
        // here we send props to component
        return <Newsitem key={index} title={news.title} des={news.description} url={news.url} image={news.urlToImage} />
      })}
    </div>

  )
}

export default Newscontainer