<script lang="ts">
    import type { Project } from "./Project";
    import Fa from "svelte-fa";
    import { faLink } from "@fortawesome/free-solid-svg-icons";
    export let project: Project;
    export let w: string;
    export let h: string;
</script>

<a href={project.url}>
    <button style="width: {w}; height: {h}">
        project page

        <Fa icon={faLink} />
    </button>
</a>

<style>
    button {
        background-color: #09f7a080;
        border: none;
        border-color: #09f7a080;
        border-radius: 8px;
        color: #bbbbbb;
        padding: 8px;
        transition: 0.1s;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
    }

    button:hover {
        background-color: #27d797b3;
        transition: 0.1s;
    }
</style>
