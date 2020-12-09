// import Element from '@/index.js'
import { post, get } from './ajax'

// const { version } = Element
const version = '2.14.1'

const hostList = {
  development: 'http://localhost:8088/',
  alpha: 'https://element-api.ar.elenet.me/element/theme/',
  production: 'https://element-api.ele.me/element/theme/'
}

const host = hostList[process.env.NODE_ENV] || hostList.production

export const getVars = () => {
  return get(`${host}element/theme/getVariable?version=${version}`)
}

export const getTestEle = () => {
  return get(`${hostList.alpha}element/theme/getVariable`)
}

export const updateVars = (data, cb) => {
  return post(`${host}element/theme/updateVariable?version=${version}`, data, cb)
}
