import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import SwiperContinent from "../components/Swiper";
import TypeOfTrips from "../components/TypeTrips";

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })
  return (
    <Flex direction="column" w="100%" mx="auto" mb="80px" align='center'>
      <Box w="100%">
        <Image src="/images/Banner.svg" alt="Banner informativo" w="100%" />
      </Box>
      <TypeOfTrips />
      <Text w="100%" textAlign="center" fontSize={isMobile ? '24px' : '36px'} color="#47585B" mt="60px">
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
      <SwiperContinent/>
    </Flex>
  );
}
