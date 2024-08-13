import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Main } from '../../styled';

function NewsPage() {
  const [newsList, setNewsList] = useState([]); // Store the news articles
  const open = useSelector(state => state.drawer.open);
  const [opene, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://footballnewsapi.netlify.app/.netlify/functions/api/news/fourfourtwo/bundesliga',
        headers: {
          'x-rapidapi-key': '7ebd70b9cbmsh0423311ef741bbcp1b1cf5jsnc52abb998c76',
          'x-rapidapi-host': 'football-news-aggregator-live.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setNewsList(response.data); // Set the news articles in state
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews(); // Fetch news when component mounts
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleOpen} 
          startIcon={<PersonAddAltOutlinedIcon />}
          sx={{ borderRadius: 2 }}
        >
          Add new news
        </Button>
      </Box>

      <Dialog open={opene} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add new news</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Logo" type="file" fullWidth />
          <TextField autoFocus margin="dense" label="Title" type="text" fullWidth />
          <TextField margin="dense" label="Description" type="text" fullWidth multiline rows={4} />
          <TextField margin="dense" label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Main open={open}>
        <Grid container spacing={3}>
          {newsList.map((news, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4} md={3}>
                    <Box sx={{ position: 'relative', paddingTop: '60%', borderRadius: 2, overflow: 'hidden' }}>
                      <img
                        src={news.news_img || 'https://via.placeholder.com/150'} // Use placeholder if no image
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
                    <Box sx={{ mb: 1 }}>
                      {/* Add tags or any additional information if needed */}
                    </Box>
                    <Typography variant='caption' sx={{ display: 'block', mt: 1 }}>{news.short_desc}</Typography>
                    <Typography variant='caption' sx={{ display: 'block', mt: 1 }}>Source: <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a></Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Main>
    </Container>
  );
}

export default NewsPage;
