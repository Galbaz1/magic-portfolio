import { getPosts } from "@/app/utils/utils";
import { Column, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);
  
  // Log for debugging
  console.log(`Projects component: found ${allProjects.length} projects`);
  
  if (allProjects.length === 0) {
    console.log("No projects found. Check the src/app/work/projects directory.");
    return (
      <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
        <Text variant="body-default-m">No projects found. Check the projects directory.</Text>
      </Column>
    );
  }

  const sortedProjects = allProjects.sort((a, b) => {
    // Fallback to date if publishedAt is not available
    const dateA = a.metadata.publishedAt || a.metadata.date || "2000-01-01";
    const dateB = b.metadata.publishedAt || b.metadata.date || "2000-01-01";
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
  
  // Log for debugging
  sortedProjects.forEach((project, index) => {
    console.log(`Sorted project ${index + 1}: ${project.metadata.title} (${project.slug})`);
    console.log(`  - Date: ${project.metadata.publishedAt || project.metadata.date}`);
    console.log(`  - Images: ${project.metadata.images?.length || 0} images`);
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;
    
  // Log for debugging  
  console.log(`Displaying ${displayedProjects.length} projects`);

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.length > 0 ? (
        displayedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            images={post.metadata.images || []}
            title={post.metadata.title || "Untitled Project"}
            description={post.metadata.summary || post.metadata.excerpt || ""}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        ))
      ) : (
        <Text variant="body-default-m">No projects to display with the current filter.</Text>
      )}
    </Column>
  );
}
