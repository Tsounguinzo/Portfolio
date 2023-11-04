<script>
    export let duration = ''
    export let customer = ''
</script>

<div class="mt-4 mb-20"><p class="text-xs text-gray-400 uppercase pb-6">Vitals</p>
    <ul class="grid grid-cols-12 gap-4">


        <li class="col-span-6 sm:col-span-4 md:col-span-3">
            <div
                 style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                <span class="group overflow-hidden text-gray-100 flex flex-col items-stretch h-24 sm:h-28 justify-between p-3 border border-gray-800 border-2 rounded-md hover:text-white hover:border-gray-500 transition-colors duration-300 ease-in-out">
                    <div class="inline-flex">
                        <div class="relative flex items-center justify-end w-10 h-10 overflow-hidden rounded-full">
                            <div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-0">
                                <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                            </div>
                            <div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-45">
                                <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                            </div>
                            <div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-90">
                                <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                            </div>
                            <div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-[135deg]">
                                <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                            </div>
                            <div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-180">
                                <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                            </div>
                            <div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-[225deg]">
                                <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                            </div>
                            <div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-[270deg]">
                                <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                            </div><div style="height: 1px;" class="absolute w-1/2 origin-left flex justify-end rotate-[315deg]">
                            <div class="w-1/3 h-full bg-gray-600 rounded-full"></div>
                        </div>
                            <div class="absolute w-1/2 h-1 bg-gray-300 rounded-full origin-left -rotate-12 group-hover:rotate-[215deg] duration-1000 ease-in-out"></div>
                            <div class="absolute w-1/2 h-1 origin-left rotate-[85deg] group-hover:rotate-[340deg] duration-1000 ease-in-out">
                                <div class="w-2/3 h-full bg-gray-300 rounded-full"></div>
                            </div>
                            <div class="absolute flex justify-center flex-1 w-full">
                                <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="text-sm">{duration}</div>
                        <div class="-mb-1 text-gray-400 uppercase d text-2xs">Duration</div>
                    </div>
                </span>
            </div>
        </li>


        <li class="col-span-6 sm:col-span-4 md:col-span-3">
            <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                <span class="group overflow-hidden text-gray-100 flex flex-col items-stretch h-24 sm:h-28 justify-between p-3 border border-gray-800 border-2 rounded-md hover:text-white hover:border-gray-500 transition-colors duration-300 ease-in-out">
                    <div class="inline-flex">
                        <div class="inline-flex">
                            <div class="duration-300 ease-in group-hover:translate-x-6 group-hover:opacity-0">
                                <svg class="remixicon-icon " width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                            d="M17.841 15.659l.176.177.178-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 0 1 3.182-3.182zM12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 0 1 5.775-5.996L12 1zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z">
                                    </path>
                                </svg>
                            </div>
                            <div class="duration-300 ease-in -translate-x-12 opacity-0 group-hover:-translate-x-4 group-hover:opacity-100">
                                <svg class="remixicon-icon " width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4-7h8a4 4 0 1 1-8 0zm0-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="text-sm">{customer}</div>
                        <div class="-mb-1 text-gray-400 uppercase d text-2xs">Customer</div>
                    </div>
                </span>
            </div>
        </li>


    </ul>
</div>