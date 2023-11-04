<script lang="ts">
    import Grid from "../components/Grid.svelte";
    import Writer from "../components/Writer.svelte";
    import Intro from "../components/Intro.svelte";
    import Video from "./licenses/components/Video.svelte";
    import TechStack from "./licenses/components/TechStack.svelte";
    import Competencies from "./licenses/components/Competencies.svelte";
    import Technologies from "./licenses/components/Technologies.svelte";
    import Experiences from "./licenses/components/Experiences.svelte";
    import Projects from "./licenses/components/Projects.svelte";
    import Ideas from "./licenses/components/Ideas.svelte";
    import {nonOpenSourceProjects, openSourceProjects} from "../data/projects.ts";
</script>

<Grid>
    <Writer/>
    <Intro/>
    <Video/>
    <TechStack/>
    <Competencies/>
    <Technologies/>
    <Experiences/>
    <Projects title="Projects" subtitle="What I have been working on" projects={nonOpenSourceProjects}/>
    <Projects title="Open Source Projects" subtitle="Open source projects that I created" projects={openSourceProjects}/>
    <Ideas/>
</Grid>