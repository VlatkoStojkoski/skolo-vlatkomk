import React, { useEffect } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, Text, Spacer } from '@chakra-ui/react';
import useGetTimetable from './useGetTimetable';
import useCalculateCurrent from './useCalculateCurrent';

const Timetable = () => {
	const [data, loaded, error] = useGetTimetable();
	const [indeces] = useCalculateCurrent();

	useEffect(() => {
		if (error) return console.error(error);
		if (!loaded) return;
		console.log(data);
	}, [data, loaded, error]);

	return <Table size='sm' maxW='700px'>
		<Thead>
			<Tr>
				<Th>#</Th>
				<Th>1</Th>
				<Th>2</Th>
				<Th>3</Th>
				<Th>4</Th>
				<Th>5</Th>
				<Th>6</Th>
				<Th>7</Th>
			</Tr>
		</Thead>
		<Tbody>
			{
				data?.map((day, dayI) =>
					<Tr key={dayI} bg={indeces?.[0] === dayI ? 'blackAlpha.500' : ''}>
						<Td>{day.name.slice(0, 3).toUpperCase()}</Td>
						{
							day.classes.map(({ name, prof }, classI) =>
								<Td key={classI} bg={indeces?.[0] === dayI && indeces?.[1] === classI ? 'green.500' : ''}>
									{`${name.slice(0, 3)}. ${name.split(' ').slice(1).map(word => word[0].toUpperCase() + '. ').join('')}`}
									<Spacer h='1.5' />
									<Text fontStyle='italic' lineHeight='1' fontSize='xs' dir='rtl'>{prof.match(/[A-Z]/g)?.join('')}</Text>
								</Td >
							)
						}
					</Tr>)
			}
		</Tbody>
	</Table>;
};

export default Timetable;
