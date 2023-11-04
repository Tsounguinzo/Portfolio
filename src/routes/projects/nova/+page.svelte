<script lang="ts">
    import Roles from "../components/Roles.svelte";
    import {rolesNova} from "../../../data/projects/roles.ts";
    import Vitals from "../components/Vitals.svelte";
    import Addendum from "../components/Addendum.svelte";
    import {nova} from "../../../data/projects/addendum.ts";
    import Header from "../../../components/Header.svelte";
    import Technologies from "../components/Technologies.svelte";
    import {novaTechStack} from "../../../data/projects/technologies";
</script>

<div class="flex flex-col space-y-10">
    <Header heading="Nova" subHeading="New generation prosthetic design software"
            customStyle="space-y-4 text-center pt-14 md:pt-28"/>
    <Technologies techStack={novaTechStack}/>

    <div class="py-20 sm:py-14 md:py-10">
        <section class="max-w-full prose text-gray-300 list-disc prose-gray md:prose-lg">
            <div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                        During this software development internship, I have gaining hands-on experience with Java,
                        contributing to various stages of the application development lifecycle. My role encompasses writing
                        efficient Java code for the company's new software <i>Nova</i>, engaging in design, and executing rigorous testing.
                        Under the guidance of experienced developers, I am sharpening my technical skills and adapting to the fast-paced
                        nature of professional software development.
                    </p>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <h2>What I've learned</h2>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                       Through adopting Agile methodologies, I am becoming adept at teamwork and delivering high-quality,
                        scalable software solutions in a dynamic setting.
                    </p>
                </div>

            </div>
        </section>
    </div>
</div>

<div class="my-20 col-span-full">
    <Roles roles={rolesNova}/>
    <Vitals duration="4 months" customer="External"/>
    <Addendum data={nova}/>
</div>