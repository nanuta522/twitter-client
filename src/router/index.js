import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import SavedTweets from '../views/SavedTweets.vue'
import UnderConstruction from '../views/UnderConstruction.vue'
import ComposeView from '../views/ComposeView.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from '../views/RegisterView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import RetweetView from '../views/RetweetView.vue'

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
      path: '/saved',
      name: 'saved',
      component: SavedTweets
    },
    {
      path: '/list',
      name: 'list',
      component: SavedTweets
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
    }
  ]
})

export default router
