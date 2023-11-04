<script>
    export let data = []

</script>

<div class="mt-4 mb-20">
    <p class="text-xs text-gray-400 uppercase pb-6">Addendum</p>
    <div class="grid grid-cols-12 gap-4">
        {#each data as addendum}
        <div class="col-span-6 sm:col-span-4 md:col-span-3">
            <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                <span itemscope="true">
                    <a
                        itemprop="source"
                        href="{addendum.href}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-100 flex flex-col items-stretch h-24 sm:h-28 justify-between p-3 border border-gray-800 border-2 rounded-md hover:text-white hover:border-gray-500 transition-colors duration-300 ease-in-out group overflow-hidden"
                        aria-label="Link to external site lysis.cc"
                    >
                        <div class="inline-flex">
                            <div class="duration-300 ease-in group-hover:translate-x-6 group-hover:opacity-0">
                                <svg class="remixicon-icon" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="{addendum.iconPath}"></path>
                                </svg>
                            </div>
                            <div class="duration-300 ease-in -translate-x-12 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100">
                                <svg class="remixicon-icon" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                                </svg>
                            </div>
                        </div>
                        <p>{addendum.linkText}</p>
                    </a>
                </span>
            </div>
        </div>
        {/each}

        <div class="col-span-6 sm:col-span-4 md:col-span-3">
            <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                <span itemscope="true">
                    <a
                        itemprop="source"
                        href="/#projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-100 flex flex-col items-stretch h-24 sm:h-28 justify-between p-3 border border-gray-800 border-2 rounded-md hover:text-white hover:border-gray-500 transition-colors duration-300 ease-in-out group overflow-hidden"
                        aria-label="Link to external site All projects"
                    >
                        <div class="inline-flex">
                            <div class="duration-300 ease-in group-hover:translate-x-6 group-hover:opacity-0">
                                <svg class="remixicon-icon" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"></path>
                                </svg>
                            </div>
                            <div class="duration-300 ease-in -translate-x-12 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100">
                                <svg class="remixicon-icon" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                                </svg>
                            </div>
                        </div>
                        <p>All projects</p>
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>
