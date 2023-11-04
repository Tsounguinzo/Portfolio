<script>
    export let techStack = ''
</script>
<div class="space-x-1 space-y-1 text-center">
    {#each techStack as tech}
        <span class="inline-block p-1 px-4 text-xs bg-gray-600 rounded-full md:text-sm">{tech}</span>
    {/each}
</div>