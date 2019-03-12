import React, { Component } from "react";
import { getPostsData } from "../../shared/Data/Data";
import PostCard from "../../shared/PostCard/PostCard.Component";
import WritePost from "../WritePost/WritePost.Component";

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
        <WritePost />
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
