const STORAGE_KEY = 'readhub.tab/v1.1'

export default {
  fetch: function () {
    return JSON.parse(localStorage.getItem(`${STORAGE_KEY}/entries`) || '[]')
  },

  save: function (entries) {
    localStorage.setItem(`${STORAGE_KEY}/entries`, JSON.stringify(entries))
  },

  channel: {
    fetch: function () {
      return localStorage.getItem(`${STORAGE_KEY}/channel`) || 'topics'
    },

    save: function (channel) {
      localStorage.setItem(`${STORAGE_KEY}/channel`, channel)
    }
  }
}
