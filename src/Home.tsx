import { Box, Typography } from "@mui/material";

function Home() {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			mt={3}
		>
			<Typography
				textAlign="center"
				color="primary.main"
				gutterBottom
				sx={{ typography: { xs: "h4", md: "h2" } }}
			>
				Star Wars
			</Typography>
		</Box>
	);
}

export default Home;
