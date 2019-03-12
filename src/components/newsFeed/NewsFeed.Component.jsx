import React, { Component } from "react";
import "../../shared/commonSyles.css";
import { getPostsData } from "../../shared/Data/Data";
import PostCard from "../../shared/PostCard/PostCard.Component";

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postData: []
    };
  }

  componentDidMount() {
    getPostsData().then(response => this.setState({ postData: response.data }));
    // this.setState({ postData: getPostsData() });
  }

  render() {
    const { postData } = this.state;
    console.log(postData);
    return (
      <div className="flex-align-center">
        <p>This is news feed</p>
        {createPost(postData)}
      </div>
    );
  }
}

const createPost = postArray => (
  <>
    {postArray.map(post => (
      <PostCard postDetails={post} />
    ))}
  </>
);
