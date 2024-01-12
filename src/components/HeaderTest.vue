<template>
    <nav>
        <a class="navbar-brand" href="#">
            <img src="../assets/images/logo.gif" alt="Logo" class="d-inline-block align-text-top">
            clone
        </a>
    </nav>
</template>

<script>

export default {
    name: "HeaderTest"
}
</script>

<style lang="scss" scoped>
nav {
    background-color: #e4bcb9;
    padding: 0.25rem 1rem;

    .navbar-brand {
        display: block;
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: bolder;
        filter: brightness(0) saturate(100%) invert(30%) sepia(53%) saturate(323%) hue-rotate(179deg) brightness(91%) contrast(88%);
        text-transform: uppercase;

        img {
            width: 75px;
            height: 32px;
            object-fit: contain;
        }
    }
}
</style>