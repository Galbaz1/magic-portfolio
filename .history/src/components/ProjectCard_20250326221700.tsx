"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars = [],
  link,
  priority = false,
}) => {
  // Add console log for debugging
  console.log(`Rendering project card: ${title}`);
  console.log(`- Images: ${images?.length || 0}`);
  console.log(`- Has content: ${Boolean(content?.trim())}`);
  
  // Ensure images is always an array
  const safeImages = Array.isArray(images) ? images : [];
  
  return (
    <Column fillWidth gap="m">
      {safeImages.length > 0 ? (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          images={safeImages.map((image) => ({
            src: image,
            alt: title || "Project image",
          }))}
        />
      ) : (
        <div style={{ height: "200px", background: "var(--neutral-background-medium)", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Text variant="body-default-m" onBackground="neutral-weak">No project images</Text>
        </div>
      )}
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        <Column flex={7} gap="16">
          {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          <Flex gap="24" wrap>
            {content?.trim() && (
              <SmartLink
                suffixIcon="arrowRight"
                style={{ margin: "0", width: "fit-content" }}
                href={href}
              >
                <Text variant="body-default-s">Read case study</Text>
              </SmartLink>
            )}
            {link && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ margin: "0", width: "fit-content" }}
                href={link}
              >
                <Text variant="body-default-s">View project</Text>
              </SmartLink>
            )}
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
};
