<template>
  <div @click="calcAvailableNumber">
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
          this.shared.users = response.data
          this.calcAvailableNumber()
        })
    },
    methods: {
      calcAvailableNumber() {
        Event.$emit('setAvailableNumber')
      }
    }
  }
</script>
