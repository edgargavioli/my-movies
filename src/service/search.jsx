import axios from 'axios';


const apiService = {
 fetchData: async function(search, saveValue){
        try {
            const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
            const response = await axios.get(apiKey+"&s="+search)
            saveValue(response.data)
        }catch(error){
            alert("Ocorreu um erro: "+error)
            saveValue({})
        }
    }
}

export default apiService;
