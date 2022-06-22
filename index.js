// TODO: 公式リファレンスに沿って JavaScript を記述
const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
        setInterval(() => {
          this.counter++
        }, 1000)
    }
}

  
Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
}
  
Vue.createApp(AttributeBinding).mount('#bind-attribute')

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