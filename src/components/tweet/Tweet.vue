<template>
  <div class="tweet">
    <ProfileImage v-if="tweet" :img="tweet.user.profileImg" :user_id="tweet.userId" />
    <div class="body">
      <div class="top">
        <User v-if="tweet" :user="tweet.user" />
        <Timestamp v-if="tweet" :timestamp="tweet.timeStamp" />
      </div>
      <Message v-if="tweet" :message="tweet.message" />
      <Actions v-if="tweet" :retweet="tweet" :parentTweet="parentTweet" />
    </div>

    <div v-if="tweet && users.length > 0 && tweet.userId === users[0].account_id">
      <button v-if="tweet" @click="handleDeleteProject" id="likeBtn"><i class="fa fa-trash"
          style="color:gray"></i></button>
    </div>

  </div>
</template>

<script>
import ProfileImage from './ProfileImage.vue'
import User from './User.vue'
import Timestamp from './Timestamp.vue'
import Message from './Message.vue'
import Actions from './Actions.vue'
import { mapState, mapStores, mapActions } from 'pinia'
import { useUserStore } from './../../stores/userStore'
import { useTweetStore } from './../../stores/tweetStore'

export default {
  props: {
    tweet: {
      type: Object
    },
    parentTweet: {
      type: Object
    }
  },
  components: {
    ProfileImage,
    User,
    Timestamp,
    Message,
    Actions
  },
  computed: {
    ...mapStores(useUserStore),
    ...mapState(useUserStore, ['users', 'user']),
    ...mapStores(useTweetStore),
    ...mapState(useTweetStore, ['tweetComments']),
  },
  methods: {
    ...mapActions(useTweetStore, ['deleteTweet', 'getAllTweets', 'getTweetsByUser', 'getTweetsLikedByUser', 'getTweetComments']),
    async handleDeleteProject() {
      await this.deleteTweet(this.tweet.tweet_id)
      this.getAllTweets()
      this.getTweetsByUser(this.users[0].account_id)
      this.getTweetsLikedByUser(this.users[0].account_id)
    }
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

button {
  margin-top: -4.5rem;
  border: none;
  background: none;
  color: none;
}
</style>
