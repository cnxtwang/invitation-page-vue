<template>
  <div>
    <input type="text" placeholder="Send invite by e-mail">
    <button
        :disabled="isDisabled"
        :class="{disabled: isDisabled}"
        @click="onClickInvite">
      invite
    </button>
  </div>
</template>

<script>
  export default {
    name: 'email-invite',
    computed: {
      isDisabled() {
        return !store.users.some(user => user.checked)
      }
    },
    methods: {
      onClickInvite () {
        let message = ''
        store.users.forEach(user => {
          if(user.checked) message += user.name + ' '
        })
        alert(message + 'has been invited!')
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/style/common";

  footer {
    input {
      width: 100%;
      font-size: .9em;
      padding-left: 1.1em;
      height: 3.5em;
      margin-top: .1em;
      border-radius: .2em;
      border: .1em solid $email-border;
      opacity: .5;
    }

    button {
      width: 100%;
      border: none;
      font-size: 1.05em;
      text-transform: uppercase;
      margin-top: 1.8em;
      border-radius: .2em;
      height: 3.55em;
      color: white;
      background: $enabled-button;
      cursor: pointer;

      &:hover {
        opacity: .5;
      }

      &:active {
        opacity: .8;
      }
    }

    button.disabled {
      background: $disabled-button;
      cursor: not-allowed;
    }
  }
</style>
