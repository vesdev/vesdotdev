<script lang="ts">
    import type { Project } from "./Project";
    import Fa from "svelte-fa";
    import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    export let project: Project;
    export let w: string;
    export let h: string;
</script>

<a href={project.url}>
    <div class="link" style="width: {w}; height: {h};">
        <p>open in github</p>

        <div class="icon"><Fa icon={faGithub} /></div>
    </div>
</a>

<style>
    .link {
        border: none;
        border-radius: 8px;
        color: #bbbbbb;
        padding: 8px;
        transition: 0.1s;

        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Barlow";

        display: flex;
        align-content: center;
    }
    .icon {
        font-size: 2.5em;
    }
    p {
        font-size: 1.5rem;
    }
    a {
        text-decoration: none;
    }

    div:hover {
        color: #1ea976;
        transition: 0.1s;
    }
</style>
