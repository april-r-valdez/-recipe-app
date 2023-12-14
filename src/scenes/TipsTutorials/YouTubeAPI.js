
import axios from 'axios';

const API_KEY = "AIzaSyDY2A072lOuDB7n1J-cIQeI89Vx5f5dbtk";

const fetchVideos = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: 8,
        key: API_KEY,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error.response ? error.response.data : error.message);
    return [];
  }
};

export { fetchVideos };