const axios = require('axios');

const API_URL = "http://localhost:8080/api/v1/" //aquí ponemos el puerto de nuestra otra api


async function login(parent, args, context, info) {

    let {data} = await axios.post(`${API_URL}users/login`,
        {email: args.email, password: args.password}
    )

    return {
        token: data.token
    }


}

module.exports = {
    login
}