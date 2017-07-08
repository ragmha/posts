import _ from "lodash";

import { FETCH_POSTS, UPDATE_POST, DELETE_POST, CREATE_POST } from "./types";

import { Posts } from "../firebase";

export function fetchPosts() {
  return dispatch => {
    Posts.on("value", snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: {
      [_.uniqueId()]: post
    }
  };
}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}
