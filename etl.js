const axios = require('axios');

(async () => {
    const dataRegister = {
      email: 'yogi@email.com',
      name: "priyagung elza yogitama",
      password: "admin@123",
      role: "admin",
      address: "solo",
      avatar:"tesavatar"
    }
    let url = 'http://localhost:3000'
    await axios.post(`${url}/auth/register`, {
      dataRegister
    }).then(val => console.log(val.data))
})()
    