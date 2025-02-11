import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogHeader,
	DialogRoot,
	DialogTrigger,
} from '../ui/dialog';

import { faClose, faCloudUpload, faRedo } from '@fortawesome/free-solid-svg-icons';
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
	For,
	Input,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
	useFileUpload,
} from '@chakra-ui/react';
import React, { Component, useState } from 'react';

import upload from '../../assets/img/upload.svg';

import './dialog.css';
import { Field } from '../ui/field';
import { Checkbox } from '../ui/checkbox';

import {
	FileUploadDropzone,
	FileUploadList,
	FileUploadRoot,
} from '../ui/file-upload';


export default function UploadDialog(text: string, type = 0) {
	const [files, setFiles] = useState([] as File[])

	const removeFile = (index: number) => setFiles([...files.slice(0, index), ...files.slice(index + 1)]);

	return (
		<DialogRoot size="xl" placement="center" motionPreset="slide-in-bottom">
			<DialogTrigger asChild>
				<Button
					className={type == 1 ? 'btn' : 'btn0'}
					variant="plain"
					color="black"
					w={{ mdDown: '50% !important' }}
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
					{files.length == 0 && (
						<FileUploadRoot
							maxW="xl"
							alignItems="stretch"
							maxFiles={10}
							accept={["image/*", "video/*"]}
							maxFileSize={200000000}

							onFileAccept={(detail) => {
								console.log(detail)
								setFiles(detail.files);
							}}
						>
							<FileUploadDropzone
								label="Drag and drop here to upload"
								description="รองรับ JPG JPEG PNG GIF MP4 M4A MOV *MAX 200 MB"
							/>
							<FileUploadList showSize clearable />
						</FileUploadRoot>
					)}
					{files.length > 0 && (
						<Container className="box">
							<div className="rst">
								<Button className="resetbtn" variant="subtle" onClick={() => setFiles([])}>
									<FontAwesomeIcon icon={faRedo} />
									รีเซ็ต
								</Button>
							</div>
							<Flex
								className="flex-box"
								gap={{ mdDown: 2, md: 5 }}
								wrap="wrap"
							>
								<For each={files}>
									{(file, index) => (
										<Box
											position="relative"
											className="flex-box-item"
										>
											<img
												className="flex-box-img"
												src={URL.createObjectURL(file)}
												alt="upload"
											/>
											<Float display={"flex"} alignItems={"center"} justifyContent={"center"} onClick={() => removeFile(index)}>
												<Circle
													size="5"
													bg="red"
													color="white"
												>
													<FontAwesomeIcon icon={faClose} />
												</Circle>
											</Float>
										</Box>
									)}
								</For>
							</Flex>
							<br />
							<SelectRoot
								collection={data}
								size="sm"
								width="300px"
							>
								<SelectLabel>Auto Delete</SelectLabel>
								<SelectTrigger>
									<SelectValueText placeholder="เลือก" />
								</SelectTrigger>
								<SelectContent>
									{data.items.map((date) => (
										<SelectItem
											item={date}
											key={date.value}
										>
											{date.label}
										</SelectItem>
									))}
								</SelectContent>
							</SelectRoot>
							<br />
							<Button
								className="btn1"
								variant="plain"
								w={{ mdDown: '50%' }}
							>
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

const data = createListCollection({
	items: [
		{ label: 'ไม่ลบ', value: 'none' },
		{ label: '1 วัน', value: '1 day' },
		{ label: '3 วัน', value: '3 days' },
		{ label: '7 วัน', value: '7 days' },
		{ label: '1 เดือน', value: '1 month' },
		{ label: '3 เดือน', value: '3 months' },
		{ label: '6 เดือน', value: '5 months' },
		{ label: '1 ปี', value: '1 year' },
	],
});
