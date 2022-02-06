import React, { useEffect } from "react";
import { Box, ChakraProvider, Grid, Heading, Spacer, useColorMode } from "@chakra-ui/react";

import Timetable from "./Timetable";

const SetDarkMode = () => {
	const { setColorMode } = useColorMode();

	useEffect(() => setColorMode('dark'));

	return <></>;
}

const App = () => {
	return <ChakraProvider>
		<Box pt='3' margin='0 auto' w='fit-content'>
			<SetDarkMode />
			<Heading fontSize='5xl' textAlign='center' p='5' pt='0'>Vlatko's school website</Heading>
			<Grid>
				<Box>
					<Heading fontSize='3xl'>Timetable:</Heading>
					<Spacer h='1.5' />
					<Timetable />
				</Box>
			</Grid>
		</Box>
	</ChakraProvider>
}

export default App;