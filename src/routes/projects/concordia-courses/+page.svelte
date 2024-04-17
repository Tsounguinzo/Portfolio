<script lang="ts">
    import Roles from "../components/Roles.svelte";
    import {rolesCourses} from "../../../data/projects/roles.ts";
    import Vitals from "../components/Vitals.svelte";
    import Addendum from "../components/Addendum.svelte";
    import {concordia_courses} from "../../../data/projects/addendum.ts";
    import Header from "../../../components/Header.svelte";
    import Technologies from "../components/Technologies.svelte";
    import {coursesTechStack} from "../../../data/projects/technologies";
    import MarkDown from "../../../components/MarkDown.svelte";
    import source from "./source.md?raw";
</script>

<div class="flex flex-col space-y-10">
    <Header heading="Concordia courses" subHeading="Course review platform for Concordia students"
            customStyle="space-y-4 text-center pt-14 md:pt-28"/>
    <Technologies techStack={coursesTechStack}/>

    <div class="py-20 sm:py-14 md:py-10">
        <MarkDown {source}/>
    </div>
</div>

<div class="my-20 col-span-full">
    <Roles roles={rolesCourses}/>
    <Vitals duration="less than a month" customer="Personal"/>
    <Addendum data={concordia_courses}/>
</div>