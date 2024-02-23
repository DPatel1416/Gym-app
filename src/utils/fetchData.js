// Configuration object for making API requests to the 'exercisedb.p.rapidapi.com' API
export const exerciseOptions = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY     
  }
};

// Configuration object for making API requests to the 'youtube-search-and-download.p.rapidapi.com' API
export const youtubeOptions = {
  method: 'GET',   
  headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY    
  }
};

// Function to fetch data from an API
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
