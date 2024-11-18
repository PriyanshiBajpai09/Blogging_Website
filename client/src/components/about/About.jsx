
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(
https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">BLOGGING WEBSITE</Typography>
                <Text variant="h5">Welcome to our Blogging Platform – a space where ideas, stories, and insights come to life. We aim to connect readers with diverse voices, covering topics from technology and lifestyle to personal growth and creativity. Whether you’re here to learn something new, share your passion, or simply be inspired, our platform offers a place for authentic content and meaningful conversations.
                    If you are interested, you can view some of my favorite projects here<br />

                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/PriyanshiBajpai09" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                
            </Wrapper>
        </Box>
    )
}

export default About;