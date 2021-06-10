Vue.component('movie-card', {
  props: ['image', 'title'],
  template: `
    <div>
      <img width="100" v-bind:src="image" />
      <h2>{{ title }}</h2>
    </div>
  `,
})

new Vue({
  el: '#app'
})