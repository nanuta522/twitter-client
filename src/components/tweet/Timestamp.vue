<template>
    <span class="timestamp">{{ timestamp }}</span>
</template>

<script>
export default {
    props: {
        timestamp: {
            type: String
        }
    }
}
</script>