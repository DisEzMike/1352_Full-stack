import {
	Box,
	Button,
	Card,
	Container,
	Flex,
	Grid,
	GridItem,
	Table,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import './admin.css';
import { TotalCard } from '../../components/TotalCard';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import {
	faExternalLinkAlt,
	faImage,
	faPhotoVideo,
	faTrashAlt,
	faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import { API_URL, BASE_URL, DATA } from '@/components/useful';

Chart.register(CategoryScale);

export default function Admin() {
	const [barChartData, setbarChartData] = useState({
		labels: ['10/10/25'],
		datasets: [
			{
				label: 'รูป',
				data: [100],
				borderWidth: 1,
			},
			{
				label: 'วิดีโอ',
				data: [60],
				borderWidth: 1,
			},
		],
	});

	const [pieChartData, setpieChartData] = useState({
		labels: ['รูป', 'วิดีโอ'],
		datasets: [
			{
				data: [100, 60],
				borderWidth: 1,
			},
		],
	});

	const [load, setLoad] = useState(true);

	const [today, setToday] = useState<DATA>({
		img: 0,
		vdo: 0,
		count: 0,
		data: [],
	});

	const [allData, setAllData] = useState<DATA>({
		img: 0,
		vdo: 0,
		count: 0,
		data: [],
	});

	useEffect(() => {
		(async () => {
			axios({
				method: 'GET',
				url: `${API_URL.PROB}/api/data/${moment().toISOString()}`,
			})
				.then((result) => {
					console.log(result.data);

					setToday(result.data);
					setbarChartData({
						labels: [`${moment().toISOString()}`],
						datasets: [
							{
								label: 'รูป',
								data: [result.data.img],
								borderWidth: 1,
							},
							{
								label: 'วิดีโอ',
								data: [result.data.vdo],
								borderWidth: 1,
							},
						],
					});

					setLoad(false);
				})
				.catch((error) => console.log(error));

			axios({
				method: 'GET',
				url: `${API_URL.PROB}/api/data/all`,
			})
				.then((result) => {
					console.log(result.data);

					setAllData(result.data);
					setpieChartData({
						labels: ['รูป', 'วิดีโอ'],
						datasets: [
							{
								data: [result.data.img, result.data.vdo],
								borderWidth: 1,
							},
						],
					});

					setLoad(false);
				})
				.catch((error) => console.log(error));
		})();
	}, []);

	const openLink = (id: string) => {
		window.open(`${BASE_URL.PROB}/view/${id}`, "_blank")
	}
	return (
		!load && (
			<Box
				as={Flex}
				className="section"
				w="100%"
				h="100%"
				justifyContent="center"
				p={'10px'}
				direction="column"
			>
				<Container>
					<br />
					<Flex
						gap={4}
						alignItems="center"
						justifyContent="center"
						direction={{ mdDown: 'column' }}
					>
						<TotalCard
							title="รูปวันนี้"
							amount={today.img}
							Icon={faImage}
						/>
						<TotalCard
							title="วิดีโอวันนี้"
							amount={today.vdo}
							Icon={faVideo}
						/>
						<TotalCard
							title="รวมวันนี้"
							amount={today.count}
							Icon={faPhotoVideo}
						/>
					</Flex>
					<br />
					<Flex
						gap={4}
						alignItems="center"
						justifyContent="center"
						direction={{ mdDown: 'column' }}
					>
						<Card.Root w="100%" h="300px">
							<Card.Body>
								<h2 style={{ textAlign: 'center' }}>
									กราฟสรุปรูปและวีดีโอวันนี้
								</h2>
								<Box h={'100%'}>
									<Bar
										data={barChartData}
										options={{ maintainAspectRatio: false }}
									/>
								</Box>
							</Card.Body>
						</Card.Root>
						<Card.Root w="100%" h="300px">
							<Card.Body>
								<h2 style={{ textAlign: 'center' }}>
									กราฟสรุปรูปและวีดีโอ
								</h2>
								<Box h={'100%'}>
									<Pie
										data={pieChartData}
										options={{ maintainAspectRatio: false }}
									/>
								</Box>
							</Card.Body>
						</Card.Root>
						<Box w="100%">
							<Grid
								templateRows="repeat(2, 1fr)"
								templateColumns="repeat(2, 1fr)"
								gap={4}
							>
								<GridItem colSpan={1}>
									<TotalCard
										title="รูปทั้งหมด"
										amount={allData.img}
										Icon={faImage}
									/>
								</GridItem>
								<GridItem colSpan={1}>
									<TotalCard
										title="วิดีโอทั้งหมด"
										amount={allData.vdo}
										Icon={faVideo}
									/>
								</GridItem>
								<GridItem colSpan={2}>
									<TotalCard
										title="รวมทั้งหมด"
										amount={allData.count}
										Icon={faPhotoVideo}
									/>
								</GridItem>
							</Grid>
						</Box>
					</Flex>
					<br />
					<Table.ScrollArea borderWidth="1px" className="table">
						<Table.Root size="sm" variant="line" w="100%">
							<Table.Header>
								<Table.Row>
									<Table.ColumnHeader textAlign="center">
										ที่
									</Table.ColumnHeader>
									<Table.ColumnHeader>
										ชื่อ
									</Table.ColumnHeader>
									<Table.ColumnHeader textAlign="center">
										วันที่อัพโหลด
									</Table.ColumnHeader>
									<Table.ColumnHeader textAlign="center">
										วันที่ลบ
									</Table.ColumnHeader>
									<Table.ColumnHeader
										w="200px"
										textAlign="center"
									>
										จัดการ
									</Table.ColumnHeader>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{allData.data.map((item, i) => (
									<Table.Row key={item.id}>
										<Table.Cell textAlign="center">
											{i+1}
										</Table.Cell>
										<Table.Cell>
											{item.name}
										</Table.Cell>
										<Table.Cell textAlign="center">{moment(item.created_at).format("DD/MM/YY")}</Table.Cell>
										<Table.Cell textAlign="center">{item.expired_at ? moment(item.expired_at).format("DD/MM/YY") : "-"}</Table.Cell>
										<Table.Cell>
											<Flex
												justifyContent="center"
												gap="10px"
											>
												<Button bg={'var(--primary)'} onClick={() => openLink(item.album)}>
													<FontAwesomeIcon
														icon={faExternalLinkAlt}
													/>
													<span>เปิด</span>
												</Button>
												<Button bg={'var(--danger)'} disabled>
													<FontAwesomeIcon
														icon={faTrashAlt}
													/>
													<span>ลบ</span>
												</Button>
											</Flex>
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Root>
					</Table.ScrollArea>
				</Container>
			</Box>
		)
	);
}
