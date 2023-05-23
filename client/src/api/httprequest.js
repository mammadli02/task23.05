import { BASE_URL } from "./base_url";
import axios from "axios";

//get all Models
export const getAllModels = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL+'/models';
  }
  else{
    URL = BASE_URL+'/models'+`?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};
//get Models by ID
export const getModelsByID = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/models/${ID}`).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

//delete models by  ID
export const deleteModelsById = async (ID) => {
  let deletedModels;
  await axios.delete(`${BASE_URL}/models/${ID}`).then((res) => {
    deletedModels = res.data.data;
  });

  return deletedModels;
};
//post models
export const postModels = (payload) => {
  axios.post(`${BASE_URL}/models`, payload);
};
//put mdels
export const editModels=(id,payload)=>{
  axios.put(`${BASE_URL}/models/${id}`,payload)
}
