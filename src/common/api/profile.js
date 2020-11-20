import axios from 'axios';

const baseUrl = 'http://ec2-52-77-224-102.ap-southeast-1.compute.amazonaws.com'
export function apiFetchProfileDetail(headers) {
  return axios({
    method: 'GET',
    url: baseUrl+'/users',
    headers,
  });
}