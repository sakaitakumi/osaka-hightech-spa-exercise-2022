// TODO: 公式リファレンスに沿って JavaScript を記述
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

const TodoItem = {
    template: `<li>This is a todo</li>`
}
  
// Vue アプリケーションを生成する
const app = Vue.createApp({
    components: {
      TodoItem // 新しいコンポーネントを登録する
    },
... // その他のコンポーネントのプロパティ
})
  
// Vue アプリケーションをマウントする
app.mount(...)