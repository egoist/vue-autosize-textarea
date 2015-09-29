import Vue from 'vue'
import autosize from 'autosize'

const template = '<textarea>{{ value }}</textarea>'

const autosizeTextarea = Vue.extend({
  props: ['value', 'resized'],
  template: template,
  ready () {
    autosize(this.$el)
    if (this.resized) {
      this.$parent[this.resized](this.$el)
    }
  }
})

export default autosizeTextarea