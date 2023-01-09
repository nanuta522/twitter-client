<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items">
      <div class="col-md-3 menu fixed-top">
        <NavBar />
        <router-link to="/compose/tweet">
          <TweetButton />
        </router-link>
      </div>

      <div class="col-md-6 offset-md-3">
        <main>
          <router-view />
          <Tweet v-if="tweets.length > 0" v-for="(tweet, idx) in tweets" :tweet="tweet" :key="tweet.tweet_id" />
          <FloatMenu />
        </main>
      </div>

      <div class="col-md-3 collage">
        <ProfileCollection />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Tweet from './components/tweet/Tweet.vue'
import NavBar from './components/Navbar.vue'
import ProfileCollection from './components/ProfileCollection.vue'
import TweetButton from './components/TweetButton.vue'
import FloatMenu from './components/FloatMenu.vue'
import { mapState, mapActions } from "pinia"
import { useTweetStore } from "./stores/tweetStore"

export default {
  data() {
    return {
    }
  },
  components: {
    NavBar,
    Tweet,
    ProfileCollection,
    TweetButton,
    FloatMenu
  },
  computed: {
    ...mapState(useTweetStore, ['tweets']),
  },
  methods: {
    ...mapActions(useTweetStore, ['getAllTweets']),
  },
  async mounted() {
    this.getAllTweets()
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}

.wassap {
  margin: 0 auto;
  min-width: 480px;
  max-width: 640px;
  min-height: 80px;
  padding: 2rem;
  border: .01px solid rgb(241, 241, 241);
  font-size: 1.1rem;
  line-height: 18px;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.app-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.app {
  padding: 20px;
}

.tweet {
  margin: 0 auto;
  min-width: 480px;
  max-width: 640px;
  min-height: 80px;
  padding: 10px;
  border: .01px solid rgb(241, 241, 241);
  display: flex;
  font-size: 1.1rem;
  line-height: 18px;
}

.body {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.top {
  display: flex;
  line-height: 1.4rem;
}

.more {
  margin-left: 20px;
}

.profile {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
}

.name {
  font-weight: bold;
  margin-bottom: 0.5em;
  margin-right: 0.3em;
}

.handle {
  color: #536471;
  margin-left: 3px;
  margin-right: 3px;
}

.timestamp {
  color: #536471;
  font-size: 1.1rem;
}

.timestamp::before {
  content: "·";
  padding-right: 0.3em;
  font-size: 1.1rem;
  font-weight: 600;
}

.message {
  text-align: left;
  font-stretch: 100%;
  font-weight: 400;
  line-height: 1.6rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

.actions {
  padding: 5px 5px;
  width: 360px;
  display: flex;
  justify-content: space-between;
  color: #536471;
}

.menu {
  margin-left: 18rem;
}

.profile-collection {
  margin-left: 80rem;
}

@media (max-width: 1800px) {
  .menu {
    margin: 12rem;
  }

  .top-menu {
    display: none;
  }
}

@media (max-width: 1650px) {
  .menu {
    margin: 10rem;
  }
}

@media (max-width: 1470px) {
  .menu {
    margin: 4rem;
  }
}

@media (max-width: 1250px) {
  .menu {
    margin: 2rem;
  }
}

@media (max-width: 1200px) {
  .menu {
    display: none;
  }
}

@media (max-width: 1200px) {
  .top-menu {
    display: block;
    display: none;
  }
}

@media (max-width: 1750px) {
  .collage {
    display: none;
  }
}
</style>
