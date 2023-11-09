import axios from 'axios';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const apiService =  {
    fetchMovies: async (search) => {
        try{
            const response = await axios.get(apiKey+"&s="+search)
            console.log(response.data)
            return response.data
        }catch(error) {
            console.log(error);
        }
    },
} ; 

export default apiService;