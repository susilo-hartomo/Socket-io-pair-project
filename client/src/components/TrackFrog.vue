<template>
  <div class="track">
    <div class="card p-4 mt-4">
      <form action>
        <div class="form-group d-flex">
          <input type="text" class="form-control mr-2" placeholder="Turn Player Name" />
          <button class="btn btn-primary">Tunr</button>
        </div>
        <div class="show-turn">
          <div class="card view-turn">
            <h1 type="view-random-number">4</h1>
          </div>
        </div>
      </form>
    </div>
    <div class="track">
      <div class="d-flex justify-content-center line-1">
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
        <div class="item">
          <img src="../assets/image/frog.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.track {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}

.line-1 {
  margin-bottom: -30px;
}

img {
  width: 120px;
  height: 120px;
}

.show-turn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.view-turn {
  width: 50%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>