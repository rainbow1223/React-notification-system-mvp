import axios from 'axios';

const postUrl = 'http://localhost:5000/posts';
const userUrl = 'http://localhost:5000/users';

export const fetchPosts = () => axios.get(postUrl);
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${postUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${postUrl}/${id}`);
export const likePost = (id) => axios.patch(`${postUrl}/${id}/likePost`);

export const loginUser = (email) => axios.post(userUrl + '/login', { email });