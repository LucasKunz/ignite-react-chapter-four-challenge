import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../services/api";

interface CitiesProps {
  id: number;
  name: string;
  image: string;
  country: {
    name: string;
    flag: string;
  };
}

interface ContinentProps {
  continent: {
    name: string;
    image: string;
    description: string;
    cities: [CitiesProps];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex display="flex" direction="column" paddingBottom='100px' background='#F5F8FA'>
      <Box maxH="500px" w="100%" display="flex" position="relative">
        <Image
          src={continent.image}
          alt="Logo"
          w="100%"
          objectFit="cover"
          filter="brightness(0.5)"
        />
        <Text
          position="absolute"
          bottom="60px"
          left="140px"
          color="#fff"
          fontSize="48px"
          fontWeight="600"
        >
          {continent.name}
        </Text>
      </Box>
      <Box display="flex" w="80%" margin="0 auto">
        <Text
          w="50%"
          p="50px 80px 50px 100px"
          color="#47585B"
          fontSize="24px"
          textAlign="justify"
        >
          {continent.description}
        </Text>
        <Box display="flex" justifyContent="space-around" w="50%" p="50px">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text
              color="#FFBA08"
              fontSize="48px"
              fontWeight="600"
              lineHeight="1"
            >
              50
            </Text>
            <Text color="#47585B" fontSize="24px" fontWeight="600">
              países
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text
              color="#FFBA08"
              fontSize="48px"
              fontWeight="600"
              lineHeight="1"
            >
              60
            </Text>
            <Text color="#47585B" fontSize="24px" fontWeight="600">
              línguas
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text
              color="#FFBA08"
              fontSize="48px"
              fontWeight="600"
              lineHeight="1"
            >
              27
            </Text>
            <Text color="#47585B" fontSize="24px" fontWeight="600">
              cidades +100
            </Text>
          </Box>
        </Box>
      </Box>
      <Box w='100%' maxW='1400px' mx='auto' display='flex' flexWrap='wrap' justifyContent='space-between'>
        {continent.cities.map(e => {
          return (
            <Box key={e.id} w='256px' background='#fff'>
              <Image src={e.image} alt={e.name} borderRadius='5px 5px 0 0' minH='176px' objectFit='cover' />
              <Box display='flex' justifyContent='space-between' px='25px' alignItems='center' border='1px solid #FFBA08' borderTop='0' h='105px' borderRadius='0 0 5px 5px'>
                <Box display='flex' flexDirection='column'>
                  <Text fontSize='20px' color='#47585B' fontWeight='600'>{e.name}</Text>
                  <Text fontSize='16px' color='#DADADA'>{e.country.name}</Text>
                </Box>
                <Image src={e.country.flag} alt={e.country.name} w='30px' h='30px' borderRadius='50%' objectFit='cover'/>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api
    .get("/continents")
    .then((response) => response.data);

  const continent = response.filter(
    (elem: { name: any }) => elem.name === slug
  );

  return {
    props: {
      continent: continent[0],
    },
  };
};
