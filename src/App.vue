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
      this.$http.get(`https://api.readhub.me/${self.channel}`, {
        params: {
          pageSize: 20
        }
      }).then(function (response) {
        self.entries = response.data.data
        storage.save(response.data.data)
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
