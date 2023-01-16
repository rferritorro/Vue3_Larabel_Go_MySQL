<template>
    <div class="card card-body profile_div">
        <Profile :usuario="usuario"></Profile>
    </div>
</template>

<script>
import Profile from '../components/Profile'

export default {
    components: {
        Profile
    },
    setup() {
        const usuario = {
            Id:1,
            username:"reif400",
            password: "$2a$10$3URNG4pSHX9rFAXdljn8I.xkzVm187I/8vLx07OjQ32AcuBqMqpMa",
            email: "reif400@gmail.com",
            avatar: "https://avatars.dicebear.com/api/adventurer-neutral/rft400.svg"
        }

        return {usuario}
    }
}
</script>

<style>

.profile_div {
    background-color: transparent;
    position: relative;
    top: 15%;
    width: 50%;
    background-image: url("../assets/img/home_minimal.jpg");
}
</style>