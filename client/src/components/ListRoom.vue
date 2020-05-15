<template>
  <div id="selectRoom">
    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-header">
            <h6>Room Name</h6>
            <button v-on:click="main()" class="btn btn-primary ml-2">Join</button>
          </div>
          <div class="card-body">
            <p>Name</p>
            <p>Name</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "ListRoom",
  methods:{
    main(){
      console.log('masuk main');
      this.$router.push({name: "BlockGame"})
    }
  }
};

</script>

<style>
</style>