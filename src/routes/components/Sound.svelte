<script>
    import {Sound} from "svelte-sound";
    import CircularText from "./CircularText.svelte";


    let soundOn = false;
    const player = new Sound("https://firebasestorage.googleapis.com/v0/b/portfolio-beaudelaire.appspot.com/o/sound.mp4?alt=media&token=53277243-aac7-43b0-b706-77387018d5d8");

    function toggleSound() {
        if (soundOn) {
            player.stop()
            soundOn = false;
        } else {
            player.play()
            soundOn = true;
        }
    }

</script>


<CircularText text="Press" css="fixed mx-auto inset-x-0 bottom-0"/>

<button class="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white" on:click={() => toggleSound()}>
    {#if soundOn}
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" color="orange">
                <path d="M7 7V17H17V7H7ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
                      fill="currentColor">
                </path>
            </svg>

        {:else }
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" color="rgb(37 99 235)">
                <path d="M16.3944 12.0001L10 7.7371V16.263L16.3944 12.0001ZM19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
                      fill="currentColor">
                </path>
            </svg>
        {/if}
    </button>


<!--<button class="fixed left-1/2 bottom-0 transform -translate-x-1/2"-->
<!--        on:click={() => toggleSound()}>-->
<!--    <span class="animate-spin"> Press </span>-->
<!--    sound <span>{soundOn ? "on" : "off" }</span>-->
<!--</button>-->
