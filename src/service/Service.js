import axios from 'axios';
// let BASE_URL = 'https://baykatre.com/earthquake-dataset.json'
let BASE_URL_NEW = 'https://anilozturk.co/csvjson.json'
class Service {
    
    fetchDataset = () => {
        return axios.get(BASE_URL_NEW);
    }
}

export default new Service();
