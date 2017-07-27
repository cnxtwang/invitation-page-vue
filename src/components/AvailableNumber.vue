<template>
  <p>{{count}} invites available</p>
</template>

<script>
  export default {
    name: 'available-number',
    data() {
      return {
        count: 0
      }
    },
    created() {
      Event.$on('setAvailableNumber', () => {
        let count = 0
        store.users.forEach(user => {
          if(!user.checked) {
            count ++
          }
        })
        this.count = count
      })
    }
  }
</script>
