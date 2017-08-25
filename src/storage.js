const STORAGE_KEY = 'readhub.tab/v1'

const storage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }
}

// const storage = {
//   fetch: function () {
//     let entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
//     entries.forEach(function (entry, index) {
//       entry.id = index
//     })
//     storage.uid = entries.length
//     return entries
//   },
//   save: function (entries) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
//   }
// }

export { storage }
export default storage
