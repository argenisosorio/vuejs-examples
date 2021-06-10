const app = new Vue({
  el: '#app',
  template: `
    <div>

      <ul>
        <li v-for="(course, index) in courses" v-bind:key="index">
          <a v-bind:href="course.url"> {{ course.name }} </a>
        </li>
      </ul>

      <div v-if="show">
        {{ message }}
        <img v-bind:src="image" width="150">
      </div>
      <button @click="toggleShow()">Show/Hide</button>

    </div>
  `,
  data: {
    courses: [
      { name: "PHP", url: 'https://www.youtube.com/1' },
      { name: "Python", url: 'https://www.youtube.com/2' },
      { name: "JavaScript", url: 'https://www.youtube.com/3' },
    ],
    show: true,
    message: 'Hello Vue!',
    image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB'
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show
    }
  }
})