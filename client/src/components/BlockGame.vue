<template>
  <div class="container" style='text-align:center;'>
    <canvas ref="game" width="1000" height="400" style="border: 1px solid black; background-image:url(https://i.imgur.com/HN5iah7.jpg);"></canvas>
      <div class="wrapper">
        <button v-if="!resetGame && !jalan && satu" v-on:click="move('randomone')" class="cta" href="#">
          <span>Player1</span> 
         </button>
          <button v-if="!resetGame && !jalan && dua" v-on:click="move('randomTwo')" class="cta" href="#">
          <span>Player2</span> 
         </button>
        <button v-if="resetGame" v-on:click="reset" class="cta" href="#">
          <span>ResetGame</span> 
         </button><br>
         <button v-if="resetGame" v-on:click="logout" class="cta" href="#">
          <span>LOGOUT</span> 
         </button>
      </div>
    <p>
     
    </p>
    <h1 v-if="win">{{winner}}</h1>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "BlockGame",
  data() {
    return {
      socket: {},
      context: {},
      playerOne: {
        x: 0,
        y: 0
      },
      playerTwo:{
         x: 0,
        y: 0
      },
      winner: '',
      win: false,
      resetGame: false,
      jalan: false,
      satu: false,
      dua: false,
      counter: 0,
      user1: '',
      user2: ''
    };
  },
  created() {
    this.socket = io("http://localhost:3000");
    this.socket.emit('playerIn', localStorage.getItem('currentUser'))
    
    
  }, mounted() {
    this.context = this.$refs.game.getContext("2d");
    console.log('masuk mounted line 53')

this.socket.on('mulaiDariAwal', data=>{
  this.resetGame = false;
  this.logout = false;
  this.win = false;
})

   this.socket.on('playerList', data=>{
   
     console.log(data)
     console.log('========================',localStorage.getItem('currentUser'))
    this.user1 = data[0]
    this.user2 = data[1]
    if(localStorage.currentUser == this.user1){
      this.satu = true;
      this.dua = false
    }else{
      this.satu = false;
      this.dua = true
    }
   })

    this.socket.on("positionOne", data => {
      console.log('massuk player one', data)
      this.playerOne = data;
      if(this.playerOne.x > 900){
         this.win = true;
         this.playerOne.x = 0
         this.playerTwo.x = 0
         this.resetGame = true;
         this.context.fillText('\uf52e',this.playerTwo.x, this.playerTwo.y);
          // this.socket.emit('pesan', 'kamu kalah player 2')
         
         this.winner = `>>>>>>>>>> PLayer ONE is the winner <<<<<<<<<<<`;
       
      }
    this.context.font = '900 75px "Font Awesome 5 Free"'
     this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height);
     
     this.context.fillText('\uf52e',this.playerOne.x, this.playerOne.y);

     if(this.playerTwo.y !== 0){

       this.context.fillText('\uf52e',this.playerTwo.x, this.playerTwo.y);
     }

   
    
    });

    this.socket.on('positionTwo', data =>{
      console.log('masukplayer two', data)
       this.playerTwo = data;
      if(this.playerTwo.x > 900){
         this.win = true;
         this.playerTwo.x = 0
        this.playerOne.x = 0
        this.resetGame = true;
         this.winner = `>>>>>>>>>> PLayer TWO is the winner <<<<<<<<<<<`;
       
     
      }
    this.context.font = '900 75px "Font Awesome 5 Free"'
     
       this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height);
     this.context.fillText('\uf52e',this.playerTwo.x, this.playerTwo.y);
   this.context.fillText('\uf52e',this.playerOne.x, this.playerOne.y);
    })

    // this.socket.on('hasilPesan', data=>{
    //   this.winner = data
    // })
  },
  methods: {
    move(direction) {
      console.log('masuk', direction)
      this.socket.emit("move", direction);
      // if(this.counter === 0){
      //   this.counter += 1;
      //   this.satu = false;
      //   this.dua = true
      // }else{
      //   this.counter -= 1
      //    this.satu = true;
      //   this.dua = false
      // }
    },
    reset() {
      this.win = false;
      this.resetGame = false;
     
      this.socket.emit('reset')
      
    },
    logout(){
      localStorage.clear()
      this.$router.push('/')
    },
    playerSatu(){
      this.jalan = false
    }
  },
 
};
</script>

<style scoped>  
canvas{
  font-family: "Font Awesome 5 Free";
  content: "\f005";
  font-weight: 900;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.cta {
    display: flex;
    padding: 10px 45px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    color: white;
    background: #6225E6;
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
}

.cta:focus {
   outline: none; 
}

.cta:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #FBC638;
}

.cta span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0px;
}

.cta:hover  span:nth-child(2) {
    transition: 0.5s;
    margin-right: 45px;
}

  span {
    transform: skewX(15deg) 
  }

  span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }
  </style>