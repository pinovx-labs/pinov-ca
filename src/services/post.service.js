import axios from "axios";
import { constants } from "../constants/constants";
import authHeader from "./auth.header";


const API_URL = constants.API_URL;

const getAllBlogPublicPosts = () => {
  return axios.get(`${API_URL}/blogs`);
};

const getAllDraftPosts = () => {
  return axios.get(`${API_URL}/drafts`, { headers: authHeader() });
};

const postService = {
  getAllBlogPublicPosts,
  getAllDraftPosts
};

export default postService;