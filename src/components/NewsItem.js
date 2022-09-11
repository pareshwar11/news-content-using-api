import React, { Component } from "react";
import '../App.css';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl}=this.props;
    return (
      <div className="container">
      <div className="my-3">
        <div className="card">
          <img  src={!imageUrl?"https://images.livemint.com/img/2022/08/21/600x338/sovereign_gold_bond_1661043951624_1661043951737_1661043951737.jpg" : imageUrl} className="cardimg" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {!description?"No description found for this NEWS":description}.
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default NewsItem;
