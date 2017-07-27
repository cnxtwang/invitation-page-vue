<template>
  <div>
    <user
        v-for="user in shared.users"
        :user="user"
        :key="user.name"
    ></user>
  </div>
</template>

<script>
  import User from './User.vue'
  import axios from 'axios'

  export default {
    name: 'user-list',
    components: {User},
    data() {
      return {
        shared: store
      }
    },
    mounted() {
      axios.get('/mock/user.json')
        .then(response => {
          this.$set(this.shared, 'users', response.data)
        })
    }
  }
</script>
