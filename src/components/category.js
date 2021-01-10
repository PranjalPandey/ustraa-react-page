import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


//Styles for Category list
const useStyles = makeStyles((theme) => ({
  root: {    
    display:'flex',
    flexGrow: 1,
      marginTop:10,
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'space-around',
    
  },
  start:{

    backgroundColor:'transparent',
    
  },
  gridList: {
      
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    spacing: 2,
    
  },
  title: {
    
    color: 'white',
    
  },
  titleBar: {
    height:'80%',
    alignContent:'center',
    background:
      'transparent',
  },
  more: {
    width: '200px',
    height: '50px',
    marginTop: '0px',
    fontSize:'10px',
  }
}));


export default function Category({ categories }) {
  const classes = useStyles();
  
  return (
    <Grid className={classes.root}>
      <GridList className={classes.gridList} cols={2.5} >
      <Button variant="outlined" color="primary" size="large" align="center" className={classes.more}>
        View More
      </Button>
        {categories.map((category) => (
          
          <GridListTile key={category.category_image} >
            <img  className={classes.img} srcSet={category.category_image} src={category.category_image} alt={category.category_name} />
            <GridListTileBar
              title={category.category_name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
          
        ))}
      <Button variant="outlined" color="primary" size="large" align="center" className={classes.more}>
        View More
      </Button>
      </GridList>
      </Grid>
   
  );
}