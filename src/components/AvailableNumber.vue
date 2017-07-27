<template>
  <p>{{count}} invites available</p>
</template>

<script>
  export default {
    name: 'available-number',
    data() {
      return {
        shared: store
      }
    },
    computed: {
      count() {
        return this.shared.users.filter(user => !user.checked).length
      }
    }
  }
</script>
