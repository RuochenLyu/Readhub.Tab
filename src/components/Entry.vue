<template>
  <div class="entry" v-bind:class="{ active: isActive }">
    <h3 class="title">
      <a :href="entry | renderUrl">{{ entry.title | pangu }}</a>
    </h3>
    <div class="meta">
      <time>{{ entry.publishDate | moment('from') }}</time>
      <span>{{ entry.siteName || `${entry.newsArray.length} 个来源` }}</span>
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

  data: function () {
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

  filters: {
    pangu: function (value) {
      if (!value) return ''
      let el = document.createElement('div')
      el.innerHTML = value
      return pangu.spacing(el.innerText)
    },

    renderUrl: function (entry) {
      if (entry.newsArray) {
        return `https://readhub.me/topic/${entry.id}`
      } else {
        return entry.url
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.entry {
  margin-bottom: 30px;
  opacity: 0;
  transform: translateX(-5rem);
  transition: transform 500ms cubic-bezier(.7,0,.1,1), opacity 500ms cubic-bezier(.7,0,.1,1);

  @for $i from 1 through 20 {
    &:nth-child(#{$i}) {
      transition-delay: #{25 * $i}ms;
    }
  }

  &.active {
    transform: translateX(0);
    opacity: 1;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .title a {
    color: #151719;
    font-size: 24px;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid currentColor;
    }

    &:visited {
      color: #BFBFBF;
    }
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
