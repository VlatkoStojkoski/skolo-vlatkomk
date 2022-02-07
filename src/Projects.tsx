import React from 'react';
import { Badge, Box, Image, Link } from '@chakra-ui/react';

const Projects = () => {
	const projectId = '1GbLlBKRQO8K_zyNGNOGR_hdmQB3cq0jZXXkmm6YdV3s';

	return <Link href={`https://docs.google.com/presentation/d/${projectId}/edit?usp=sharing`}>
		<Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Image w='100%' src={`https://lh3.google.com/u/0/d/${projectId}=w208-h117-iv7`} />

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
		;
};

export default Projects;
