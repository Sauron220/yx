export default {
  inserted: (el, binding, vnode) => {
    el.style.cursor = 'pointer'
    el.onclick = () => {
      const { mapSearchUrl = 'https://map.baidu.com/search/', address } = binding.value
      const url = `${mapSearchUrl}${address}`
      window.open(url, '_blank')
    }
  },
  update (el, binding, vnode) {
    el.style.cursor = 'pointer'
    el.onclick = () => {
      const { mapSearchUrl = 'https://map.baidu.com/search/', address } = binding.value
      const url = `${mapSearchUrl}${address}`
      window.open(url, '_blank')
    }
  }
}
