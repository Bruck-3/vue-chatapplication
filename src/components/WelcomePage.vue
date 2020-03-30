<template>
  <div class="container welcome">
     <div class="card">
       <div class="card-content center-align">
       <h2 class="teal-text">Welcome</h2>
       <form @submit.prevent="enterChat">
         <label for="name">Enter Your Name:</label>
         <input type="text" name="name" v-model="name">
         <p v-if="feedback" class="red-text">You Must Enter A name</p>
         <button class="btn teal">Enter Chat</button>
       </form>
       </div>
     </div>  
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'WelcomePage',
  data(){
    return{
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
       this.$router.push({name:'Chat', params: { name:this.name}})
      }else{
        this.feedback = "You Must Enter a Name"
      }
    }
  }
}
</script>

<style scoped>
.welcome{
  max-width: 400px;
  padding-top:50px;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;;
}


</style>
