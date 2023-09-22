import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Container, Box, CardContent } from "@mui/material";

const View = () => {
  return (
    <Container sx={{ backgroundColor: "red" }}>
      <Box>
        <Card>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              note
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );

  //   return <div>see</div>;
};

export default View;
