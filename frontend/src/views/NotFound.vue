<template>
    <div className="m-3">
        <h3>ERROR NOT FOUND</h3>
        <p> {{fullPath}}
        </p>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const fullPath  = route.fullPath
        return { fullPath };
    }
}
</script>

<style>

</style>