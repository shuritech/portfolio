import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { FcClock } from "react-icons/fc";

export default function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"5xl"} id="about">

        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>

              <Text color={`${color}.400`} fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Text color={`white.400`} fontWeight={800} fontSize={"xl"}>Qualcosa su di me ...</Text>
          <Text color={"gray.300"} fontSize={"xl"} px={4}>
            {profile.about}
          </Text>
          <Text color={"gray.300"} fontSize={"xl"} px={4}>Particolarmente abile nel team work e dell'hardware problem solving.
            Disposto a lavorare in ogni settore, il mio interesse principale è acquisire esperienza.
          </Text>

          <div style={{
            display: "flex",
            justifyContent: "center",
            color: "orange",
          }} fontSize={"xl"} px={4}>
            <FcClock size={20} /><span>&nbsp; Part Time Sede &nbsp; | &nbsp; Part Time Remoto</span>
          </div>
        </Stack>
      </Container>

      
    </>
  );
}

