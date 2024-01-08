<script>
    import Typewriter from "svelte-typewriter";
</script>

<section
        class="inline-flex items-center row-span-2 pl-20 overflow-hidden col-span-full md:col-span-3 sm:pl-56 md:pl-10 lg:pl-20 xl:pl-40 2xl:pl-80 bg-gradient-to-tr from-primary to-gray-700"
        style="min-height:300px">
    <h1
            class="overflow-hidden text-5xl font-black leading-none uppercase xl:text-8xl 2xl:text-9xl gray">
            <span style="color:inherit">
                <Typewriter mode="loop" cursor={true} keepCursor={true} wordInterval={4000} unwriteInterval={100}
                            --cursor-color='rgb(209, 213, 219)' --cursor-width="10px">
                    <span>Java</span>
                    <span>Python</span>
                    <span>Numpy</span>
                    <span>Matplotlib</span>
                    <span>SKLearn</span>
                    <span>Svelte</span>
                    <span>Pytorch</span>
                </Typewriter>
            </span>Tech<br>Student
    </h1>
</section>