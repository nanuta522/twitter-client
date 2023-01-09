<template>
    <span class="user">
        <span class="name">{{ user.name }}</span>
        <span class="handle">@{{ user.username }}</span>
    </span>
</template>

<script>
export default {
    props: {
        user: {
            type: Object
        }
    }
}
</script>