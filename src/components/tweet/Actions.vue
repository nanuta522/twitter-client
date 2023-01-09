<template>
    <div class="actions">
        <router-link :to="`/tweet/${retweet.tweet_id}`"><i class="far fa-comment" style="color:rgb(29, 155, 240)"></i>
            {{ retweet.user.length }}</router-link>

        <router-link v-if="retweet" :to="`/retweet/${retweet.tweet_id}`"><i class="fas fa-retweet"
                style="color:rgb(29, 155, 240)"></i>{{ retweet.parent_tweet_id }}</router-link>

        <button v-if="likeSelected(retweet)" id="likeBtn"><i @click="handleClick()" class="far fa-heart"
                style="color:rgb(236, 26, 89)"></i> {{ retweet.userLikes.length }}</button>

        <button v-else-if="!likeSelected(retweet)" id="likeBtn"><i @click="handleClick()" class="far fa-heart"
                style="color:rgb(29, 155, 240)"></i> {{ retweet.userLikes.length }}</button>

        <router-link v-if="retweet" :to="`/comment/${retweet.tweet_id}`"><i class="fas fa-share"
                style="color:rgb(29, 155, 240)"></i></router-link>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { mapState, mapStores, mapActions } from 'pinia'
import { useUserStore } from './../../stores/userStore'
import { useTweetStore } from './../../stores/tweetStore'

export default {
    data() {
        return {
            tweetLiked: {}
        }
    },
    props: {
        retweet: {
            type: Object
        }
    },
    computed: {
        ...mapStores(useUserStore),
        ...mapState(useUserStore, ['users']),
        ...mapStores(useTweetStore),
        ...mapState(useUserStore, ['tweet', 'tweetComments'])
    },
    async mounted() {
        this.getAllUsers()
    },
    methods: {
        ...mapActions(useUserStore, ['getAllUsers']),
        ...mapActions(useTweetStore, ['likeTweet', 'getAllTweets', 'getTweetsByUser', 'getTweetsLikedByUser', 'getTweetComments']),
        async handleClick() {
            if (this.users && this.retweet) {
                this.tweetLiked = await this.likeTweet(this.users[0].account_id, this.retweet.tweet_id)
                this.likeSelected(this.tweetLiked)
                this.getAllTweets()
                this.getTweetsByUser(this.users[0].account_id)
                this.getTweetsLikedByUser(this.users[0].account_id)
            }
        },
        likeSelected(tweet) {
            if (tweet && tweet.userLikes.includes(this.users[0].account_id)) {
                return true
            } else {
                return false
            }
        }
    }
}

</script>

<style scoped>
button {
    border: none;
    background: none;
    color: none;
}
</style>