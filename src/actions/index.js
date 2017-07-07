import _ from "lodash";

import { FETCH_POSTS, UPDATE_POST, DELETE_POST, CREATE_POST } from "./types";

const INITAL_POSTS = {
  123: "One wierd trick",
  456: "Bet you wanted this"
};

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: INITAL_POSTS
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
  return {
    type: DELETE_POST,
    payload: key
  };
}
