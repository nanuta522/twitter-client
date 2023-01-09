<template>
  <div class="tweet">
    <ProfileImage v-if="tweet" :img="tweet.user.profileImg" :user_id="tweet.userId" />
    <div class="body">
      <div class="top">
        <User v-if="tweet" :user="tweet.user" />
        <Timestamp v-if="tweet" :timestamp="tweet.timeStamp"/>
      </div>

      <Message v-if="tweet" :message="tweet.message"/>

      <Actions v-if="tweet" :retweet="tweet"/>
    </div>

    <router-link to="/tweet/{id}"><i class="fa fa-trash" style="color:gray"></i></router-link>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import ProfileImage from './ProfileImage.vue'
import User from './User.vue'
import Timestamp from './Timestamp.vue'
import Message from './Message.vue'
import Actions from './Actions.vue'

export default {
  created() {
    this.user = this.tweet.user
    this.timestamp = this.tweet.timestamp
    this.message = this.tweet.message
  },
  data() {
    return {
      user: {},
      timestamp: '',
      message: ''
    }
  },
  props: {
    tweet: {
      type: Object
    }
  },
  components: {
    ProfileImage,
    User,
    Timestamp,
    Message,
    Actions
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}

.tweet {
  padding: 2rem;
}
</style>
