<template>
  <div class="chat container">
      <h2 class="center teal-text">Chat Application</h2>
      <div class="card">
          <div class="card-content">
              <ul class="messages" v-chat-scroll >
                  <li v-for="message in messages" :key="message.id">
                      <span class="teal-text">{{message.name}} </span>
                      <span class="grey-text text-darken-3 contents">{{message.content}}</span>
                      <span class="grey-text time">{{message.timestamp}}</span>
                  </li>
              </ul>
          </div>
          <div class="card-action">
             <NewMessage :name="name" />
          </div>
      </div>
  </div>
</template>

<script>
import db from '../firebase/initialization'
import NewMessage from '@/components/NewMessage'
import moment from 'moment'
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
        },
    data(){
        return{
            messages: []
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('date')
        ref.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type == 'added'|| 'modified' || 'removed'){
                    let doc = change.doc
                    this.messages.push({
                        id : doc.id,
                        name: doc.data().name,
                        content: doc.data().message,
                        timestamp: moment(doc.data().date).format('lll'),
                    })
                }
            })
        })
    }


}
</script>

<style scoped>
.chat h2{
    margin-bottom: 40px;
    font-size:2.6em;
}
.chat span{
    font-size: 1.6em;
}
.chat .time{
    display: block;
    font-size: 0.8em;
}
.chat .contents{
    font-size: 1.4em;
}
.messages{
    max-height: 400px;
    overflow: auto;
}
</style>