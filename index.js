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


