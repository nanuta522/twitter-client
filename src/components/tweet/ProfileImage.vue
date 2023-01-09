<template>
    <router-link :to="`/profile/${user_id}`"><img :src="img" class="profile" alt="profile" /></router-link>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    props: {
        img: {
            type: String
        },
        user_id: {
            type: Number
        }
    }
}
</script>