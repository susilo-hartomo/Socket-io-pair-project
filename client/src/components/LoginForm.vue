<template>
  <!-- <div id="room">
    <div style="position: fixed; z-index: -99; width: 100%; height: 100%">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0B8TaM752KA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="position">
      <div class="col-8 col-md-5">
        <div class="card p-4">
          <form v-on:submit.prevent="login">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Input your name and play" v-model="userName"/>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%">Submit</button>
          </form>
        </div>
        </div>
      </div>
  </div> -->

  <div>
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>WANT A PLAY?</h2><br>
          <form method="post" class="form">
          <label for="user-email" style="padding-top:13px">
            &nbsp;Username</label>
            <input
             id="user-email"
             v-model="userName"
             class="form-content"
             type="email"
             name="email"
             required />
             <div class="form-border"></div>
            <input
            id="submit-btn"
            type="submit"
            name="submit"
            value="LOGIN"
            @click.prevent="login"/>
           </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
 data(){
   return{
    userName: '',
   }
 },methods:{
   login(){
     localStorage.setItem('currentUser', this.userName)
     this.$router.push({name: "CreateRoom"})
   }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #room {
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
} */

#card {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 410px;
  margin: 6rem auto 8.1rem auto;
  width: 329px;
}
#card-content {
      padding: 12px 44px;
}
#card-title {
      letter-spacing: 4px;
      padding-bottom: 23px;
      padding-top: 13px;
      text-align: center;
}
a {
    text-decoration: none;
}
label {
    font-family: "Raleway", sans-serif;
    font-size: 11pt;
}
.form {
    align-items: left;
    display: flex;
    flex-direction: column;
}
.form-border {
    background: -webkit-linear-gradient(right, black, black);
    height: 1px;
    width: 100%;
}
.form-content {
    background: #fbfbfb;
    border: none;
    outline: none;
    padding-top: 14px;
}
#submit-btn {
    background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
    border: none;
    border-radius: 21px;
    box-shadow: 0px 1px 8px #24c64f;
    cursor: pointer;
    color: white;
    font-family: "Raleway SemiBold", sans-serif;
    height: 42.3px;
    margin: 0 auto;
    margin-top: 50px;
    transition: 0.25s;
    width: 153px;
}
#submit-btn:hover {
    box-shadow: 0px 1px 18px #24c64f;
}
</style>