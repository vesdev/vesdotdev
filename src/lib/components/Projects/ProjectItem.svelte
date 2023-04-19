<script lang="ts">
    import type { Project } from "./Project";
    import Fa from "svelte-fa";
    import { faFileCode } from "@fortawesome/free-regular-svg-icons";

    export let project: Project;
    export let focused: boolean;
</script>

<div class={focused ? "focused" : ""}>
    <Fa icon={faFileCode} />
    <h5>{project.title}</h5>
</div>

<style>
    div {
        color: #f09483e6;
        text-align: left;
        font-family: "Barlow";
        font-size: 1.25rem;
        display: inline;
        user-select: none;
    }

    h5 {
        display: inline;
        margin-left: 5px;
    }

    .focused {
        color: #e95678;
        transition: 0.1s;
    }
</style>
