import { getPortfolioFromDb } from "@/lib/get-portfolio";
import { Sidebar } from "@/components/Sidebar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Recommendations } from "@/components/Recommendations";

export const revalidate = false;

export default async function Home() {
  const config = await getPortfolioFromDb();

  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Sidebar
            profileImage={config.profileImage}
            profile={config.profile}
            skills={config.skills}
          />
          <main className="md:col-span-2">
            <AboutMe about={config.about} />
            <Projects projects={config.projects} />
            <Experience experience={config.experience} />
            <Recommendations recommendations={config.recommendations} />
          </main>
        </div>
      </div>
    </div>
  );
}
