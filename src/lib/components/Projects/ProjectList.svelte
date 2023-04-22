<script lang="ts">
    import { slide } from "svelte/transition";

    import Fa from "svelte-fa";
    import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

    import { projectGithub, type Project } from "./Project";
    import Nav from "../Nav.svelte";
    import ProjectDescription from "./ProjectDescription.svelte";
    import ProjectItem from "./ProjectItem.svelte";
    import ProjectLink from "./ProjectLink.svelte";

    export let projects: Array<Project> = [
        projectGithub("ves.dev", "soves/vesdev/master"),
        projectGithub("rlox", "soves/rlox/master"),
        projectGithub(
            "musawarah (WideHardo yoinked for testing)",
            "/BKSalman/musawarah/master"
        ),
        projectGithub(
            "hebi (WideHardo yoinked for testing)",
            "jprochazk/hebi/master"
        ),
        projectGithub("shuttle (yoink)", "shuttle-hq/shuttle/master"),
    ];

    let focusedProject: Project | undefined = undefined;
    let setFocus = function (project: Project) {
        focusedProject = focusedProject === project ? undefined : project;

        //scrollTo(focusedProject !== undefined ? "description" : "project-list");
    };

    function scrollTo(id: string) {
        if (focusedProject === undefined) {
            return;
        }

        let desc = document.getElementById(id);
        console.log(desc);
        window.scrollTo({ top: desc?.offsetTop, behavior: "smooth" });
    }
</script>

<div class="project-list" id="project-list">
    <ul>
        <Nav />

        {#each projects as project, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => setFocus(project)} class="item">
                <ProjectItem {project} focused={focusedProject === project} />
            </li>
        {/each}
    </ul>
    {#if focusedProject !== undefined}
        <div class="tray" id="description" transition:slide>
            <ProjectLink project={focusedProject} w="140px" h="35px" />
        </div>
    {/if}
    {#if focusedProject !== undefined}
        <div class="description" transition:slide>
            <ProjectDescription project={focusedProject} />
        </div>
    {/if}
</div>

<style>
    ul {
        width: 100%;
        text-decoration: none;
        list-style: none;
        padding: 0;
        margin: 0;

        background-color: #161920;
        margin-bottom: 10px;
    }
    .item {
        background-color: #1c1e26;
        padding: 8px;
        margin-top: 10px;
    }

    .item:hover {
        transition: 0.1s;
        background-color: #232530;
    }

    .description {
        background-color: #1c1e26;
        margin-bottom: 20px;
    }

    .tray {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        top: 8px;
        padding-top: 8px;
        padding-bottom: 8px;
        margin-bottom: 10px;
        background-color: #1c1e26;
    }
</style>
