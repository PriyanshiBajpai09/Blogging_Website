import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const Comment = ({ comment, setToggle }) => {

    
    const removeComment = async () => {
        try {
            const response = await API.deleteComment(comment._id);
            if (response.isSuccess) {
                setToggle(prev => !prev);  // Toggle to re-render comments after deletion
            } else {
                console.error('Error deleting comment:', response.message);
            }
        } catch (error) {
            console.error('Error occurred while deleting comment:', error);
        }
    };

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;