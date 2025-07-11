import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Box} from "@mui/material";

export default function portfolioCardSubWidgets() {
    return (
        <Box display="flex" flexDirection="row" gap="6rem" >
        <Card sx={{ maxWidth: 345 , bgcolor:"#d6d6d6ff" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Project 1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#454545ff"}}>
                        Project 1
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
            <Card sx={{ maxWidth: 345 , bgcolor:"#d6d6d6ff" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="Project 1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{color:"#454545ff"}}>
                            Project 2
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 , bgcolor:"#d6d6d6ff" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="Project 1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{color:"#454545ff"}}>
                            Project 3
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}