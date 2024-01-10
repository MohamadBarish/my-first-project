import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: "847a73ed500a427caa592bcc981e32de",

    }
})