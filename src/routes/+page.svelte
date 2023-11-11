<script lang="ts">
    import Grid from "../components/Grid.svelte";
    import Writer from "../components/Writer.svelte";
    import Intro from "../components/Intro.svelte";
    import Video from "./components/Video.svelte";
    import TechStack from "./components/TechStack.svelte";
    import Competencies from "./components/Competencies.svelte";
    import Technologies from "./components/Technologies.svelte";
    import Experiences from "./components/Experiences.svelte";
    import Projects from "./components/Projects.svelte";
    import Ideas from "./components/Ideas.svelte";
    import {nonOpenSourceProjects, openSourceProjects} from "../data/projects.ts";
    import Articles from "./components/Articles.svelte";

    const posts = [
        {
            postUrl: "/articles/windows-95-and-its-relevance-in-computer-history",
            imageUrl: "https://cdn.sanity.io/images/udzdriea/production/c748d9c03def2c7c677f8403f9d7dd856076aa53-960x600.jpg?w=300",
            postTitle: "Windows 95 and its relevance in computer history",
            postDescription: "" // Empty as there's no content in the <p> tag
        },
        {
            postUrl: "/articles/using-rewind-ai-for-work-to-document-everything",
            imageUrl: "https://cdn.sanity.io/images/udzdriea/production/7a0d8ee75abaa4a498884f76af1cb35d49060324-960x600.jpg?w=300",
            postTitle: "Remember everything with Rewind.ai: using it for work",
            postDescription: "" // Empty as there's no content in the <p> tag
        }

    ];
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
    <Projects title="Open Source Projects" subtitle="Open source projects that I created"
              projects={openSourceProjects}/>
    <Ideas/>
    <Articles posts={posts}/>
</Grid>