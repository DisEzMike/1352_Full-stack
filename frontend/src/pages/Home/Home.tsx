import React, { Component } from 'react';
import './home.css';
import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	For,
	HStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import UploadDialog from '../../components/Dialog';

export const Home = () => {
	const text = [
		'บริการฝากรูป วิดีโอสั้นๆ อัพโหลดฟรี ได้สูงสุดถึง 200MB ต่อไฟล์',
		'ไม่จำกัดจำนวน ไม่มีวันหมดอายุตลอดการใช้งาน ฟรี!',
	];
	return (
		<div className="main">
			<div className="bg" />
			<div className="bg1" />
			<Center>
				<Flex className="slogan" direction="column">
					<Box fontSize={{ mdDown: '30px !important' }}>
						ฝากรูป วิดีโอ อัพโหลดฟรี
					</Box>
					<Box
						fontSize={{ mdDown: '20px !important' }}
						display={{ md: 'none' }}
					>
						{text[0] + ' ' + text[1]}
					</Box>
					<Box display={{ mdDown: 'none' }}>{text[0]}</Box>
					<Box display={{ mdDown: 'none' }}>{text[1]}</Box>
					<Box>
						{/* <Button className="btn" colorPalette="teal" variant="solid">
							<FontAwesomeIcon icon={faCloudUpload} />
							อัพโหลดเลย
						</Button> */}
						{UploadDialog('อัพโหลดเลย', 1)}
					</Box>
				</Flex>
			</Center>
		</div>
	);
};
