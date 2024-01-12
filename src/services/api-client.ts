import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params:{
        key: '94b1f79481d745bcb4ec9464a2a21099'
    }
})