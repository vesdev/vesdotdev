<script lang="ts">
    import "../global.css";
    import "../lib/styles/fonts.css";
    import ProjectList from "$lib/components/Projects/ProjectList.svelte";
</script>

<main>
    <div class="banner-area">
        <div class="banner">
            <img src="/Images/vesdev.png" alt="" />
        </div>
    </div>
    <div class="page-background">
        <div class="page">
            <ProjectList />
        </div>
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        background-color: #16161c;
    }

    .banner-area {
        width: 100%;
        height: 33.333%;
        flex-shrink: 0;
        margin-bottom: 10px;
    }

    .page {
        width: 90%;
        max-width: 1000px;
        background-color: #16161c;
    }

    .page-background {
        margin-top: 8px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #16161c;
    }

    .banner {
        display: flex;
        flex-direction: row;

        margin: auto;
        width: 90%;
        max-width: 1000px;
        height: 100%;

        align-items: center;
        justify-content: center;

        background-size: cover;
        background-position: center;
        background-color: #1c1e26;
    }

    .banner img {
        width: 100%;

        max-width: 200px;
        border-radius: 100%;
        object-fit: cover;
    }
</style>
