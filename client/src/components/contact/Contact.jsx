
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAulbVW6uSk9OYLUbFGZ8-J3QKoJuy4Vx5w&s);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy! </Typography>    
                <Text variant="h5">
                    Reach out to me on Email: <br/>
                    priyanshi2004bajpai@gmail.com
              
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;