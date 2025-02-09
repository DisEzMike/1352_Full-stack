import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogHeader,
	DialogRoot,
	DialogTrigger,
} from '../ui/dialog';

import {
	faClose,
	faCloudUpload,
	faRedo,
} from '@fortawesome/free-solid-svg-icons';
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
import React, { Component, FormEvent, useState } from 'react';

import upload from '../../assets/img/upload.svg';

import './dialog.css';
import { Field } from '../ui/field';
import { Checkbox } from '../ui/checkbox';

import {
	FileUploadDropzone,
	FileUploadList,
	FileUploadRoot,
} from '../ui/file-upload';
import { Controller, Form, useForm } from 'react-hook-form';
import { object, unknown, z } from 'zod';
import axios, { AxiosError } from 'axios';

import Swal from 'sweetalert2'
import { Route, useNavigate } from 'react-router-dom';

const formSchema = z.object({
	autoDel: z.string({ message: 'Auto Delete is required' }).array(),
});

type FormValues = z.infer<typeof formSchema>;

export default function UploadDialog(text: string, type = 0) {
	const [files, setFiles] = useState([] as File[]);
	const [progress, setProgress] = useState(0);
	const removeFile = (index: number) =>
		setFiles([...files.slice(0, index), ...files.slice(index + 1)]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormValues>();

	const navigate = useNavigate();

	const onSubmitHandle = handleSubmit( async (data) => {
		const formData = new FormData();

		files.map((file, i) => formData.append(`file`, file));

		const autoDel = !!data.autoDel ? data.autoDel[0] : 'none';

		formData.append('autoDel', autoDel);

		// console.log(Object.fromEntries(formData));

		try {
			const res = await axios({
				method: "POST",
				url: "http://localhost:8080/api/upload",
				data: formData,
			})

			Swal.fire({
				target: document.getElementById("dialog::r1::positioner"),
				title: "Success",
				icon: "success",
				text: "อัพโหลดสำเร็จ!",
				customClass: {
					container: 'topfield'
				},
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				didClose: () => {
					navigate(`/view/${res.data.id}`);
				}	
			})

		} catch (e) {
			Swal.fire({
				target: document.getElementById("dialog::r1::positioner"),
				title: `${(e as AxiosError).message}`,
				icon: "error",
				text: 'กรุณาลองใหม่อีกครั้ง',
				customClass: {
					container: 'topfield'
				},
				showConfirmButton: false,
				timerProgressBar: true,
				timer: 3000,
			})
		}
	});

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
							accept={['image/*', 'video/*']}
							maxFileSize={200000000}
							onFileAccept={(detail) => {
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
						<form onSubmit={onSubmitHandle}>
							<Container className="box">
								<div className="rst">
									<Button
										className="resetbtn"
										variant="subtle"
										onClick={() => setFiles([])}
									>
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
												key={index}
											>
												<img
													className="flex-box-img"
													src={URL.createObjectURL(
														file
													)}
													alt="upload"
												/>
												<Float
													display={'flex'}
													alignItems={'center'}
													justifyContent={'center'}
													onClick={() =>
														removeFile(index)
													}
												>
													<Circle
														size="5"
														bg="red"
														color="white"
													>
														<FontAwesomeIcon
															icon={faClose}
														/>
													</Circle>
												</Float>
											</Box>
										)}
									</For>
								</Flex>
								<br />
								<Controller
									control={control}
									name="autoDel"
									render={({ field }) => (
										<SelectRoot
											name={field.name}
											value={field.value}
											onValueChange={({ value }) =>
												field.onChange(value)
											}
											onInteractOutside={() =>
												field.onBlur()
											}
											collection={data}
											size="sm"
											width="300px"
										>
											<SelectLabel>
												Auto Delete
											</SelectLabel>
											<SelectTrigger>
												<SelectValueText placeholder="ไม่ลบ" />
											</SelectTrigger>
											<SelectContent>
												{data.items.map((date, i) => (
													<SelectItem
														item={date}
														key={date.value}
													>
														{date.label}
													</SelectItem>
												))}
											</SelectContent>
										</SelectRoot>
									)}
								/>
								<br />
								<Button
									className="btn1"
									variant="plain"
									w="50%"
									type="submit"
								>
									<FontAwesomeIcon icon={faCloudUpload} />
									อัพโหลด
								</Button>
								
							</Container>
						</form>
						
					)}
				</DialogBody>
			</DialogContent>
		</DialogRoot>
	);
}

const data = createListCollection({
	items: [
		{ label: 'ไม่ลบ', value: 'none' },
		{ label: '1 วัน', value: '1 d' },
		{ label: '1 เดือน', value: '1 M' },
		{ label: '3 เดือน', value: '3 M' },
		{ label: '6 เดือน', value: '6 M' },
		{ label: '1 ปี', value: '1 y' },
	],
});
