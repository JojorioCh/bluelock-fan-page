import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
  rem,
  Space,
} from "@mantine/core";
import Facilities from "./images/BlueLock_Facility-1600x900-1-1536x864.webp";
import Striker from "./images/Strikers.webp";
import Coach from "./images/Coaching.webp";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.md,
    fontWeight: 700,
    alignItems: "center",
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}

export function AboutCards({ image, title, badges }: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === "dark" ? "dark" : "gray"}
      key={badge.label}
      leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5rem",
          color: "white",
          WebkitTextStroke: "0.125rem black",
        }}>
        <Text>
          <h1>
            Welcome to the JFA's Football Union: Developing the Future of Japan
            Football
          </h1>
        </Text>
      </div>
      <Group
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: "5rem",
          paddingBottom: "20rem",
        }}>
        <Card withBorder radius="md" p="md" className={classes.card}>
          <Card.Section>
            <Image src={Facilities} alt={title} height={300} />
          </Card.Section>
          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              State of the Art Facilities.
            </Text>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </Card.Section>
          <Group mt="xs">
            <Button radius="md" style={{ flex: 1 }}>
              Learn More
            </Button>
          </Group>
        </Card>

        <Card withBorder radius="md" p="md" className={classes.card}>
          <Card.Section>
            <Image src={Coach} alt={title} height={300} />
          </Card.Section>
          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Meet the Staff or Learn How to Become a Member
            </Text>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </Card.Section>
          <Group mt="xs">
            <Button radius="md" style={{ flex: 1 }}>
              Learn More{" "}
            </Button>
          </Group>
        </Card>

        <Card withBorder radius="md" p="md" className={classes.card}>
          <Card.Section>
            <Image src={Striker} alt={title} height={300} />
          </Card.Section>
          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Striker Database - Past and Present Candidates
            </Text>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </Card.Section>
          <Group mt="xs">
            <Button radius="md" style={{ flex: 1 }}>
              Learn More
            </Button>
          </Group>
        </Card>
      </Group>
    </>
  );
}
