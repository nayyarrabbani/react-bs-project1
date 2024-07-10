// import img from "../assets/download.jpg"

// const NewsItem = ({title,description,src,url}) => {
//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block mx-2 w-25">
//         <img src={src ? src : img} className="card-img-top" alt=""/>
//         <div className="card-body">
//             <h5 className="card-title">{title.slice(0,50)}</h5>
//             <p className="card-text">{description ? description.slice(0,90) : "Stay updated with the latest news and stories from around the world, right here, right now."}</p>
//             <a href={url} className="btn btn-primary">Read More</a>
//         </div>
//     </div>
//   )
// }

// export default NewsItem

import img from "../assets/download.jpg"

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3">
        <img src={src ? src : img} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description ? description.slice(0,90) : "Stay updated with the latest news and stories from around the world, right here, right now."}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem

