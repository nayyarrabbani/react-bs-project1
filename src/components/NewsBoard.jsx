// import { useState,useEffect } from "react"
// import NewsItem from "./NewsItem";

// const NewsBoard = ({category}) => {
//     let [articles,setArticles] = useState([]);

//     useEffect(()=>{
//         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ebad47a33225434a94566fd1a0e138c2`;
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setArticles(data.articles))
        
//     },[category])
//   return (
//     <div className="container-fluid">
//         <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//         <div className="d-flex flex-wrap justify-content-center">
//             {articles.map((news,index)=>{
//                 return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//             })}
//         </div>
//     </div>
//   )
// }

// export default NewsBoard

import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles || []));
    }, [category]);

    return (
        <div className="container-fluid">
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row justify-content-center">
                {Array.isArray(articles) && articles.map((news, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
                        <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsBoard;

