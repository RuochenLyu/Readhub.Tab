<template>
  <div class="card card-1" v-on:click="visit(entry.link)" v-bind:class="{ active: isActive }">
    <h3 class="card-title">{{ entry.title | pangu }}</a></h3>
    <div class="meta">
      <time>{{ `${entry.pubDate}+00:00` | moment('from') }}</time>
      <span>{{ entry.author }}</span>
    </div>
  </div>
</template>

<script>
import pangu from 'pangu'

export default {
  name: 'entry',

  props: {
    entry: {
      type: Object
    }
  },

  data () {
    return {
      isActive: false
    }
  },

  created: function () {
    let that = this
    setTimeout(function () {
      that.isActive = true
    }, 500)
  },

  methods: {
    visit: function (link) {
      location.href = link
    }
  },

  filters: {
    pangu: function (value) {
      if (!value) return ''
      return pangu.spacing(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 30px;
  padding: 16px;
  width: 600px;
  opacity: 0;
  cursor: pointer;
  transform: translateX(-3rem);
  transition: all 500ms cubic-bezier(.7,0,.1,1) 0;

  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      transition-delay: #{25 * $i}ms;
    }
  }

  &.active {
    transform: translateX(0);
    opacity: 1;
  }

  &:hover {
    .card-title {
      color: #E37148;
    }
  }

  .card-title {
    font-size: 20px;
    transition: color 300ms cubic-bezier(.25,.8,.25,1);
  }

  time {
    margin-right: 5px;
  }

  .meta {
    color: #BFBFBF;
    font-size: 14px;
  }
}
</style>
