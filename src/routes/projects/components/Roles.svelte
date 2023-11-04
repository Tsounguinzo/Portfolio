<script lang="ts">
    export let roles = []
    const colors = ["hover:text-red-200 hover:border-red-200", "hover:text-indigo-300 hover:border-indigo-300", "hover:text-blue-400 hover:border-blue-400"]
</script>

<div class="mt-4 mb-20">
    <p class="text-xs text-gray-400 uppercase pb-6">Roles</p>
    <ul class="grid grid-cols-12 gap-4">

        {#each roles as role, index}
            <li class="col-span-6 sm:col-span-4 md:col-span-3">
                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                <span class="group overflow-hidden duration-300 ease-in-out text-gray-100 flex flex-col items-stretch h-24 sm:h-28 justify-between p-3 border border-gray-800 border-2 rounded-md hover:text-white {colors[index]}">
                    <div class="inline-flex">
                        <svg class="remixicon-icon " width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                    d={role.iconPath}>
                            </path>
                        </svg>
                    </div>
                    <span>{role.label}</span>
                </span>
                </div>
            </li>
        {/each}

    </ul>
</div>