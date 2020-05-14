<template>
  <div id="winner">
    <div class="card">
      <div class="card-body">
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
          <iframe
            src="https://giphy.com/embed/3o752gHYJ8UAAdeZd6"
            width="100%"
            height="100%"
            style="position:absolute"
            frameborder="0"
          ></iframe>
        </div>
        <p>
          <a href="https://giphy.com/gifs/psbar-win-winner-3o752gHYJ8UAAdeZd6"></a>
        </p>
      </div>
      <div class="card-footer">
        <h4>Congratulation</h4>
        <p>Player Name</p>
      </div>
      <dir>
          <button class="btn btn-primary mr-2">Play Again</button>
          <button class="btn btn-outline-danger">Finish</button>
      </dir>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#winner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 300px;
  padding: 10px;
}

h4 {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>