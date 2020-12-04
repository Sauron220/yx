export default {
  inserted: (el, binding, vnode) => {
    el.style.cursor = 'pointer'
    el.onclick = () => {
      const { exploreList, key } = binding.value
      if (exploreList.length && exploreList.length > 0) {
        for (var i = 0; i < exploreList.length; i++) {
          const url = `${exploreList[i].value}${key}`
          window.open(url, 'i' + i)
        }
      } else {
        const url = `https://www.baidu.com/s?wd=${key}`
        window.open(url, '_blank')
      }
    }
  },
  update (el, binding, vnode) {
    el.style.cursor = 'pointer'
    el.onclick = () => {
      const { exploreList, key } = binding.value
      if (exploreList.length && exploreList.length > 0) {
        for (var i = 0; i < exploreList.length; i++) {
          const url = `${exploreList[i].value}${key}`
          window.open(url, 'i' + i)
        }
      } else {
        const url = `https://www.baidu.com/s?wd=${key}`
        window.open(url, '_blank')
      }
    }
  }
}
