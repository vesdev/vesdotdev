<script lang="ts">
    import type { Project } from "./Project";
    export let project: Project;
    import "../../styles/description.css";
</script>

<div class="description-content">
    {@html project.description}
</div>

<style>
    .description-content {
        padding: 10px;
        color: #bbbbbb;
        font-family: "Barlow-Light";
        font-size: 1rem;
        overflow: hidden;
    }
</style>
