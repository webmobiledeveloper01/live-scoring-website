import React from 'react';
import { Grid, Typography, Container } from "@mui/material";

function Teams() {
    return (
        <Container className="favourite-item">
            <Grid container spacing={2} justifyContent="center" sx={{ margin: "10px 0" }}>
                {[
                    "https://www.livescore.com/ls-web-assets/images/cross_app/roma-17e4658d0167a4c5364d5c46567b4b26.webp",
                    "https://www.livescore.com/ls-web-assets/images/cross_app/norwich-000850c406869927899512b03f73011c.webp",
                    "https://www.livescore.com/ls-web-assets/images/cross_app/napoli-e38f842b0fb88a89c9ef4a4535b5510a.webp",
                    "https://www.livescore.com/ls-web-assets/images/cross_app/man_city-8dfa0397d2bbfdc5bf20c8f60c107123.webp",
                    "https://www.livescore.com/ls-web-assets/images/cross_app/arsenal-df131c6115d1faf5c916f1ff1c5ee35d.webp",
                    "https://www.livescore.com/ls-web-assets/images/cross_app/tottenham-71af4ec67ca8e70ebd4aa23c5ee409c8.webp"
                ].map((src, index) => (
                    <Grid item xs={4} sm={4} md={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={src} alt="" style={{ width: "60px", height: "60px" }} />
                    </Grid>
                ))}
            </Grid>
            <div className="text-center">
                <Typography variant="h5">
                    Never miss a moment
                </Typography>
                <Typography variant="subtitle1">
                    Get instantly notified about news, line-ups and scores from your favourite teams by using the LiveScore app
                </Typography>
            </div>
        </Container>
    );
}

export default Teams;