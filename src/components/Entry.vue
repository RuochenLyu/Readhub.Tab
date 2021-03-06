<template>
  <div class="entry" v-bind:class="{ active: isActive }">
    <h3 class="title">
      <a :href="entry | renderUrl"><span v-if="entry.order > 1000000">🔝</span> {{ entry.title | pangu }}</a>
    </h3>
    <div class="meta">
      <time>{{ entry.publishDate | moment('from') }}</time>
      <a :href="entry.url" v-if="entry.siteName">{{ entry.siteName}}</a>

      <template v-for="(item, index) in entry.newsArray">
        <a :href="item.url" v-if="index < 3">{{item.siteName}}</a>
        <span v-if="index >= 3 && (index + 1 == entry.newsArray.length)">等 {{entry.newsArray.length}} 个来源</span>
      </template>
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
        return `https://readhub.cn/topic/${entry.id}`
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
  transition: transform 500ms cubic-bezier(0.7, 0, 0.1, 1),
    opacity 500ms cubic-bezier(0.7, 0, 0.1, 1);

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
    color: #212121;
    font-size: 24px;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid currentColor;
    }

    &:visited {
      color: #bfbfbf;
    }

    span {
      font-size: 18px;
    }
  }

  time {
    margin-right: 5px;
  }

  .meta {
    color: #bfbfbf;
    font-size: 14px;

    a {
      color: #bfbfbf;

      &:hover {
        border-bottom: 1px solid currentColor;
      }

      &:visited {
        color: #bfbfbf;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  .entry {
    .title a {
      color: #ededed;

      &:visited {
        color: #555;
      }
    }

    .meta {
      color: #555;

      a {
        color: #555;

        &:visited {
          color: #555;
        }
      }
    }
  }
}
</style>
