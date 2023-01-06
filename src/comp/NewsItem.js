import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, date, source } = this.props;
    return (
      <div className='my-1'style={{ display:'flex', justifyContent:'center'}} >
        <div className="card" style={{ width: "18rem", height: "auto" }}>
          <div  style={{ display:'flex', justifyContent:'flex-end', position:'absolute', right:'0' }} >
            <span class="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://static4.depositphotos.com/1006069/377/i/950/depositphotos_3779660-stock-photo-breaking-news.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target='_blank' className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
            <p className="card-text"><small class="text-muted">{new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    )
  }

}

export default NewsItem
