import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export default function TypeOfTrips() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Flex
      w="100%"
      justifyContent="space-evenly"
      mt="55"
      wrap="wrap"
      maxW={isMobile ? "65%" : ""}
    >
      <Image
        src="/images/typeTrips/Nightlife.svg"
        alt="Nightlife"
        transition="all .3s"
        _hover={{ transform: "scale(1.2)" }}
        maxH={isMobile ? "90px" : ""}
      />
      <Image
        src="/images/typeTrips/Beach.svg"
        alt="Surf and Sun"
        transition="all .3s"
        _hover={{ transform: "scale(1.2)" }}
        maxH={isMobile ? "90px" : ""}
      />
      <Image
        src="/images/typeTrips/Modern.svg"
        alt="Building"
        transition="all .3s"
        _hover={{ transform: "scale(1.2)" }}
        maxH={isMobile ? "90px" : ""}
      />
      <Image
        src="/images/typeTrips/Classic.svg"
        alt="Museum"
        transition="all .3s"
        _hover={{ transform: "scale(1.2)" }}
        maxH={isMobile ? "90px" : ""}
      />
      <Image
        src="/images/typeTrips/More.svg"
        alt="See More"
        transition="all .3s"
        _hover={{ transform: "scale(1.2)" }}
        maxH={isMobile ? "90px" : ""}
      />
    </Flex>
  );
}
