<script lang="ts">
    import "../app.css";
    import Wrapper from "../components/Wrapper.svelte";
    import Footer from "../components/Footer.svelte";
    import IconLink from "../components/IconLink.svelte";
    import linkData from "../data/links.ts";
    import Metadata from "../components/Metadata.svelte";
</script>

<Metadata />

<Wrapper>

    <slot/>

    <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
        <div class="max-w-md mx-auto">
            <Footer>
                {#each linkData as link}
                    <IconLink
                            title={link.title}
                            href={link.href}
                            iconPath={link.iconPath}
                            linkText={link.linkText}
                    />
                {/each}
            </Footer>
        </div>
    </div>

</Wrapper>
