import React, { useEffect } from "react";
import { Box, ChakraProvider, Grid, Heading, Spacer, useColorMode } from "@chakra-ui/react";

import Timetable from "./Timetable";
import Projects from "./Projects";

const SetDarkMode = () => {
	const { setColorMode } = useColorMode();

	useEffect(() => setColorMode('dark'));

	return <></>;
}

const App = () => {
	return <ChakraProvider>
		<Box px='3' py='10' margin='0 auto' w='fit-content'>
			<SetDarkMode />
			<Heading fontSize='5xl' textAlign='center' p='5' pt='0'>📚 Vlatko's school website 📚</Heading>
			<Spacer h='5' />
			<Grid rowGap='5'>
				<Box>
					<Heading fontSize='3xl'>Timetable:</Heading>
					<Spacer h='3' />
					<Timetable />
				</Box>
				<Box>
					<Heading fontSize='3xl'>Projects:</Heading>
					<Spacer h='3' />
					<Projects />
				</Box>
			</Grid>
		</Box>
	</ChakraProvider>
}

export default App;