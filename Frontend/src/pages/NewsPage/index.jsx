import { Box, Container, Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Main } from '../../styled';

const NEWS_SOURCES = [
  { name: 'Latest News', url: 'news/90mins' },
  { name: 'OneFootball', url: 'news/onefootball' },
  { name: 'ESPN', url: 'news/espn' },
  { name: 'La Liga', url: 'news/fourfourtwo/laliga' },
  { name: 'EPL', url: 'news/fourfourtwo/epl' },
  { name: 'Bundesliga', url: 'news/fourfourtwo/bundesliga' },
  { name: 'UCL', url: 'news/fourfourtwo/ucl' },
];

function NewsPage() {
  const [newsList, setNewsList] = useState({});
  const [currentSource, setCurrentSource] = useState('Latest News');
  const open = useSelector(state => state.drawer.open);

  const fetchNews = useCallback(async (source) => {
    const options = {
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://footballnewsapi.netlify.app/.netlify/functions/api/${source}`,
      headers: {
        'x-rapidapi-key': '7ebd70b9cbmsh0423311ef741bbcp1b1cf5jsnc52abb998c76',
        'x-rapidapi-host': 'football-news-aggregator-live.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

  useEffect(() => {
    const fetchAllNews = async () => {
      const today = new Date().toDateString();
      const storedNews = localStorage.getItem('footballNews');
      const storedDate = localStorage.getItem('footballNewsDate');

      if (storedNews && storedDate === today) {
        setNewsList(JSON.parse(storedNews));
      } else {
        const newsPromises = NEWS_SOURCES.map(source => 
          fetchNews(source.url).then(data => ({ [source.name]: data }))
        );
        const newsResults = await Promise.all(newsPromises);
        const combinedNews = Object.assign({}, ...newsResults);
        
        setNewsList(combinedNews);
        localStorage.setItem('footballNews', JSON.stringify(combinedNews));
        localStorage.setItem('footballNewsDate', today);
      }
    };

    fetchAllNews();
  }, [fetchNews]);

  const handleSourceChange = (event, newSource) => {
    if (newSource !== null) {
      setCurrentSource(newSource);
    }
  };

  const currentNewsList = useMemo(() => newsList[currentSource] || [], [newsList, currentSource]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      

      <Main open={open}>
      <Box sx={{ mt: 6, mb: 3 }}>
        <ToggleButtonGroup
          value={currentSource}
          exclusive
          onChange={handleSourceChange}
          aria-label="news source"
        >
          {NEWS_SOURCES.map((source) => (
            <ToggleButton key={source.name} value={source.name} aria-label={source.name}>
              {source.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
        <Grid container spacing={3}>
          {currentNewsList.map((news, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                <a href={news.url} target='_blank'>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4} md={3}>
                    <Box sx={{ position: 'relative', paddingTop: '60%', borderRadius: 2, overflow: 'hidden' }}>
                      <img
                        src={news.news_img || 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/pjimage-2020-04-15t081910-1586918957.jpg'}
                        alt={news.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                      {news.title}
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 2 }}>{news.short_desc}</Typography>
                    <Typography variant='body2'>
                      Source: <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </Typography>
                  </Grid>
                </Grid>
                </a>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Main>
    </Container>
  );
}

export default NewsPage;