import axios from 'axios';

const baseUrl = 'http://ec2-52-77-224-102.ap-southeast-1.compute.amazonaws.com'
export function apiFetchMovie(headers) {
  return axios({
    method: 'GET',
    url: baseUrl+'/movies',
    headers,
  });
}

export function apiFetchMovieDetail(headers, id) {
  console.log(id)
  return axios({
    method: 'GET',
    url: baseUrl+'/movies/details',
    headers,
  });
}