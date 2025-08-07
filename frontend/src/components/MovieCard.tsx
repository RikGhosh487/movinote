import React from "react";
import {
    Box,
    Card,
    CardMedia,
    CardActionArea,
    Chip,
    Typography,
    useTheme,
} from "@mui/material";

import { Star } from "@mui/icons-material";

interface MovieCardProps {
    id: number;
    title: string;
    imageUrl: string;
    onClick: () => void;
    duration: number;
    rating: number;
    mpaaRating: string;
    slug: string;
    releaseYear: number;
}

const MovieCard = (props: React.PropsWithChildren<MovieCardProps>) => {
    const [raised, setRaised] = React.useState<boolean>(false);
    const [hovered, setHovered] = React.useState<boolean>(false);
    const theme = useTheme();

    return (
        <Card 
            sx={{
                width: 250,
                height: 375,
                margin: 1,
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            }}
            onMouseOver={() => {
                setRaised(true);
                setHovered(true);
            }}
            onMouseOut={() => {
                setRaised(false);
                setHovered(false);
            }}
            raised={raised}
            onClick={props.onClick}
        >
            <CardActionArea
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <CardMedia
                    component="img"
                    image={"https://image.tmdb.org/t/p/original" + props.imageUrl}
                    alt={props.title}
                    sx={{
                        height: "auto",
                        flexGrow: 1
                    }}
                />
                { /* Sliding Details Layer */ }
                <Box
                    sx={{
                        position: "absolute",
                        bottom: hovered ? 0 : "-100%",
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        transition: "bottom 0.3s ease-in-out",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-end",
                        padding: 2,
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                        {props.releaseYear} | {props.duration} minutes
                    </Typography>
                    {/* Star Rating */}
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
                        <Star sx={{ color: "gold", marginRight: 0.5 }} />
                        <Typography variant="body2">
                            {props.rating.toFixed(1)} / 10
                        </Typography>
                    </Box>
                    {/* MPAA Rating */}
                    <Chip
                        label={props.mpaaRating}
                        size="small"
                        sx={{
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.contrastText,
                            fontWeight: "bold",
                        }}
                    />
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard;