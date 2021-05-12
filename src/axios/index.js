import axios from "axios"

const instance = axios.create({
  baseURL: 'https://trabajo-final-laravel-back.herokuapp.com/api/'
})


// esto lo toma contact.js {sendEmail}
const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'contact/store',
    data: data
  });

  return response
};

export {
  sendEmail
}
