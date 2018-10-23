const axios = require('axios');

const API_URL = "http://localhost:8080/api/v1/"


function posts(parent,args,context,info) {
    let posts = [
        {title:"post 1",text:"El texto 1",readers:2},
        {title:"post 2",text:"El texto 2",readers:4},
        {title:"post 3",text:"El texto 3",readers:1}
    ]
    return posts;
}


async function houses(parent, args, context, info){
    const {data} = await axios.get(`${API_URL}houses`)
    return data 
}


module.exports = {
    posts,
    houses

}