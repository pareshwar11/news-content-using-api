import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=394ae4f4b6994c1cac6adcc90aa8ceb6";
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({articles: parsedData.articles})
  }
  handlePreClick=async()=>{
    console.log("Previous");

    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=394ae4f4b6994c1cac6adcc90aa8ceb6&page=${this.state.page -1}`;
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
    
  }
  handleNextClick=async()=>{
    console.log("Next");

    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=394ae4f4b6994c1cac6adcc90aa8ceb6&page=${this.state.page +1}`;
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
    })

  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMan Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0, 49):""} description={element.description?element.description.slice(0, 98):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className=" btn btn-primary" onClick={this.handlePreClick}>&larr; Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
