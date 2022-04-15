import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Main() {
  return (
    <Stack>
      <Card style={{backgroundColor: 'rgb(38, 55, 63)'}}>
        <CardActionArea href="/outdoor">
          <CardContent>
            <Typography color="white" gutterBottom variant="h5" component="div" textAlign="center">
              Outdoor Sports
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card style={{backgroundColor: 'rgb(38, 55, 63)'}}>
        <CardActionArea href="/commute">
          <CardContent>
            <Typography color='white' gutterBottom variant="h5" component="div" textAlign="center">
              Commute
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card style={{backgroundColor: 'rgb(38, 55, 63)'}}>
        <CardActionArea href="/beach">
          <CardContent>
            <Typography color='white' gutterBottom variant="h5" component="div" textAlign="center">
              Beach
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
}