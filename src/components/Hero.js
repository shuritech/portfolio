import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Center,
  HStack,
  Button,

} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";


export default function Header({ color }) {
  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  const instagram = () => {
    window.open(`${profile.instagram}`, "_blank", "noreferrer,noopener");
  };

  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>

          <Center>
            <HStack pt={4} spacing={4}>
              <FaLinkedin onClick={linkedin} size={28} />
              <FaGithub onClick={github} size={28} />
              <FaEnvelope onClick={email} size={28} />
              <FaInstagram onClick={instagram} size={28} />
            </HStack>
          </Center>

          <Center>
            <Stack spacing={4} direction='row' align='center'>
              <Button color={`${color}.400`} size='sm'>
                CV ITA
              </Button>
              <Button color={`${color}.400`} size='sm'>
                CV ENG
              </Button>
            </Stack>
          </Center>

        </Stack>
      </Container>
    </>
  );
}


