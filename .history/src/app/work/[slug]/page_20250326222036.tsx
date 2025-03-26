import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Flex, Heading, SmartImage, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";

export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = post.metadata.title;
  const description = post.metadata.summary || post.metadata.excerpt || "";
  const ogImage = post.metadata.images && post.metadata.images.length > 0
    ? `https://${baseURL}${post.metadata.images[0]}`
    : `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.metadata.publishedAt,
      url: `https://${baseURL}/work/${post.slug}`,
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

export default function Project({ params }) {
  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === params.slug);
  
  console.log(`Loading project page for slug: ${params.slug}`);

  if (!post) {
    console.error(`Project with slug "${params.slug}" not found`);
    notFound();
  }
  
  console.log(`Found project: ${post.metadata.title}`);
  console.log(`- Images: ${post.metadata.images?.length || 0}`);
  console.log(`- Content length: ${post.content?.length || 0} characters`);

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt || post.metadata.date,
            dateModified: post.metadata.publishedAt || post.metadata.date,
            description: post.metadata.summary || post.metadata.excerpt || "",
            image: post.metadata.images && post.metadata.images.length > 0
              ? `https://${baseURL}${post.metadata.images[0]}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images && post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title || "Project image"}
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && post.metadata.team.length > 0 && <AvatarGroup reverse avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {(post.metadata.publishedAt || post.metadata.date) && formatDate(post.metadata.publishedAt || post.metadata.date)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
