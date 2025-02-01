import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faCloudUpload,
	faHamburger,
	faBars,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import './nav.css';
import { Link } from 'react-router-dom';

import UploadDialog from '../Dialog';
import { Box, Button, Kbd } from '@chakra-ui/react';

import {
	DrawerActionTrigger,
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerRoot,
	DrawerTitle,
	DrawerTrigger,
} from '../../components/ui/drawer';

export default function Navbar() {
	return (
		<Box className="navbar" padding={{ md: '18px 60px' }}>
			<Link className="logo" to="/">
				MEDIA KEEP
			</Link>
			<Box className="actions">
				<Box display={{mdDown: "none !important", md: "flex"}}>
					<FontAwesomeIcon icon={faHouse} />
					<Link to="/">หน้าแรก</Link>
				</Box>
				<Box>
					{UploadDialog('อัพโหลด')}
				</Box>
			</Box>
		</Box>
	);
}
