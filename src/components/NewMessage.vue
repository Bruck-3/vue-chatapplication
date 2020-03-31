<template>
  <div class="new-messages">
      <form @submit.prevent = "AddMessage">
          <label for="new message">Add A Message(press Enter to send):</label>
          <input type="text" name="new-message" v-model="newMessage">
          <P class="red-text" v-if="this.feedback">You have to enter a message</P>
      </form>
  </div>
</template>

<script>
import db from '../firebase/initialization.js'
export default {
name: 'NewMessage',
props: ['name'],
data(){
    return{
      newMessage: null,
      feedback: null
    }
  },
methods: {
    AddMessage(){
    if(this.newMessage){
       db.collection('messages').add({
           name: this.name,
           message: this.newMessage,
           date: Date.now()
       })
       this.feedback = null
       this.newMessage = null
    }else{
        this.feedback = "Please Enter some Message"
    }
    }
  }
}
</script>

<style>

</style>