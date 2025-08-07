import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    // Stack,
    // AppBar,
    // Toolbar,
    // Link
} from "@mui/material";
import MovieCard from "../components/MovieCard";

// Movies API data
const data: any[] = []
// [
//     {
//         "duration": 127,
//         "id": 1,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/fjTU1Bgh3KJu4aatZil3sofR2zC.jpg",
//         "rating": 7.953,
//         "release_year": 1993,
//         "slug": "jurassic-park-1993",
//         "title": "Jurassic Park"
//     },
//     {
//         "duration": 129,
//         "id": 2,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg",
//         "rating": 6.548,
//         "release_year": 1997,
//         "slug": "the-lost-world-jurassic-park-1997",
//         "title": "The Lost World: Jurassic Park"
//     },
//     {
//         "duration": 92,
//         "id": 3,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/oQXj4NUfS3r3gHXtDOzcJgj1lLc.jpg",
//         "rating": 6.149,
//         "release_year": 2001,
//         "slug": "jurassic-park-iii-2001",
//         "title": "Jurassic Park III"
//     },
//     {
//         "duration": 124,
//         "id": 4,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
//         "rating": 6.695,
//         "release_year": 2015,
//         "slug": "jurassic-world-2015",
//         "title": "Jurassic World"
//     },
//     {
//         "duration": 129,
//         "id": 5,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/270MrJNqJovumHXGE6SSt0zwUIF.jpg",
//         "rating": 6.538,
//         "release_year": 2018,
//         "slug": "jurassic-world-fallen-kingdom-2018",
//         "title": "Jurassic World: Fallen Kingdom"
//     },
//     {
//         "duration": 147,
//         "id": 6,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/jbAvCACjLf1ZG0unB2tdmx5HAf1.jpg",
//         "rating": 6.663,
//         "release_year": 2022,
//         "slug": "jurassic-world-dominion-2022",
//         "title": "Jurassic World Dominion"
//     },
//     {
//         "duration": 140,
//         "id": 7,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
//         "rating": 7.712,
//         "release_year": 2005,
//         "slug": "batman-begins-2005",
//         "title": "Batman Begins"
//     },
//     {
//         "duration": 152,
//         "id": 8,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//         "rating": 8.519,
//         "release_year": 2008,
//         "slug": "the-dark-knight-2008",
//         "title": "The Dark Knight"
//     },
//     {
//         "duration": 165,
//         "id": 9,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
//         "rating": 7.785,
//         "release_year": 2012,
//         "slug": "the-dark-knight-rises-2012",
//         "title": "The Dark Knight Rises"
//     },
//     {
//         "duration": 110,
//         "id": 10,
//         "mpaa_rating": "PG-13",
//         "poster_url": "/l5uxY5m5OInWpcExIpKG6AR3rgL.jpg",
//         "rating": 7.0,
//         "release_year": 1996,
//         "slug": "mission-impossible-1996",
//         "title": "Mission: Impossible"
//     }
// ]

function Dashboard() {
    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {data.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        imageUrl={movie.poster_url}
                        onClick={() => console.log(`Clicked on ${movie.title}`)}
                        duration={movie.duration}
                        rating={movie.rating}
                        mpaaRating={movie.mpaa_rating}
                        slug={movie.slug}
                        releaseYear={movie.release_year}
                    />
                ))}
            </Container>
        </React.Fragment>
    );
}

export default Dashboard;