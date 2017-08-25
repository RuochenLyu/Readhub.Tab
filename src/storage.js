const STORAGE_KEY = 'readhub.tab/v1'

export default {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }
}
