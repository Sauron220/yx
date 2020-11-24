/**
 * @param {any} param
 * @return {string} eq. string, array
 * */
export const type = (param) => {
  return Object.prototype.toString.call(param).match(/\[object (.*?)\]/)[1].toLowerCase()
}
