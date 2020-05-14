<template>
  <div id="app">
    <Welcome v-if="welcome" />
    <CreateRoom v-if="createRoom" />
    <TrackFrog v-if="trackFrog"/>
    <Winner v-if="winner"/>
  </div>
</template>

<script>
import Welcome from "./components/Welcome";
import CreateRoom from './components/CreateRoom';
import TrackFrog from './components/TrackFrog';
import Winner from './components/Winner';

export default {
  name: "App",
  data: () => ({
    welcome: false,
    createRoom: true,
    trackFrog: false,
    winner: false,
  }),
  components: {
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
</style>
