<script lang="ts">
    import Roles from "../components/Roles.svelte";
    import {rolesBeaudelaire} from "../../../data/projects/roles.ts";
    import Vitals from "../components/Vitals.svelte";
    import Addendum from "../components/Addendum.svelte";
    import {beaudelaire} from "../../../data/projects/addendum.ts";
    import Header from "../../../components/Header.svelte";
    import Technologies from "../components/Technologies.svelte";
    import {beaudelaireTechStack} from "../../../data/projects/technologies";
</script>

<div class="flex flex-col space-y-10">
    <Header heading="Beaudelaire's Portfolio" subHeading="My personal portfolio"
            customStyle="space-y-4 text-center pt-14 md:pt-28"/>
    <Technologies techStack={beaudelaireTechStack}/>

    <div class="py-20 sm:py-14 md:py-10">
        <section class="max-w-full prose text-gray-300 list-disc prose-gray md:prose-lg">
            <div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                        My personal progressive web app ("PWA") to experiment with the latest technologies. This site
                        uses SvelteKit and github pages to deliver the pages as well as the content. It's ever evolving and a
                        playground for me.
                    </p>
                </div>

            </div>

        </section>
    </div>
</div>

<div class="my-20 col-span-full">
    <Roles roles={rolesBeaudelaire}/>
    <Vitals duration="Ongoing" customer="Personal"/>
    <Addendum data={beaudelaire}/>
</div>