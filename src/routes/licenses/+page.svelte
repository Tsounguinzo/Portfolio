<script lang="ts">
    import Grid from "../components/Grid.svelte";
    import licenseData from "../../data/licenses.ts";
    import LicenceLink from "../components/LicenceLink.svelte";
</script>

<Grid>
    {#each licenseData as license}
        <LicenceLink
                repoLink={license.repoLink}
                repoLabel={license.repoLabel}
                repoVersion={license.repoVersion}
                license={license.license}
        />
    {/each}
</Grid>