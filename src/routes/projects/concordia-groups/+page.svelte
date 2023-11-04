<script lang="ts">
    import Roles from "../components/Roles.svelte";
    import {roles_concordiaGroups} from "../../../data/projects/roles.ts";
    import Vitals from "../components/Vitals.svelte";
    import Addendum from "../components/Addendum.svelte";
    import {concordia_groups} from "../../../data/projects/addendum.ts";
    import Header from "../../../components/Header.svelte";
    import Technologies from "../components/Technologies.svelte";
    import {groupsTechStack} from "../../../data/projects/technologies";
</script>

<div class="flex flex-col space-y-10">
    <Header heading="Concordia groups" subHeading="Course study group chats repository"
            customStyle="space-y-4 text-center pt-14 md:pt-28"/>
    <Technologies techStack={groupsTechStack}/>

    <div class="py-20 sm:py-14 md:py-10">
        <section class="max-w-full prose text-gray-300 list-disc prose-gray md:prose-lg">
            <div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                       This hub provides Concordia students, primarily from the engineering faculty for the moment,
                        with the opportunity to join a variety of study group chats across Discord and WhatsApp.
                    </p>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                        At the time of this writing, over 63 study groups are actively being used by students for their coursework.
                        With the integration of <strong> Whatsapp communities</strong>, we have successfully organized course-specific chat groups,
                        now supporting over <strong> 5,000 students</strong> each semester.
                    </p>
                </div>

            </div>

        </section>
    </div>
</div>

<div class="my-20 col-span-full">
    <Roles roles={roles_concordiaGroups}/>
    <Vitals duration="one month" customer="Personal"/>
    <Addendum data={concordia_groups}/>
</div>