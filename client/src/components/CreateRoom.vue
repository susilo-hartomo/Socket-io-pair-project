<template>
  <div id="room">
    <div class="size-card">
      <div class="postion">
        <div class="card">
          <div class="card-header">
            <div>
              <h4>Create Room</h4>
            </div>
            <div class="form-group name-room">
              <input type="text" class="form-control" />
              <a href="#" class="btn btn-primary ml-2">Create</a>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3">List Room</h5>
            <div class="list-room">
              <ListRoom/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListRoom from './ListRoom';
export default {
  name: 'CreateRoom',
  data: () => ({
    key: 'value'
  }),
  components: {
    ListRoom,
  },
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

.size-card {
  width: 50%;
  display: flexbox;
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
  height: 220px;
  overflow: auto;
}
</style>