import Vue from 'vue'
import autosizeTextarea from './autosize-textarea'


new Vue({
  el: '#app',
  data () {
    return {

    }
  },
  methods: {
    onResized () {
      console.log('resized!')
    }
  },
  components: {
    'autosize-textarea': autosizeTextarea
  }
})