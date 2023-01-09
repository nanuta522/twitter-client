import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import LikedTweets from '../views/LikedTweets.vue'
import MyTweets from '../views/MyTweets.vue'
import UnderConstruction from '../views/UnderConstruction.vue'
import ComposeView from '../views/ComposeView.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from '../views/RegisterView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import RetweetView from '../views/RetweetView.vue'
import CommentView from '../views/CommentView.vue'
import TweetDetails from '../views/TweetDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile/:user_id',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/profile/:user_id/edit',
      name: 'edit',
      component: EditProfileView
    },
    {
      path: '/explore',
      name: 'explore',
      component: UnderConstruction
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView
    },
    {
      path: '/messages',
      name: 'messages',
      component: NotificationsView
    },
    {
      path: '/saved/:user_id',
      name: 'saved',
      component: LikedTweets
    },
    {
      path: '/list/:user_id',
      name: 'list',
      component: MyTweets
    },
    {
      path: '/more',
      name: 'more',
      component: RegisterView
    },
    {
      path: '/compose/tweet',
      name: 'compose',
      component: ComposeView
    },
    {
      path: '/retweet/:tweet_id',
      name: 'retweet',
      component: RetweetView
    },
    {
      path: '/comment/:tweet_id',
      name: 'comment',
      component: CommentView
    },
    {
      path: '/tweet/:tweet_id',
      name: 'tweetDetails',
      component: TweetDetails
    }
  ]
})

export default router
