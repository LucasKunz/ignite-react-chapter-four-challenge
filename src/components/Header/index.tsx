import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Header() {
  return (
    <Flex as="header" w="100%" h="100" mx="auto" justifyContent="center" align='center'>
      <Box as="a" href="/" maxH={45}>
        <Image src="/logo.svg" alt="Logo" width={180} height={45} />
      </Box>
    </Flex>
  );
}
