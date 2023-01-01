// username: admin; password: bunny12345

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());


const configuration = new Configuration({
    organization: "org-NoZlAEd3dF9nETW9HcPNRkrq",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);




// mongoose.connect(mongoUrl, {
//     useNewUrlParser:true
// }).then(() => {console.log("Connected to database");
// })
// .catch((e)=>console.log(e));



app.post('/', async (req,res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `I need a gift for my friend which is related to ${message}`,
        max_tokens: 200,
        temperature: 0,
    })
    console.log(response.data)
    if(response.data.choices){
        res.json({
            message: response.data.choices[0].text
        });
    }
})

app.listen(5000, () => {
    console.log("Server started at port 5000");
});