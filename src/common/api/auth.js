import axios from 'axios';
// import baseUrl from './config'

const baseUrl = 'http://ec2-52-77-224-102.ap-southeast-1.compute.amazonaws.com'
export function apiLogin(dataLogin) {
  return axios({
    method  : 'POST',
    url     : baseUrl + '/login',
    data    : dataLogin,
  })
}
export function apiRegister(dataRegister) {
    // console.log(dataRegister)
  return axios({
    method  : 'POST',
    url     : baseUrl + '/register',
    data    : dataRegister,
  })
}