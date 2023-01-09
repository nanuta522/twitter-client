<template>
    <div class="float-menu fixed-bottom">
        <div>
            <ul class="dropdown-menu" id="myMenu">
                <li><router-link to="/"><a class="dropdown-item">Go to Home</a></router-link></li>
                <li><router-link v-if="users.length > 0" :to="`/profile/${users[0].account_id}`"><a class="dropdown-item">Go to my Profile</a></router-link></li>
                <li><router-link to="/compose/tweet"><a class="dropdown-item">Compose Tweet</a></router-link></li>
            </ul>
        </div>
        <div class="menu-button">
            <button type="button-menu" class="btn btn-primary btn-circle btn-xl" @click="stylishMenu()"><i
                    class="fa fa-bars"></i></button>
        </div>
    </div>
</template>

<script>
import IconBell from './icons/IconBell.vue'
import IconHome from './icons/IconHome.vue'
import TweetButton from './TweetButton.vue'
import { mapState, mapStores, mapActions } from 'pinia'
import { useUserStore } from './../stores/userStore'

export default {
    methods: {
        stylishMenu() {
            const x = document.getElementById("myMenu")
            if (x.style.display === "none") {
                x.style.display = "block"
            }
            else {
                x.style.display = "none"
            }
        }
    },
    components: { IconHome, IconBell, TweetButton },
    computed: {
        ...mapStores(useUserStore),
        ...mapState(useUserStore, ['users'])
    }
}
</script>

<style scoped>
.button-menu {
    background-color: rgb(29, 155, 240);
}

.float-menu {
    bottom: 2rem;
    margin-left: 59rem;
}

#myMenu {
    width: 5rem;
    bottom: 4rem;
    margin-left: 9.5rem;
}

.menu-button {
    width: 5rem;
}

li a {
    text-decoration: none;
    font-weight: bold;
}

button {
    background-color: rgb(29, 155, 240);
    border-radius: 10rem;
    border: none;
    margin-top: 3rem;
    margin-left: 15rem;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    bottom: 2rem;
    left: auto;
}
</style>