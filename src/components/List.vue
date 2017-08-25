<template>
  <div class="list">
    <entry v-for="entry in entries" :entry="entry" :key="entry.guid"></entry>
  </div>
</template>

<script>
import storage from '../storage'
import Entry from './Entry'

export default {
  name: 'list',

  components: {
    Entry
  },

  data () {
    return {
      entries: storage.fetch()
    }
  },

  created: function () {
    let that = this
    setTimeout(function () {
      that.fetchData()
    }, 3000)
  },

  methods: {
    fetchData: function () {
      this.$http.get('//api.rss2json.com/v1/api.json', {
        params: {
          rss_url: 'http://readhub.bayes.cafe/rss?channel=topics',
          api_key: 'havl9vqc7nmdjlmbofbltgeej3q0gqweh0ftpd3k',
          count: 10
        }
      }).then(function (response) {
        storage.save(response.data.items)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
