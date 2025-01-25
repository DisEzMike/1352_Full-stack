import React, { Component } from 'react';
import './home.css';
import { Button, Center, Container, Flex, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
	render() {
		return (
			<div className="main">
				<div className="background" />
				<Center>
					<Flex className="slogan" direction="column">
						<span>ฝากรูป วิดีโอ อัพโหลดฟรี</span>
						<span>
							บริการฝากรูป วิดีโอสั้นๆ อัพโหลดฟรี ได้สูงสุดถึง 200
							MB ต่อไฟล์
						</span>
						<span>
							ไม่จำกัดจำนวน ไม่มีวันหมดอายุตลอดการใช้งาน ฟรี!
						</span>
						<div>
							<Button className="btn" colorPalette="teal" variant="solid">
								<FontAwesomeIcon icon={faCloudUpload} />
								อัพโหลดเลย
							</Button>
						</div>
					</Flex>
				</Center>
			</div>
		);
	}
}
