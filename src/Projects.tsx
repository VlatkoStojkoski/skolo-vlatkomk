import React from 'react';
import { Badge, Box, Image, Link, Grid } from '@chakra-ui/react';

const Projects = () => {
	const projectIds = [{
		name: 'Галичка свадба',
		id: '1d1qFvBBRMwjq3QhbUi4YaxIs2RT4uftp',
		class: 'Music'
	}, {
		name: 'Cryptocurrency',
		id: '1CHFaA4HzOBFYt48PW-01kdNtajpdre5oldkqT-FPaEM',
		class: 'English'
	}, {
		name: 'Franchising',
		id: '16OVD_tDWHcCvn4eARvFTaPOsWXfVeWRLygre7See8Gc',
		class: 'English'
	}, {
		
		name: 'Охридска архепископија',
		id: '1GbLlBKRQO8K_zyNGNOGR_hdmQB3cq0jZXXkmm6YdV3s',
		class: 'History'
	}, {
		name: '#1 Македонски проект',
		id: '1S9Vs6Egaf_kLrESUAIMyrH3DmKtJ-HRA9X7FLQXVVDI',
		class: 'Macedonian'
	}];

	return <Grid w='100%' gap='3' templateColumns='repeat(auto-fit, minmax(300px, 1fr))'>
		{projectIds.map(({name: pName, id: pId, class: pClass}) => 
			<Link href={`https://docs.google.com/presentation/d/${pId}/edit?usp=sharing`}>
				<Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
					<Image w='100%' src={`https://lh3.google.com/u/0/d/${pId}`} />

					<Box p='6'>
						<Box display='flex' alignItems='baseline'>
							<Badge borderRadius='full' px='2' colorScheme='orange'>
								{pClass}
							</Badge>
						</Box>

						<Box
							mt='1'
							fontWeight='semibold'
							as='h4'
							lineHeight='tight'
							isTruncated
						>
							{pName}
						</Box>
					</Box>
				</Box>
			</Link>
		)}
	</Grid>;
};

export default Projects;
