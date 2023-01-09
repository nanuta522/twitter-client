<template>
    <div class="span3 well tweet justify-content-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="row">
                        <div class="d-flex h-100">
                            <div class="image_outer_container">
                                <div class="green_icon"></div>
                                <div class="image_inner_container">
                                    <img :src="user.profileImg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h3>{{ user.name }}</h3><br>
                    <p><em>@{{ user.username }}</em></p><br>
                    <p>{{ user.bio }}</p>
                </div>
                <div class="col">
                    <router-link :to="`/profile/${user.account_id}/edit`"><button type="button" class="btn btn-primary"
                            data-bs-toggle="button">Edit</button></router-link>
                </div>
            </div>
        </div>
    </div>

    <Tweet v-for="(tweet, idx) in userTweets" :tweet="tweet" :key="tweet.tweet_id" />

    <div class="tweet arrowDown justify-content-center mt-4">
        <i class="fas fa-angle-double-down" style="color:rgba(188, 186, 186, 0.897)"></i>
    </div>

</template>

<script>
import { mapState, mapStores, mapActions } from 'pinia'
import Tweet from './../components/tweet/Tweet.vue'
import { useTweetStore } from '../stores/tweetStore'
import { useUserStore } from './../stores/userStore'

export default {
    data() {
        return {
        }
    },
    components: {
        Tweet
    },
    computed: {
        ...mapStores(useUserStore),
        ...mapState(useUserStore, ['user']),
        ...mapStores(useTweetStore),
        ...mapState(useTweetStore, ['userTweets'])
    },
    methods: {
        ...mapActions(useUserStore, ['getUserById', 'modifyStatus']),
        ...mapActions(useTweetStore, ['getTweetsByUser'])
    },
    watch: {
        '$route.params.user_id': {
            async handler() {
                if (this.$route.params.user_id) {
                    this.getUserById(this.$route.params.user_id)
                    this.getTweetsByUser(this.$route.params.user_id)
                }
            },
            immediate: true,
        },
    }
}
</script>

<style scoped>
.tweet.arrowDown {
border: none;
}

img {
    width: 100%;
}

hr {
    border-top: 2px solid rgba(188, 186, 186, 0.897);
    border-radius: 5px;
}

.container {
    height: 100%;
    align-content: center;
}

.image_outer_container {
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 50%;
    position: relative;
}

.image_inner_container {
    border-radius: 50%;
    padding: 5px;
    background: #833ab4;
    background: -webkit-linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
    background: linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
}

.image_inner_container img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 5px solid white;
}

.image_outer_container .green_icon {
    background-color: #4cd137;
    position: absolute;
    right: 30px;
    bottom: 10px;
    height: 30px;
    width: 30px;
    border: 5px solid white;
    border-radius: 50%;
}

button {
    width: 15rem;
    background-color: rgb(29, 155, 240);
    border-radius: 10rem;
    border: none;
    margin: 1rem 0 1rem 21rem;
    padding: .5rem 1rem;
    font-size: 1.5rem;
}
</style>