<script lang="ts">
    import Post from "./Post.svelte";

    export let posts: {
        postUrl: string,
        imageUrl: string,
        postTitle: string,
        postDescription: string
    }[];

</script>

<section class="row-span-4 col-span-full lg:col-span-4 xl:col-span-3">
    <div class="max-w-lg px-4 mx-auto space-y-4 font-light leading-loose pt-36 2xl:px-0 pb-36">
        <h2 class="mb-10 text-2xl font-semibold">
            I write code.<br>And I also write about writing code!
        </h2>
        <p>
            As a being developer is trying to hit an ever moving target due to quickly evolving technologies and a
            constant stream of changes and improvements, it's important to stay ahead of the curve.
        </p>
        <p>
            To stay up-to-date on what's going on around the planet and to learn about emerging tools or trends, I'm
            using this progressive web app as a medium to challenge myself for exactly this task.
        </p>
        <p>
            <strong>This portfolio</strong> gives me an opportunity to write about those changes on a regular basis.
            Furthermore, I use the PWA to learn about self-hosting a large static site (as of writing, this PWA is
            around 1k+ pages big) as well as having fun using Svelte.
        </p>
        <p>
            <a href="/articles" aria-label="See all articles"
               class="font-semibold uppercase duration-300 ease-in-out hover:text-gray-500">See all articles</a>
        </p>
    </div>
</section>

{#each posts as post}
    <Post data={post}/>
{/each}

<div class="items-center justify-center hidden h-full px-2 py-4  md:inline-flex md:col-start-2 lg:col-start-3 xl:col-start-4 col-end-6 bg-gradient-to-br from-black to-gray-900">
    <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
        <div class="transition-all rounded-lg  group">
            <a class="flex flex-col w-full h-full p-3 text-center text-gray-100" href="/articles">
                <div class="self-center w-40 h-20 overflow-hidden transition duration-300 transform rounded-lg group-hover:-translate-y-3">
                    <img class="absolute object-cover w-full h-full rounded-lg bg-gradient-to-t from-primary"
                         src="/android-chrome-192x192.png" alt="flaming.codes" loading="lazy">
                </div>
                <h6 class="mb-2 text-lg duration-700 group-hover:-translate-y-2">Articles</h6>
                <p class="text-sm duration-1000 opacity-60 group-hover:-translate-y-1">See all posts</p>
            </a>
        </div>
    </div>
</div>