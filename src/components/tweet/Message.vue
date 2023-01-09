<template>
    <p class="message">
        {{ message }}
    </p>
</template>

<script>
export default {
    props: {
        message: {
            type: String
        }
    }
}
</script>