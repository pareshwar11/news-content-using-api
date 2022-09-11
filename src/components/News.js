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
    let url="https://newsdemoapi.herokuapp.com/news";
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({articles: parsedData.articles})
  }
  handlePreClick=async()=>{
    console.log("Previous");

    let url="https://newsdemoapi.herokuapp.com/news";
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
    
  }
  handleNextClick=async()=>{
    console.log("Next");

    let url="https://newsdemoapi.herokuapp.com/news/page2";
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
            return <div className="col-lg-3 col-md-3 col-sm-6" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0, 49):""} description={element.description?element.description.slice(0, 98):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className=" btn btn-primary" onClick={this.handlePreClick}>&larr; Previous</button>
        <button disabled={this.state.page>=2} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
