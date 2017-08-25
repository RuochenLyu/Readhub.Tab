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
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      let self = this
      this.$http.get('http://api.rss2json.com/v1/api.json', {
        params: {
          rss_url: 'http://readhub.bayes.cafe/rss?channel=topics',
          api_key: 'havl9vqc7nmdjlmbofbltgeej3q0gqweh0ftpd3k',
          count: 10
        }
      }).then(function (response) {
        self.entries = response.data.items
        storage.save(response.data.items)
      })
    }
  }
}
</script>
