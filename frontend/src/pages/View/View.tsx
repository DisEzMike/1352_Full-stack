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
import { Center, Container, Flex, Group } from "@chakra-ui/react"


export default class View extends Component {
  render() {
    return (
      <>
        <div className='file'>
          <img src={_img} alt="img" />
        </div>
        <Center>
          <div className='container'>
            <Flex className='detail' justifyContent="space-between">
              <Flex direction="column">
                <div><span>pic's name</span> - 10/10/24</div>
                <br />
                <div>fasfsdsa</div>
              </Flex>
              <div>1</div>
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
