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
  }

  render() {
    const { postData } = this.state;
    return (
      <div className="newsFeed-width">
        <p>This is news feed</p>
        {createPost(postData)}
      </div>
    );
  }
}

const createPost = postArray => (
  <>
    {postArray.map(post => (
      <PostCard key={post.id} postDetails={post} />
    ))}
  </>
);
