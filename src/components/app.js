import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import PostItem from "./PostItem";
import * as actions from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  handleInputChange(event) {
    this.setState({ post: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state.post);
    this.state.post = "";
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) =>
      <PostItem key={key} post={post} id={key} />
    );
  }

  render() {
    return (
      <div>
        <h4>Create a Post</h4>
        <form
          onSubmit={this.handleFormSubmit.bind(this)}
          className="form-inline"
        >
          <br />
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a post"
              value={this.state.post}
              onChange={this.handleInputChange.bind(this)}
            />
            <button action="submit" className="btn btn-primary">
              Create a Post
            </button>
          </div>
        </form>
        <br />
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps, actions)(App);
