<script lang="ts">
    export let speed: number = 6;
    export let size: number = 100;
    export let font: number = 0.7;
    export let text: string = 'Hello World';
    export let repeat: number = 4;
    export let separator: string = ' • ';
    export let css: string = '';

    let array = [];
    $: array = [...Array(repeat)].map(_ => [...text].concat([...separator])).flat();
</script>


<div class="seal {css}" style="--size: {size}px; --speed: {speed * 1000}ms; --font: {font}em">
    {#each array as char, index}
        <div class="char" style="--angle: {`${1 / array.length * index}turn`}">{char}</div>
    {/each}

</div>

<style>
    @keyframes rotation {
        0% {
            transform: rotate(0turn);
        }
        100% {
            transform: rotate(1turn);
        }
    }

    .seal {
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
        animation: rotation var(--speed) linear infinite;
        font-size: var(--font);
        font-weight: bold;
    }

    .char {
        width: 1em;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) rotate(var(--angle, 0deg));
        text-align: center;
        text-transform: uppercase;
    }
</style>