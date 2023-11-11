<script>
  export let repoLink = '';
  export let repoLabel = '';
  export let repoVersion = '';
  export let license = '';
</script>

<a class="flex-col space-y-1 overflow-hidden col-span-full group"
   href={repoLink} target="_blank" rel="noopener noreferrer"
   aria-label="Open Github repo for {repoLabel}">
    <div class="inline-flex items-end">
        <div class="space-x-2 duration-300 ease-in group-hover:translate-x-6 group-hover:opacity-0"><span
                class="text-2xl">{repoLabel}</span><span class="opacity-50">{repoVersion}</span></div>
        <div class="absolute mb-1 text-blue-600 duration-300 ease-in -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            <svg class="remixicon-icon " width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
            </svg>
        </div>
    </div>
    <div class="text-gray-400">{license}</div>
</a>