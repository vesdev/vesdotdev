<script lang="ts">
    import "../global.css";
    import "../lib/styles/fonts.css";
    import ProjectList from "$lib/components/Projects/ProjectList.svelte";
</script>

<main>
    <div class="banner-area">
        <div class="banner">
            <img src="/Images/pfp.jpg" alt="" />
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
        background-color: #161920;
    }

    .banner-area {
        width: 100%;
        height: 33.333%;
        flex-shrink: 0;
    }

    .page {
        width: 90%;
        max-width: 1000px;
        background-color: #161920;
    }

    .page-background {
        margin-top: 8px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #161920;
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
        background-image: url("/Images/banner.jpg");
    }

    .banner img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        object-fit: cover;
    }
</style>
