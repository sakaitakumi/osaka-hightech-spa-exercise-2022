// TODO: 公式リファレンスに沿って JavaScript を記述
const EventHandling = {
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
}
  
Vue.createApp(EventHandling).mount('#event-handling')

const TwoWayBinding = {
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
}
  
Vue.createApp(TwoWayBinding).mount('#two-way-binding')
  
const ConditionalRendering = {
    data() {
      return {
        seen: true
      }
    }
}
  
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    }
}
  
Vue.createApp(ListRendering).mount('#list-rendering')
