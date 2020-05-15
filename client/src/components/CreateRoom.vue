<template>
  <div id="room">
    <div class="postion">
      <div class="card colorr" style="width: 700px">
        <div class="card-header">
          <div>
            <h4 class="text-light">Create Room</h4>
          </div>
          <div class="form-group name-room">
            <input type="text" class="form-control" />
            <a href="/play" class="btn btn-primary ml-2">Create</a>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title mb-3 text-light">List Room</h5>
          <div class="list-room">
            <ListRoom style="witdh: 40px"></ListRoom>
            <button @click="main"  class="btn btn-primary ml-2">Join</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListRoom from "./ListRoom";
export default {
  name: "CreateRoom",
  data: () => ({
    key: "value"
  }),
  components: {
    ListRoom
  }, methods:{
    main(){
      console.log('masu main');
      this.$router.push({name: "BlockGame"})
    }
  }
};
</script>

<style>
#room {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.postion {
  margin: auto;
}
.colorr{
  background-color: black;
  opacity: 0.8;
}
.card {
  display: flex;
  justify-content: center;
}
.card-header {
  display: flex;
  justify-content: space-between;
  bottom: 0px;
}
.name-room {
  display: flex;
  height: 100%;
}
.list-room {
  width: 100%;
  height: 250px;
  overflow: auto;
}
listRoom {
  width: 70px;
}
</style>