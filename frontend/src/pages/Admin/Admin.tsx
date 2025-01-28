import { Box, Button, Card, Container, Flex, Grid, GridItem, Table } from '@chakra-ui/react';
import React, { Component, useState } from 'react';

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
	return (
		<Box
			as={Flex}
			className="section"
			w="100%"
			h="auto"
			justifyContent="center"
			p={'10px'}
			direction="column"
		>
			<Container>
				<br />
				<Flex gap={4} alignItems="center" justifyContent="center">
					<TotalCard title="รูปวันนี้" amount={100} Icon={faImage} />
					<TotalCard
						title="วิดีโอวันนี้"
						amount={100}
						Icon={faVideo}
					/>
					<TotalCard
						title="รวมวันนี้"
						amount={100}
						Icon={faPhotoVideo}
					/>
				</Flex>
				<br />
				<Flex gap={4} alignItems="center" justifyContent="center">
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
									amount={100}
									Icon={faImage}
								/>
							</GridItem>
							<GridItem colSpan={1}>
								<TotalCard
									title="วิดีโอทั้งหมด"
									amount={100}
									Icon={faVideo}
								/>
							</GridItem>
							<GridItem colSpan={2}>
								<TotalCard
									title="รวมทั้งหมด"
									amount={100}
									Icon={faPhotoVideo}
								/>
							</GridItem>
						</Grid>
					</Box>
				</Flex>
				<br />
				<Table.Root size="sm" variant="line">
					<Table.Header>
						<Table.Row>
							<Table.ColumnHeader textAlign="center">ที่</Table.ColumnHeader>
							<Table.ColumnHeader>ชื่อ</Table.ColumnHeader>
							<Table.ColumnHeader>วันที่อัพโหลด</Table.ColumnHeader>
							<Table.ColumnHeader>วันที่ลบ</Table.ColumnHeader>
							<Table.ColumnHeader w="200px" textAlign="center">จัดการ</Table.ColumnHeader>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{/* {items.map((item) => (
							<Table.Row key={item.id}>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell>{item.category}</Table.Cell>
								<Table.Cell textAlign="end">
									{item.price}
								</Table.Cell>
							</Table.Row>
						))} */}
            <Table.Row>
              <Table.Cell textAlign="center">1</Table.Cell>
              <Table.Cell>afsdfasdfadsf.jpg</Table.Cell>
              <Table.Cell>1/1/25</Table.Cell>
              <Table.Cell>10/10/25</Table.Cell>
              <Table.Cell>
                <Flex justifyContent="center" gap="10px">
                  <Button bg={"var(--primary)"}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>เปิด</span>
                  </Button>
                  <Button bg={"var(--danger)"}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                    <span>ลบ</span>
                  </Button>
                </Flex>
              </Table.Cell>
            </Table.Row>

					</Table.Body>
				</Table.Root>
			</Container>
		</Box>
	);
}
