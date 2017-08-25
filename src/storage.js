const STORAGE_KEY = 'readhub.tab/v1'

const storage = {
  fetch: function () {
    if (window.chrome && window.chrome.storage) {
      window.chrome.storage.local.get(STORAGE_KEY, function (entries) {
        return JSON.parse(entries || '[]')
      })
    } else {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    }
  },
  save: function (entries) {
    if (window.chrome && window.chrome.storage) {
      window.chrome.storage.local.set({STORAGE_KEY: JSON.stringify(entries)})
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    }
  }
}

export { storage }
export default storage
