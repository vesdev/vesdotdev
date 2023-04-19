<script lang="ts">
    import { projectGithub, type Project } from "./Project";
    import Nav from "../Nav.svelte";
    import ProjectDescription from "./ProjectDescription.svelte";
    import ProjectItem from "./ProjectItem.svelte";
    import ProjectLink from "./ProjectLink.svelte";
    import { onMount } from "svelte";
    import { faMapPin } from "@fortawesome/free-solid-svg-icons";

    export let projects: Array<Project> = [
        projectGithub("ves.dev", "soves/vesdev"),
        projectGithub("rlox", "soves/rlox"),
        projectGithub(
            "musawarah (WideHardo yoinked for testing)",
            "/BKSalman/musawarah"
        ),
        projectGithub("hebi (WideHardo yoinked for testing)", "jprochazk/hebi"),
        projectGithub("affiliated by Rust™", "rust-lang/rust"),
    ];

    let focusedProject: Project | undefined = undefined;
    let list_h: number = -1;
    let setFocus = function (project: Project) {
        focusedProject = focusedProject === project ? undefined : project;
    };
</script>

<div class="project-list" style={list_h === -1 ? "visibility: hidden" : ""}>
    <ul
        bind:clientHeight={list_h}
        style="margin-top: calc(50vh - {list_h / 2}px)"
    >
        {#if focusedProject !== undefined}
            <div class="tray">
                <ProjectLink project={focusedProject} w="130px" h="35px" />
            </div>
        {/if}

        <Nav />

        {#each projects as project, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li
                on:click={() => setFocus(project)}
                class={i === projects.length - 1 ? "item bottom" : "item"}
            >
                <ProjectItem {project} focused={focusedProject === project} />
            </li>
        {/each}
    </ul>
    {#if focusedProject !== undefined}
        <div class="description">
            <ProjectDescription project={focusedProject} />
        </div>
    {/if}
</div>

<style>
    .project-list {
        width: 90%;
        max-width: 900px;
    }
    ul {
        width: 100%;
        text-decoration: none;
        list-style: none;
        padding: 0;
        background-color: #1c1e26;
        border: 1px solid #bbbbbb4d;
        border-radius: 8px;
    }

    .item {
        padding: 8px;
        border-top: 1px solid #bbbbbb4d;
    }

    .bottom {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .item:hover {
        transition: 0.1s;
        background-color: #232530;
    }

    .description {
        border: 1px solid #bbbbbb4d;
        border-radius: 8px;
        background-color: #1c1e26;
        margin-bottom: 20px;
    }

    .tray {
        display: flex;
        width: 100%;
        justify-content: end;
        position: absolute;
        bottom: 100%;
        margin-bottom: 15px;
    }
</style>
