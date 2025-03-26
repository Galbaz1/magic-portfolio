import { getPosts } from "@/app/utils/utils";
import { Column, Heading, Text } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);
  
  // Log the number of projects for debugging
  console.log(`Found ${allProjects.length} projects`);
  
  // Log each project's title and slug
  allProjects.forEach((project, index) => {
    console.log(`Project ${index + 1}: ${project.metadata.title} (${project.slug})`);
  });

  return (
    <Column maxWidth="m" gap="xl">
      <Column horizontal="center" gap="m" paddingY="xl">
        <Heading variant="display-strong-l">{work.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-medium" style={{ textAlign: "center" }}>
          {work.description}
        </Text>
      </Column>
      
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      
      {/* Force show all projects with no filtering */}
      <Projects />
    </Column>
  );
}
