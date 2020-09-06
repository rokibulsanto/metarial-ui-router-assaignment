import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardStyle from './PostCard.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const PostCard = (props) => {
    const {id,title,body} = props.post;
    const classes = useStyles();
    const singleCardStyle ={
      border:'1px solid goldenrod',
      marginLeft:'500px',
      borderRadius:'14px',
      boxShadow:'5px 7px 9px gray',
      backgroundColor:'wheat'
    }
    return (
        <div className="cardStyle">
            <Card style={singleCardStyle} className={classes.root}>
      <CardActionArea>
      
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            <h4>UserId: {id} </h4>
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
             <h3>{title}</h3>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h5>{body}</h5>
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
    
       <Link to={`/post/${id}`}><Button  variant="contained" color="primary">See post</Button></Link>
         
        
      </CardActions>
    </Card>
        </div>
    );
};

export default PostCard;