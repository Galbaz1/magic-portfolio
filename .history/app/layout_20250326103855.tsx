import SpliteDemo from "@/components/demo/splite-demo";

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable,
      )}
    >
      <ToastProvider>
        <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
          <SpliteDemo />
          {children}
        </Column>
      </ToastProvider>
    </Flex>
  );
} 