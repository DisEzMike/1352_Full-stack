import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from "../../components/ui/clipboard"
import { InputGroup } from "../../components/ui/input-group"
import React, { Component, PropsWithChildren, useEffect, useState } from 'react'

import "./view.css"

import _img from "../../assets/img/urban-vintage-78A265wPiO4-unsplash1.jpg"
import { Box, Button, Center, Container, Flex, Group, Image } from "@chakra-ui/react"
import ImageSlider from "../../components/ImageSlider"
import { SlideData } from "../../components/slideData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faImage } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import axios from "axios"

import {API_URL, BASE_URL, FILE} from "../../components/useful";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function View() {
  const {id} = useParams();
  const [isload, setIsLoad] = useState(false);
  const [data, setData] = useState([] as FILE[]);
  const [currentData, setCurrentData] = useState<FILE>();
  const [img, setImg] = useState([] as {image: string}[]);

  useEffect(() => {
    (async () => axios({
      method: "GET",
      url: `${API_URL.PROB}/api/${id}`
    }).then((result) => {
      setData(result.data.data);
      let temp: {image: string}[] = [];
      result.data.data.forEach((file, i) => {
        temp[i] = {image: `${API_URL.PROB}/public/${file.name}`}
      })
      setImg(temp);
  
      setCurrentData(result.data.data[0]);

      setIsLoad(true);
    }).catch(error => console.log(error)))()
  }, [id])

  const onFileChange = (index:number, item) => {
    setCurrentData(data[index]);
  }

  const roundByte = (byte: number) => {
    let temp = byte;
    let i = 0;
    let unit = "";
    // console.log(temp/1000);
    while (temp > 100) {
      temp = temp/1000;
      i++;
      console.log(temp, i);
    }

    if (temp < 1) {
      temp *= 1000;
      i -= 1;
    }

    switch(i) {
      case 1: unit = "KB"; break;
      case 2: unit = "MB"; break;
      case 3: unit = "GB"; break;
      case 4: unit = "TB"; break;
      default: unit = "B"; break;
    }

    return `${temp} ${unit}`;
  }

  return (
    isload && <>
      <Box w="100%" h="50vh" className="file">
        
          {/* <ImageSlider slides={img} /> */}
      <Carousel infiniteLoop onChange={onFileChange}>
      {img.map((slide, i) => {
        return <img src={slide.image} key={i} />;
      })}
    </Carousel>
      </Box>
      <Center>
        <div className='container'>
          <Flex className='detail' justifyContent="space-between">
            <Flex direction="column">
              <div><span>{currentData?.name}</span> - 10/10/24</div>
              <br />
              <div><FontAwesomeIcon icon={faImage} /> &nbsp;{`${currentData?.type.split("/")[1].toLocaleUpperCase()} ${roundByte(currentData!.size)}`}</div>
            </Flex>
            <div>
              <Button className='resetbtn' variant="subtle" onClick={() => window.open(API_URL.PROB+"/public/"+currentData?.name, "_blank")}>
                <FontAwesomeIcon icon={faDownload} />
                ดาวน์โหลด
              </Button>
            </div>
          </Flex>
          <br />
          <hr className='thick' />
          <div className="link">
            <Group className="link-group">
              <div className="link-title">View link</div>
              
              <ClipboardRoot w="100%" maxW="50vh" value={BASE_URL.PROB+"/view/"+id}>
                <InputGroup width="full" endElement={<ClipboardIconButton me="-2" />}>
                  <ClipboardInput />
                </InputGroup>
              </ClipboardRoot>
            </Group>
            {data.map((value, i) => {
              return (
              <Group className="link-group" key={value.id}>
                <div className="link-title">Direct link {i+1}</div>
                <ClipboardRoot w="100%" maxW="50vh" value={API_URL.PROB+"/public/"+value.name}>
                  <InputGroup width="full" endElement={<ClipboardIconButton me="-2" />}>
                    <ClipboardInput />
                  </InputGroup>
                </ClipboardRoot>
              </Group>
              );
            })}

          </div>
        </div>
      </Center>
    </>
  )
}
