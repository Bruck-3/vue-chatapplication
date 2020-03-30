<template>
  <div class="chat container">
      <h2 class="center teal-text">Chat Application</h2>
      <div class="card">
          <div class="card-content">
              <ul class="messages">
                  <li>
                      <span class="teal-text">Name </span>
                      <span class="grey-text text-darken-3">message</span>
                      <span class="grey-text time">time</span>
                  </li>
              </ul>
          </div>
          <div class="card-action">
              <input type="text">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Chat',
    props: ['name'],
    data(){
        return{

        }
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
}
</style>