> This is component is deprecated, since it's simple enough to use [autosize](http://www.jacklmoore.com/autosize/) directly, see details: https://github.com/egoist/vue-autosize-textarea/issues/1

# vue-autosize-textarea

Vue.js port of [Autosize](https://github.com/jackmoore/autosize)

## Usage with Webpack

**Template**:

```html
<div id="app">
  <autosize-textarea resized="onResized" value="default value"></autosize-textarea>
</div>

```

**Component**

```js
import Vue from 'vue'
import autosizeTextarea from 'vue-autosize-textarea'

new Vue({
  el: '#app',
  methods: {
    onResized () {
      console.log('resized!')
    }
  },
  components: {
    'autosize-textarea': autosizeTextarea
  }
})
```

**Demo**

https://egoist.github.io/vue-autosize-textarea

## License

MIT
