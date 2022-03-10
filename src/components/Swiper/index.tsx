import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import api from "../../services/api";
import Link from "next/link";

interface continentProp {
  id: number;
  name: string;
  subtitle: string;
  image: string;
}

export default function SwiperContinent() {
  const [continent, setContinent] = useState([]);
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  useEffect(() => {
    async function getContinent() {
      const response = await api.get("/continents");
      console.log(response);
      
      setContinent(response.data);
    }

    getContinent();
  }, []);

  return (
    <Box
      w="100%"
      justifyContent="center"
      maxWidth="1200px"
      mx="auto"
      maxH="450px"
    >
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {!!continent &&
          continent.map((continent: continentProp) => {
            const urlName = continent.name
            return (
              <SwiperSlide key={continent.id}>
                <Link href={`/continents/${urlName}`} passHref>
                  <a>
                    <Image
                      src={continent.image}
                      alt="Nightlife"
                      w="100%"
                      maxH={isMobile ? "249px" : "450px"}
                      fit="cover"
                      objectFit="cover"
                      filter="brightness(0.4)"
                    />
                    <Text
                      position="absolute"
                      top={isMobile ? "40%" : "50%"}
                      left="50%"
                      fontWeight="700"
                      fontSize={isMobile ? "28px" : "48px"}
                      color="#fff"
                      transform="translate(-50%, -50%)"
                      margin={0}
                    >
                      {continent.name}
                    </Text>
                    <Text
                      position="absolute"
                      top="65%"
                      left="50%"
                      color="#fff"
                      fontSize={isMobile ? "15px" : "22px"}
                      fontWeight="700"
                      transform="translate(-50%, -50%)"
                      margin={0}
                      textAlign="center"
                    >
                      {continent.subtitle}
                    </Text>
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
}
