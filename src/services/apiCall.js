import { getItem } from "../utils/storage"

import axios from 'axios'

console.log('HEADER TOKEN', getItem('token'))

export function getReq(url) {
  return axios.get(url)
}

export function getReqParam(url) {
  return axios.get(url)
}
export function getReqParamheader(url) {
  const authHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getItem('token')}`,
  }
  return axios({
    method: 'get',
    url,
    headers: authHeader,
  })
}
export function postReq(url, args) {
  return axios({
    method: 'post',
    url,
    data: args,
  })
}
export function postReqParam(url, args) {
  return axios({
    method: 'post',
    url,
    data: args,
  })
}
export function postReqParamheader(url, args) {
  const authHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getItem('token')}`,
  }
  return axios({
    method: 'post',
    url,
    headers: authHeader,
    data: args,
  })
}
export function postReqParamheaderFile(url, args) {
  const authHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getItem('token')}`,
  }
  return axios({
    method: 'post',
    url,
    headers: authHeader,
    data: args,
    responseType: 'arraybuffer',
  })
}
export function patchReqParam(url, args) {
  return axios({
    method: 'patch',
    url,
    data: args,
  })
}
export function deleteReqParam(url) {
  return axios.delete(url)
}

export function deleteReqParamheader(url) {
  const authHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getItem('token')}`,
  }
  return axios({
    method: 'delete',
    url,
    headers: authHeader,
  })
}
