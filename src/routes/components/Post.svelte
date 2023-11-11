<script lang="ts">
    export let data: {
        postUrl: string,
        imageUrl: string,
        postTitle: string,
        postDescription: string
    };
</script>

<div class="items-center justify-center hidden h-full px-2 py-4 md:inline-flex col-span-1 bg-gradient-to-br from-black to-gray-900">
    <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-666730371144654-1;">
        <div class="transition-all rounded-lg  group">
            <a class="flex flex-col w-full h-full p-3 text-center text-gray-100" href={data.postUrl}>
                <div class="self-center w-40 h-20 overflow-hidden transition duration-300 transform rounded-lg group-hover:-translate-y-3">
                    <img class="absolute object-cover w-full h-full rounded-lg bg-gradient-to-t from-primary"
                         src={data.imageUrl}
                         alt={data.postTitle} loading="lazy"></div>
                <h6 class="mb-2 text-lg duration-700 group-hover:-translate-y-2">{data.postTitle}</h6>
                <p class="text-sm duration-1000 opacity-60 group-hover:-translate-y-1">{data.postDescription}</p>
            </a>
        </div>
    </div>
</div>