<script lang="ts">
    import experienceData from "../../data/experiences.ts";
</script>

<section id="experiences"
         class="grid grid-cols-12 gap-4 px-4 text-center pb-30 lg:pb-56 lg:px-20 xl:px-32 2xl:px-56 col-span-full lg:gap-10">
    <h2 class="self-center py-20 text-3xl font-bold text-center md:text-4xl lg:text-7xl col-span-full lg:pt-56 lg:pb-32 ">
        <span class="text-transparent decoration-clone bg-clip-text bg-gradient-to-b from-gray-50 to-gray-900">Experiences</span>
    </h2>
    <ul class="grid grid-cols-3 gap-10 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-y-20 lg:gap-y-32 col-span-full opacity-80">

        {#each experienceData as experience}
            <li class="font-semibold transition duration-500 ease-out transform select-none text-md sm:text-lg md:text-2xl hover:scale-105 hover:-translate-y-1">
                <span class="text-transparent decoration-clone bg-clip-text bg-gradient-to-br from-gray-200 to-gray-700 ">{experience}</span>
            </li>
        {/each}

    </ul>
</section>