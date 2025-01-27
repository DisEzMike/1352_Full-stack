import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from "../../components/ui/clipboard"
import { InputGroup } from "../../components/ui/input-group"
import React, { Component } from 'react'

import "./view.css"

import _img from "../../assets/img/urban-vintage-78A265wPiO4-unsplash1.jpg"
import { Box, Button, Center, Container, Flex, Group, Image } from "@chakra-ui/react"
import ImageSlider from "../../components/ImageSlider"
import { SlideData } from "../../components/slideData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faImage } from "@fortawesome/free-solid-svg-icons"

export default class View extends Component {
  render() {
    return (
      <>
        <Box w="100%" h="50vh" className="file">
          
            <ImageSlider slides={SlideData} />

        </Box>
        <Center>
          <div className='container'>
            <Flex className='detail' justifyContent="space-between">
              <Flex direction="column">
                <div><span>pic's name</span> - 10/10/24</div>
                <br />
                <div><FontAwesomeIcon icon={faImage} />  640 x 480 - JPG 102.6 KB</div>
              </Flex>
              <div>
                <Button className='resetbtn' variant="subtle">
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
                
                <ClipboardRoot w="100%" maxW="50vh" value="https://sharechakra-ui.com/dfr3def">
                  <InputGroup width="full" endElement={<ClipboardIconButton me="-2" />}>
                    <ClipboardInput />
                  </InputGroup>
                </ClipboardRoot>
              </Group>
              <Group className="link-group">
                <div className="link-title">Direct link</div>
                
                <ClipboardRoot w="100%" maxW="50vh" value="https://sharechakra-ui.com/dfr3def">
                  <InputGroup width="full" endElement={<ClipboardIconButton me="-2" />}>
                    <ClipboardInput />
                  </InputGroup>
                </ClipboardRoot>
              </Group>

            </div>
          </div>
        </Center>

      </>
    )
  }
}
