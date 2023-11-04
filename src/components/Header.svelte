<script>
    export let heading = ''
    export let subHeading = ''
    export let customStyle = ''
</script>

<header class={customStyle}>
    <h1 class="text-5xl">{heading}</h1>
    <h2 class="text-xl">{subHeading}</h2>
</header>