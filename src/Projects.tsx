import React from 'react';
import { Badge, Box, Image, Link, Grid } from '@chakra-ui/react';

const Projects = () => {
	const projectIds = ['1GbLlBKRQO8K_zyNGNOGR_hdmQB3cq0jZXXkmm6YdV3s', '1S9Vs6Egaf_kLrESUAIMyrH3DmKtJ-HRA9X7FLQXVVDI'];

	return <Grid>

	<Link href={`https://docs.google.com/presentation/d/${projectIds[0]}/edit?usp=sharing`}>
		<Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Image w='100%' src={`https://lh3.google.com/u/0/d/${projectIds[0]}=w208-h117-iv7`} />

			<Box p='6'>
				<Box display='flex' alignItems='baseline'>
					<Badge borderRadius='full' px='2' colorScheme='orange'>
						History
					</Badge>
				</Box>

				<Box
					mt='1'
					fontWeight='semibold'
					as='h4'
					lineHeight='tight'
					isTruncated
				>
					Охридска Архепископија
				</Box>
			</Box>
		</Box>
	</Link>
	<Link href={`https://docs.google.com/presentation/d/${projectIds[1]}/edit?usp=sharing`}>
		<Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Image w='100%' src={`https://lh3.google.com/u/0/d/${projectIds[1]}=w208-h117-iv7`} />

			<Box p='6'>
				<Box display='flex' alignItems='baseline'>
					<Badge borderRadius='full' px='2' colorScheme='orange'>
						Macedonian
					</Badge>
				</Box>

				<Box
					mt='1'
					fontWeight='semibold'
					as='h4'
					lineHeight='tight'
					isTruncated
				>
					Makedonski proekt
				</Box>
			</Box>
		</Box>
	</Link>
	</Grid>
		;
};

export default Projects;
