<script lang="ts">
    import Roles from "../components/Roles.svelte";
    import {rolesNova} from "../../../data/projects/roles.ts";
    import Vitals from "../components/Vitals.svelte";
    import Addendum from "../components/Addendum.svelte";
    import {nova} from "../../../data/projects/addendum.ts";
    import Header from "../../../components/Header.svelte";
    import Technologies from "../components/Technologies.svelte";
    import {novaTechStack} from "../../../data/projects/technologies";
</script>

<div class="flex flex-col space-y-10">
    <Header heading="Nova" subHeading="New generation prosthetic design software"
            customStyle="space-y-4 text-center pt-14 md:pt-28"/>
    <Technologies techStack={novaTechStack}/>

    <div class="py-20 sm:py-14 md:py-10">
        <section class="max-w-full prose text-gray-300 list-disc prose-gray md:prose-lg">
            <div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <h2>Embracing Technology in Healthcare: An Intern's Journey</h2>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                        During my internship at Straumann Group Montreal,
                        I experienced a unique blend of technical growth and real-world impact.
                        My role in developing innovative dental software, especially in AI
                        integration and new workflows byproducts extraction.
                        The direct impact on patient care was profound, deepening my appreciation
                        for this field's potential.
                    </p>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <h2>Bridging Theory with Practice: My Internship at Straumann Group</h2>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                       As a science-savvy intern passionate about healthcare technology,
                        I joined Straumann Group's avocado team, diving into the world of dental
                        software development. My role spanned Java coding to software refinement,
                        focusing on the Nova application. Under the guidance of my team lead, I
                        melded academic knowledge with practical skills, gaining insights into
                        cross-functional teamwork and project management in a local setting.
                    </p>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <h2>Challenges and Growth: Innovating in Healthcare Tech</h2>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                       Engaging in AI-based projects for dental diagnostics, I confronted real-world
                        coding challenges, transitioning from theory to application. The demanding pace of
                        healthcare software development pushed me to hone my adaptability and problem-solving skills.
                        Feedback from my team enhanced my analytical capabilities and time management,
                        shaping my professional growth.
                    </p>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <h2>From Classroom to Real-World Application</h2>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                       My studies in software development found direct application in my internship. Courses in Java
                        programming and calculus proved invaluable, especially in AI projects. The transition from
                        structured academic problems to the complex, ambiguous nature of real-world scenarios
                        underscored the importance of creative thinking, highlighting a gap in current academic
                        offerings related to teamwork in technical projects.
                    </p>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <h2>From Student to Employee: Adapting to the Professional World</h2>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                       Transitioning to a professional setting, I embraced the mentorship and collaborative culture at
                        Straumann group. Engaging with various departments, I built a professional network and gained a
                        comprehensive understanding of the industry, enriching my perspective and integration into the
                        workplace.
                    </p>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <h2>Charting a Path in Healthcare Technology</h2>
                </div>

                <div style="animation-fill-mode: both; animation-duration: 800ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;">
                    <p>
                       This internship crystallized my career direction in healthcare software development. Proud of my
                        contributions to projects impacting patient care, I plan to continue exploring AI and healthcare
                        technology through targeted coursework and hands-on experiences, preparing for a future in
                        this dynamic field.
                    </p>
                </div>
            </div>
        </section>
    </div>
</div>

<div class="my-20 col-span-full">
    <Roles roles={rolesNova}/>
    <Vitals duration="4 months" customer="External"/>
    <Addendum data={nova}/>
</div>