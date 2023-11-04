<script lang="ts">
    import {qAndA} from "../../data/faq.ts";
</script>

<ul class="grid grid-cols-1 gap-4 md:grid-cols-2">

    {#each qAndA as QA}
        <li class="p-6 space-y-2 text-left text-gray-100 border-2 border-gray-800 rounded-md cursor-default group">
            <h5 class="text-xl font-medium duration-300 ease-in-out origin-top-left group-hover:opacity-20 group-hover:scale-75">
                {QA.Question}
            </h5>
            <p class="text-gray-600 duration-300 ease-in-out origin-bottom-left group-hover:text-md group-hover:text-gray-100 group-hover:scale-105">
                {QA.Answer}
            </p>
        </li>
    {/each}
</ul>