<template>
  <div id="room">
    <div class="position">
      <div class="col-8 col-md-5">
        <div class="card p-4">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Input your name and play" />
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%">Submit</button>
          </form>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#room {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align-last: center;
}

.card {
  width: 400px;
  background-color: currentColor;
  opacity: 0.8;
}
</style>
