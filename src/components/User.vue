<template>
  <div class="user"><img :src="user.img" :alt="user.name">
    <aside>
      <div class="name">{{user.name}}</div>
      <div class="skill">{{user.skill}}</div>
      <div class="location">{{user.location}}<span class="url">{{user.url}}</span></div>
    </aside>

    <div class="custom-checkbox">
      <input
        type="checkbox"
        v-model="user.checked"
        :id="'checkbox'+user.name"
        :value="user.name"
        v-on:change="onSelectedUser"
      >
      <label :for="'checkbox'+user.name"></label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    props: ['user'],
    methods: {
      onSelectedUser: () => {
        Event.$emit('onSelectedUser')
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/style/common";

  .user {
    position: relative;
    margin-bottom: 1.8em;

    img {
      vertical-align: middle;
      width: 5em;
      height: 5em;
      border-radius: 100%;
    }

    aside {
      margin-left: 1.6em;
      display: inline-block;
      vertical-align: middle;

      .name {
        color: $user-name;
      }

      .skill {
        font-size: .9em;
        color: $skill;
      }

      .location {
        margin-top: .2em;
        color: $location;

        span.url {
          margin-left: .5em;
          color: $url;
        }
      }
    }
  }

  .custom-checkbox {
    width: 1.25em;
    height: 1.25em;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    label {
      width: 1.25em;
      height: 1.25em;
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: .05em solid $checkbox-circle;
      cursor: pointer;

      &:hover {
        opacity: .7;
      }
    }

    input {
      display: none;
    }

    input:checked + label {
      border: none;
      background: url("../assets/static/basketball.png") no-repeat center;
      background-size: 100%;
    }
  }
</style>
