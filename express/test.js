import axios from "axios";
import express from 'express';

const URL = "https://api.github.com/user";
const TOKEN = "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";


async function makeRequest() {
    const app = express();
    try {
        
        const restt = await axios.get(URL,{
            headers: {
                Authorization: `Token ${TOKEN}`
            }
        });
        const {login,location} = restt.data;
        
        app.get('/train', (req, res) => {
            res.send(`username is ${login} who lives in ${location} on web`)
        })

        app.listen(3000, () => {
            console.log(`username is ${login} who lives in ${location}`);
        })

    }
    catch (error) {
        console.error(error);
    }
}
makeRequest();