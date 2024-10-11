import axios from "axios";
import express from 'express';

const URL = "https://httpbin.org/ip";


async function makeRequest() {
    const app = express();
    try {
        
        const restt = await axios.get(URL);
        const ip = restt.data.origin;
        
        app.get('/ip', (req, res) => {
            res.json({ip})

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