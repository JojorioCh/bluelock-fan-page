import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Lock from "./images/Blue-lock-background.jpg";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(26),
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: "white",
    WebkitTextStroke: "0.0625rem black",
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

export function ForgotPassword() {
  const { classes } = useStyles();

  return (
    <div
      style={{
        backgroundImage: `url(${Lock})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.189)",
        backgroundBlendMode: "lighten",
        color: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}>
      <Container size={460} py={100}>
        <Title className={classes.title} align="center">
          Forgot your password?
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter your email to get a reset link
        </Text>

        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput
            label="Your email"
            placeholder="name@example.com.jp"
            required
          />
          <Group position="apart" mt="lg" className={classes.controls}>
            <Link to="/login">
              <Anchor color="dimmed" size="sm" className={classes.control}>
                <Center inline>
                  <IconArrowLeft size={rem(12)} stroke={1.5} />
                  <Box ml={5}>Back to the login page</Box>
                </Center>
              </Anchor>
            </Link>
            <Button className={classes.control}>Reset password</Button>
          </Group>
        </Paper>
      </Container>
    </div>
  );
}
