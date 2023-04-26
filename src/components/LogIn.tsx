import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";
import Lock from "./images/Blue-lock-background.jpg";

export function LogIn() {
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
        paddingTop: "10rem",
      }}>
      <Container size={420}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            color: "white",
            WebkitTextStroke: "0.0625rem black",
          })}>
          Welcome back! For the Future of JFA!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Staff member without an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="name@example.com.jp" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Link to="/forgotpassword">
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Link>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    </div>
  );
}
