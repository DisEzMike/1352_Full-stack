import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogHeader,
	DialogRoot,
	DialogTrigger,
} from './ui/dialog';

import { faCloudUpload, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	Box,
	Button,
	Center,
	Circle,
	Container,
	createListCollection,
	Flex,
	Float,
	Input,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '@chakra-ui/react';
import React, { Component } from 'react';

import upload from '../assets/img/Pool2-NIZUC-Mexico-CRHotel-1-1.png';

import './dialog.css';
import { Field } from './ui/field';
import { Checkbox } from './ui/checkbox';

export default function UploadDialog(text: string, type = 0) {
	let files = ['dd','d','dd','a'];
	return (
		<DialogRoot size="xl" placement="center" motionPreset="slide-in-bottom">
			<DialogTrigger asChild>
				<Button
					className={type == 1 ? 'btn' : 'btn0'}
					variant="plain"
					color="black"
				>
					<FontAwesomeIcon icon={faCloudUpload} size="2xl" />
					<span>{text}</span>
				</Button>
			</DialogTrigger>
			<DialogContent backgroundColor="white">
				<DialogHeader>
					<DialogCloseTrigger />
				</DialogHeader>
				<DialogBody className="dialog-body">
					{files.length == 0 && <img src={upload} alt="upload" />}
					{files.length > 0 && (
						<Container className='box'>
							<div className='rst'>
								<Button className='resetbtn' variant="subtle">
									<FontAwesomeIcon icon={faRedo} />
									รีเซ็ต
								</Button>
							</div>
							<Flex className="flex-box" gap="5" wrap="wrap">
								{
									files.map((file) =>
										<div>
											<Box position="relative" className='flex-box-item'>
												<img className='flex-box-img'  src={upload} alt="upload" />
												<Float>
													<Circle size="5" bg="red" color="white" >
														x
													</Circle>
												</Float>
											</Box>
										</div>
									)
								}
							</Flex>
							<br />
							<SelectRoot collection={frameworks} size="sm" width="300px">
								<SelectLabel>Select framework</SelectLabel>
								<SelectTrigger>
									<SelectValueText placeholder="Select movie" />
								</SelectTrigger>
								<SelectContent background="white">
									{frameworks.items.map((movie) => (
									<SelectItem item={movie} key={movie.value}>
										{movie.label}
									</SelectItem>
									))}
								</SelectContent>
							</SelectRoot>
							<Checkbox>Lock</Checkbox>
							<Input width="300px" />
							<br />
							<Button className='btn1' variant="plain">
								<FontAwesomeIcon icon={faCloudUpload} />
								อัพโหลด
							</Button>
						</Container>
					)}
				</DialogBody>
			</DialogContent>
		</DialogRoot>
	);
}

const frameworks = createListCollection({
	items: [
	  { label: "React.js", value: "react" },
	  { label: "Vue.js", value: "vue" },
	  { label: "Angular", value: "angular" },
	  { label: "Svelte", value: "svelte" },
	],
  })
