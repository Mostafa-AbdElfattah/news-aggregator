import { axiosInstanceFirstSource , axiosInstanceSecondSource } from ".";

const getNewsFirstSource = async (params) =>
  await axiosInstanceFirstSource.get(`everything`,{ params });

const getNewsSecondSource = async (params) =>
  await axiosInstanceSecondSource.get(`home.json`,{ params });



export {getNewsFirstSource, getNewsSecondSource };
