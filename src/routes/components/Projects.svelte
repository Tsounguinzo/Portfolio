<script lang="ts">
    export let title: string = ''
    export let subtitle: string = ''
    export let projects: { title: string, duration: string, description: string, role: [], href: string }[] = [{
        title: '',
        duration: '',
        description: '',
        role: [],
        href: ''
    }]

    const roleColorVariation = ["text-blue-600 ring-blue-600", "text-red-200 ring-red-200", "text-indigo-500 ring-indigo-500"]
</script>
<section id="projects"
         class="px-10 pt-20 pb-20 lg:pt-32 md:pb-40 lg:pb-52 sm:px-20 col-span-full bg-gradient-to-tr"><h2
        class="self-center pb-4 text-3xl font-bold text-center md:text-4xl lg:text-7xl col-span-full ">{title}</h2>
    <h3 class="self-center pb-32 text-2xl text-center opacity-75">{subtitle}</h3>
    <div class="grid grid-cols-12 mx-auto md:gap-10 gap-y-10 max-w-7xl">

        {#each projects as project}
            <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                <a aria-label="Link to homodea"
                   class="flex flex-col items-center p-2 space-y-2 text-center break-normal transition ease-in-out transform rounded-md cursor-pointer md:text-left md:items-start group"
                   href={project.href}>
                    <h4 class="text-2xl font-bold leading-6 duration-500 group-hover:-translate-y-3">{project.title}</h4>
                    <span class="pb-1 text-xs text-gray-400 duration-500 ease-in-out delay-75 rounded-full group-hover:-translate-y-2">{project.duration}</span>
                    <div class="max-w-sm mx-auto text-gray-500 duration-700 delay-75 group-hover:-translate-y-2">
                        <h5>{project.description}</h5>
                    </div>
                    <div class="flex flex-col items-start pt-1 space-x-1">
                        <ul class="flex flex-wrap justify-center flex-1 min-h-0 gap-2 break-normal duration-500 ease-in-out group-hover:delay-150 group-hover:-translate-y-1 md:justify-start">
                            {#each project.role as role, index}
                                <li class="uppercase rounded ring-1 text-[0.60rem] leading-none {roleColorVariation[index]}"
                                    style="padding:3px">
                                    {role}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </a>
            </div>
        {/each}

        <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <a aria-label="Link to send inquiry email"
               class="flex flex-col items-center p-2 space-y-2 text-center break-normal transition ease-in-out transform rounded-md cursor-pointer md:text-left md:items-start group"
               href="/contact">
                <h4 class="text-2xl font-bold leading-6 duration-200 group-hover:-translate-y-3">Want to be listed?</h4>
                <span class="pb-1 text-xs text-gray-400 duration-300 ease-in-out rounded-full group-hover:-translate-y-2">Now!</span>
                <div class="max-w-sm mx-auto text-gray-500 duration-700 group-hover:-translate-y-2">
                    <h5>Click here to send me an email and kick-off your next big idea!</h5>
                </div>
                <div class="flex flex-col items-start pt-1 space-x-1">
                    <ul class="flex flex-wrap justify-center flex-1 min-h-0 gap-2 break-normal duration-300 ease-in-out group-hover:delay-150 group-hover:-translate-y-1 md:justify-start">
                        <li class="ring-offset-primary px-1 uppercase rounded ring-2 text-2xs ring-green-400 ring-offset-2 bg-green-400 opacity-0 group-hover:opacity-100 text-black duration-300 delay-100 ease-in-out">
                            Send Email
                        </li>
                    </ul>
                </div>
            </a>
        </div>
    </div>
</section>