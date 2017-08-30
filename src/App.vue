<template>
  <div id="app">
    <entry v-for="entry in entries" :entry="entry" :key="entry.guid"></entry>
    <setting :channel="channel" v-on:update="updateChannel"></setting>
  </div>
</template>

<script>
import storage from './storage'
import Entry from './components/Entry'
import Setting from './components/Setting'

export default {
  name: 'app',

  components: {
    Entry,
    Setting
  },

  data: function () {
    return {
      entries: storage.fetch(),
      channel: storage.channel.fetch()
    }
  },

  created: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      let self = this
      this.$http.get('http://api.rss2json.com/v1/api.json', {
        params: {
          rss_url: `http://readhub.bayes.cafe/rss?channel=${self.channel}`,
          api_key: 'havl9vqc7nmdjlmbofbltgeej3q0gqweh0ftpd3k',
          count: 15
        }
      }).then(function (response) {
        self.entries = response.data.items
        storage.save(response.data.items)
      })
    },

    updateChannel: function (val) {
      this.channel = val
      this.fetchData()
      storage.channel.save(val)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  padding: 30px 120px 30px 30px;
}
</style>
