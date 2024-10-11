import axios from "axios";
import express from 'express';

const URL = "https://api.github.com/users/Trainght";


async function makeRequest() {
    const app = express();
    try {
        
        const restt = await axios.get(URL);
        const ip = restt.data;
        
        app.get('/home', (req, res) => {
            res.json(ip)

        })

        app.listen(8082, () => {
            console.log(ip);
        })

    }
    catch (error) {
        console.error(error);
    }
}
makeRequest();