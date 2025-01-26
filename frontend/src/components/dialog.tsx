import {
	DialogActionTrigger,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';

import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, useDisclosure } from "@chakra-ui/react"
import React, { Component } from 'react';

import "./nav.css"
import "../pages/Home/home.css"

export default function UploadDialog(text: string, type=0) {

	return (
		<DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
		  <DialogTrigger asChild>
			<Button className={type == 1 ? 'btn' : 'btn0'} variant="plain" color="black">
				<FontAwesomeIcon icon={faCloudUpload} size='2xl'/> 
				<span>{text}</span>
			</Button>
		  </DialogTrigger>
		  <DialogContent>
			<DialogHeader>
			  <DialogTitle></DialogTitle>
			  <DialogCloseTrigger />
			</DialogHeader>
			<DialogBody>
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
			  eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</DialogBody>
		  </DialogContent>
		</DialogRoot>
	  );
}
