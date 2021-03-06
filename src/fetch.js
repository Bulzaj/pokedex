import axios from "axios";
import axiosInstance from "./axiosConfig";
import FetchError from "./errors/fetchError";

const fetch = async function (requestConfig, applyData) {
  if (!requestConfig) throw new FetchError("No request config object provided");
  if (!applyData) throw new FetchError("No apply data function provided");
  if (!requestConfig.endpoint && !requestConfig.url)
    throw new FetchError(
      "Request config object must have specified endpoint or url field"
    );

  const { endpoint, ids, queryStrings } = requestConfig;

  if (requestConfig.url) {
    return fetchUrl(requestConfig.url, applyData);
  }

  if (ids) {
    return fetchIds(endpoint, ids, queryStrings, applyData);
  } else {
    return fetchNoIds(endpoint, queryStrings, applyData);
  }
};

const get = function (endpoint, id, queryStrings) {
  return axiosInstance.get(`/${endpoint}${id ? "/" + id : ""}`, {
    params: queryStrings,
  });
};

const fetchUrl = async function (url, applyData) {
  try {
    const result = await axios.get(url);
    applyData(result.data);
  } catch (error) {
    console.error(error);
  }
};

const fetchIds = async function (endpoint, ids, queryStrings, applyData) {
  if (ids?.includes(undefined)) return;
  try {
    const response = await axios.all(
      ids.map((id) => get(endpoint, id, queryStrings))
    );
    const data = response.map((res) => res.data);
    applyData(data);
  } catch (error) {
    console.error(error);
  }
};

const fetchNoIds = async function (endpoint, queryStrings, applyData) {
  try {
    const response = await get(endpoint, null, queryStrings, applyData);
    applyData(response.data.results);
  } catch (error) {
    console.error(error);
  }
};

export default fetch;
