import {
    Box,
    Card,
    Flex,
  } from "@chakra-ui/react";

  import { StatLabel, StatRoot, StatValueText } from "./ui/stat"
import IconBox from "./IconBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const TotalCard = ({
	title,
	amount,
	Icon
}: {
	title: string;
	amount: number;
	Icon: IconDefinition;
}) => {
	return (
		<Card.Root w={'100%'} h={'100%'}>
			<Card.Body
            p={'10px'}>
				<Flex
					flexDirection="row"
					align="center"
					justify="center"
					w="100%"
				>
					<StatRoot me="auto">
						<StatLabel
							fontSize="sm"
							color="gray.400"
							fontWeight="bold"
						>
							{title}
						</StatLabel>
						<Flex>
							<StatValueText fontSize="lg">
								{amount == 0 ? "0" : amount}
							</StatValueText>
							{/* <StatHelpText
								alignSelf="flex-end"
								justifySelf="flex-end"
								m="0px"
								color={percentage > 0 ? 'green.400' : 'red.400'}
								fontWeight="bold"
								ps="3px"
								fontSize="md"
							>
								{percentage > 0
									? `+${percentage}%`
									: `${percentage}%`}
							</StatHelpText> */}
						</Flex>
					</StatRoot>
                    
					<IconBox as={Box} h={'45px'} w={'45px'} bgColor="#4FD1C5" color="var(--base)">
						<FontAwesomeIcon icon={Icon} />
					</IconBox>
				</Flex>
			</Card.Body>
		</Card.Root>
	);
};
