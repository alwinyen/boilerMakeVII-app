import React from "react";
import { news }  from '../constant/news'
import {
    withRouter,
    Redirect
  } from 'react-router-dom'
class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            new: {
                country: "",
                title: "",
                imgURL: "",
                subTitle: "",
                content1: "",
                content2: "",
                content3: "",
                donateURL: "",
                donateText: "",
                helpURL: "",
                helpText: ""
            }
        };
    }

    componentWillMount() {
        var filteredNews = news.filter(newObj => {
            return newObj.country == this.props.match.params.country
        })

        if(filteredNews.length > 0) {
            this.setState({new: filteredNews[0]})
        }
    }
    render() {
        return(
            <React.Fragment>
                <div id = "content1">
                    <img src = {this.state.new.imgURL}></img>
                    <div id = "text">
                        <h1>{this.state.new.title}</h1>
                        <div id = "subtitle">
                            <strong>
                                {this.state.new.subTitle}
                            </strong>
                        </div>
                        <p>
                        {this.state.new.content1} <br/> <br/>
                        {this.state.new.content2} <br/> <br/>
                        {this.state.new.content3}
                        </p>
                    </div>
                </div>
                <div id = "content2">
                    <h1>How can I help?</h1>
                    <a href = {this.state.new.donateURL} target="_blank">{this.state.new.donateText}</a>
                    <a href = {this.state.new.helpURL} target="_blank">{this.state.new.helpText}</a>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(News);