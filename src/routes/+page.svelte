<script lang="ts">
    import "../global.css";
    import "../lib/styles/fonts.css";
    import ProjectList from "../lib/components/Projects/ProjectList.svelte";
</script>

<main>
    <ProjectList />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;

        width: 100%;
        min-height: 100%;

        background-color: #1c1e26;

        align-items: center;
    }
</style>
