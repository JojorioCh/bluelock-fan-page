import {
  Text,
  createStyles,
  Anchor,
  Group,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import JFALogo from "./images/JFALogo3.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  text: {
    color: "white",
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function JFAFooter({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer} style={{ backgroundColor: "#1c7ed6" }}>
      <div className={classes.inner}>
        <img src={JFALogo} alt="JFA Logo" style={{ height: 50 }} />
        <Group className={classes.links}>{items}</Group>
        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="1.95rem" variant="default" radius="xl">
            <div
              style={{
                backgroundColor: "#1c7ed6",
                borderRadius: "50%",
                padding: "5px",
              }}>
              <IconBrandTwitter size="1.05rem" stroke={1.5} color="white" />
            </div>
          </ActionIcon>
          <ActionIcon size="1.95rem" variant="default" radius="xl">
            <div
              style={{
                backgroundColor: "#1c7ed6",
                borderRadius: "50%",
                padding: "5px",
              }}>
              <IconBrandYoutube size="1.05rem" stroke={1.5} color="white" />
            </div>
          </ActionIcon>
          <ActionIcon size="1.95rem" variant="default" radius="xl">
            <div
              style={{
                backgroundColor: "#1c7ed6",
                borderRadius: "50%",
                padding: "5px",
              }}>
              <IconBrandInstagram size="1.05rem" stroke={1.5} color="white" />
            </div>
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
