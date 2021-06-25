import axios from "axios";

const URL = "https://randomuser.me/api/?results=50&nat=us"

export default {
    getEmployees: function() {
        console.log('The url is', URL)
        return axios.get(URL);
    }
}

