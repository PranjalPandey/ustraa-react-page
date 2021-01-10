import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';
import {
  slice, concat, 
} from 'lodash';

const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft:'2%',
      marginRight:'2%',
        justifyContent:'space-around',
        flexDirection:'column', 
    },
    paper: {
        display:'flex',
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    heading:{
      display:'inline',
      justifyContent:'space-around',
    },
    button: {
        borderRadius: 3,
        backgroundColor: "#44dd6e",
        fontSize: "auto",
        color: 'white',
    },
    icon:{
      fontSize:'15px',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
      },
  }));

  
  //Loading Products under limit
    const Products = ({ products }) => {
        const classes = useStyles();
        const [showMore,setShowMore] = useState(true);
        const [list,setList] = useState(slice(products, 0, 3));
  const [index,setIndex] = useState(3);

      //Loading more Data
      const loadMore = () =>{
        const newIndex = products.length;
        const newShowMore = newIndex <=(products.length-1);
        const newList = concat(list, slice(products, index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
      }


      return (
        <div className={classes.root}>
        
        {list.map((product) => (
          <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid >
              <img  src={product.image_urls.x120} alt='Product_inage'/>
            </Grid>
            <Grid>
            <Typography className={classes.heading}><b>{product.name}</b></Typography>
            
              <Typography >
                {product.weight?
                <p disabled color="textSecondary">({product.weight} {product.weight_unit})</p>:
                <p> </p>}
                </Typography>
                <Typography>
                {product.final_price<product.price?
                <p><b><span>&#8377;</span>{product.final_price}</b>  <s>{product.price}</s></p>:
                <p><b><span>&#8377;</span>{product.final_price}</b></p>}
                </Typography>
              <Typography>{product.is_in_stock?<Button className={classes.button} variant="contained"  >Add to cart</Button>:<Button variant="contained" disabled>Out of Stock</Button>}</Typography>
            </Grid>
            
          </Grid>
          <Grid > 
            <IconButton aria-label="rating" className={classes.icon}>{4.4}
        <StarIcon />
      </IconButton>
            </Grid>
        </Paper>
        ))}
        {showMore && <center><Button variant="outlined" color="primary" size="large" align="center" onClick={loadMore}>
        Load More
      </Button></center>}
     
    </div>
      )
    };

    export default Products
