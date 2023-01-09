<template>
    <aside>
        <nav>
            <router-link to="/">
                <div class="row justify-content-start">
                    <IconLogo />
                </div>
            </router-link>

            <router-link v-if="users.length > 0" :to="`/profile/${users[0].account_id}`">
                <div class="row button-icon">
                    <IconHome />
                </div>
            </router-link>

            <router-link to="/explore">
                <div class="row button-icon">
                    <IconHashTag />
                </div>
            </router-link>

            <router-link to="/notifications">
                <div class="row button-icon">
                    <IconBell />
                </div>
            </router-link>

            <router-link to="/messages">
                <div class="row button-icon">
                    <IconEnvelope />
                </div>
            </router-link>

            <router-link v-if="users.length > 0" :to="`/saved/${users[0].account_id}`">
                <div class="row button-icon">
                    <IconBookMark />
                </div>
            </router-link>

            <router-link v-if="users.length > 0" :to="`/list/${users[0].account_id}`">
                <div class="row button-icon">
                    <IconList />
                </div>
            </router-link>

            <router-link to="/more">
                <div class="row button-icon">
                    <IconMore />
                </div>
            </router-link>
        </nav>
    </aside>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import IconHome from '../components/icons/IconHome.vue'
import IconHashTag from '../components/icons/IconHashTag.vue'
import IconBell from '../components/icons/IconBell.vue'
import IconEnvelope from '../components/icons/IconEnvelope.vue'
import IconBookMark from '../components/icons/IconBookMark.vue'
import IconList from '../components/icons/IconList.vue'
import IconMore from '../components/icons/IconMore.vue'
import IconLogo from './icons/IconLogo.vue'
import { mapState, mapActions } from 'pinia'
import { useUserStore } from './../stores/userStore'

export default {
    data() {
        return {
            user_id: null
        }
    },
    components: {
        IconHome,
        IconHashTag,
        IconBell,
        IconEnvelope,
        IconBookMark,
        IconList,
        IconMore,
        IconLogo
    },
    computed: {
        ...mapState(useUserStore, ['users'])
    },
    methods: {
        ...mapActions(useUserStore, ['getAllUsers'])
    },
    async mounted() {
        this.getAllUsers()
    }
}
</script>

<style scoped>
.row {
    width: 15rem;
}

button {
    background-color: white;
    border: none;
    border-radius: 10rem;
}

.button-icon {
    margin-bottom: 1rem;
}
</style>