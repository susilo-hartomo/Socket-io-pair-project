<template>
  <div id="app">
    <Welcome v-if="welcome" />
    <BlockGame v-if="blockGame" />
    <CreateRoom v-if="createRoom" />
  </div>
</template>

<script>
import Welcome from "./components/Welcome";
import BlockGame from "./components/BlockGame.vue";
import CreateRoom from './components/CreateRoom';

export default {
  name: "App",
  data: () => ({
    welcome: false,
    blockGame: false,
    createRoom: true,
  }),
  components: {
    BlockGame,
    Welcome,
    CreateRoom
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background-image: url("./assets/bg.jpg");
  background-size: cover;
}

CreateRoom {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
}
</style>
