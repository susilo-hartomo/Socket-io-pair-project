<template>
  <div id="app">
    <Welcome v-if="welcome" />
    <BlockGame v-if="blockGame" />
    <CreateRoom v-if="createRoom" />
    <TrackFrog v-if="trackFrog"/>
    <Winner v-if="winner"/>
  </div>
</template>

<script>
import Welcome from "./components/Welcome";
import BlockGame from "./components/BlockGame.vue";
import CreateRoom from './components/CreateRoom';
import TrackFrog from './components/TrackFrog';
import Winner from './components/Winner';

export default {
  name: "App",
  data: () => ({
    welcome: false,
    blockGame: false,
    createRoom: false,
    trackFrog: false,
    winner: true
  }),
  components: {
    BlockGame,
    Welcome,
    CreateRoom,
    TrackFrog,
    Winner,
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
