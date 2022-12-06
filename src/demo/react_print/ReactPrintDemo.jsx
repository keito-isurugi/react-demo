import React, {useRef} from 'react'
import { Button, Box } from "@chakra-ui/react";
import ReactToPrint from "react-to-print";
export const ReactPrintDemo = () => {
	const componentRef = useRef();

	return (
		<>
			<ReactToPrint
				trigger={() => (
					<Button size="small" color="primary">
						印刷
					</Button>
				)}
				content={() => componentRef.current}
			/>
			<Box 
				ref={componentRef} 
				bg="blue"
				sx={{
					'@media print': {
						bg: 'red',
					},
				}}
			>print</Box>
		</>
	)
}