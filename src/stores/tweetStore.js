import { defineStore } from "pinia"

const API_URL = "http://localhost:8080/api"

export const useTweetStore = defineStore("tweet", {
    state: () => ({
        tweets: [],
        tweet: {
            userId: 1,
            message: '',
            userLikes: null,
            parentTweet: null,
            timeStamp: null
        },
        userTweets: [],
        likedTweets: [],
        tweetComments: []
    }),
    actions: {
        async getAllTweets() {
            const response = await fetch(`${API_URL}/tweet/all`)
            const data = await response.json()
            this.tweets = data.reverse()
        },
        async getTweetsByUser(user_id) {
            const response = await fetch(`${API_URL}/tweet/user/${user_id}`)
            const data = await response.json()
            this.userTweets = data.reverse()
        },
        async createTweet(message) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        userId: this.tweet.userId,
                        message: message,
                    })
                }
                const response = await fetch(`${API_URL}/tweet`, requestOptions)
                return await response.json()
            } catch (err) {
                console.log(err)
            }
        },
        async getTweetById(tweet_id) {
            const response = await fetch(`${API_URL}/tweet/${tweet_id}`)
            const data = await response.json()
            this.tweet = data
        },
        async likeTweet(user_id, tweet_id) {
            try {
                const requestOptions = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        user_id: user_id,
                        tweet_id: tweet_id,
                    })
                }
                const response = await fetch(`${API_URL}/tweet/add-like/${user_id}/${tweet_id}`, requestOptions)
                return await response.json()
            } catch (err) {
                console.log(err)
            }
        },
        async getTweetsLikedByUser(user_id) {
            const response = await fetch(`${API_URL}/tweet/likes/${user_id}`)
            const data = await response.json()
            this.likedTweets = data
        },
        async getTweetComments(parentTweet_id) {
            const response = await fetch(`${API_URL}/tweet/comments/${parentTweet_id}`)
            const data = await response.json()
            this.tweetComments = data
        },
        async addComment(user_id, message, parentTweet_id) {
            try {
                const requestOptions = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        userId: user_id,
                        message: message,
                    })
                }
                const response = await fetch(`${API_URL}/tweet/add-comment/${parentTweet_id}`, requestOptions)
                return await response.json()
            } catch (err) {
                console.log(err)
            }
        },
        async deleteTweet(tweet_id) {
            try {
                const requestOptions = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
                const response = await fetch(`${API_URL}/tweet/${tweet_id}`, requestOptions)
                this.getAllTweets()
                return await response.json()
            } catch (err) {
                console.log(err)
            }
        }
    }
})