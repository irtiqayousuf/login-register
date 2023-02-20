import { Avatar, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    "&:before": {
      width: "40px",
      height: "40px",
      backgroundColor: theme.colors.primary,
      content: '""',
      borderRadius: "50%",
    },
  },
  decoratorText: {
    lineHeight: "40px",
    position: " absolute",
    left: "50px",
  },

  arrow: {
    lineHeight: " 50px",
    position: " absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },
  divider: {
    width: "64px",
    height: "4px",
    backgroundColor: theme.colors.primary,
  }, sectionHeadingCont: {
    padding: theme.spacing(1),
    color: theme.colors.base2,
  },
  sectionHeading: {
    color: theme.colors.base2,
    margin: theme.spacing(1, 0),
  }, AvatarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
    color:"black"
  },
  avatar: {
    backgroundColor: 'white',
    color: "black",
  },
  MediaText: {
    color: "black",
  },
    
}))

export const Decorator = ({ label, withIcon, Icon, styles }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator} style={styles}>
      <Typography component='span' className={classes.decoratorText}>
        {label}
      </Typography>
      {withIcon ? (
        <Typography component='span' className={classes.arrow}>
          {Icon}
        </Typography>
      ) : null}
    </Box>
  );
};

export const Divider = ({ style }) => {
  const classes = useStyles();
  return <div className={classes.divider} style={style}></div>;
};

export const RenderSectionHeading = ({
  smallText,
  heading,
  description,
  alignLeft,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.sectionHeadingCont}>
      {Decorator({
        label: smallText,
        withIcon: false,
        styles: alignLeft ? { width: "150px", margin: "10px auto" } : {},
      })}
      <Typography
        variant='h4'
        align={alignLeft ? "left" : "left"}
        className={classes.sectionHeading}>
        {heading}
      </Typography>
      {Divider({
        style: alignLeft ? { margin: "16px auto" } : { margin: "16px 0px" },
      })}
      <Typography
        variant='body1'
        component='h6'
        align={alignLeft ? "left" : "left"}
        className={classes.sectionDesc}>
        {description}
      </Typography>
    </Box>
  );
};
// () => () /// retun directly
// () => { return}

export const CardMedia = ({ label, Desc, Icon, key }) => {
  const classes = useStyles();
  return (
    <Grid container style={{ marginTop: "16px" }}>
      <Grid item xs={3} className={classes.AvatarCont}>
        <Avatar className={classes.avatar}>{Icon}</Avatar>
      </Grid>
      <Grid item xs={9} className={classes.MediaText}>
        <Typography variant='body1' componen='h6'>
          {label}
        </Typography>
        <Typography variant='caption'>{Desc}</Typography>
      </Grid>
    </Grid>
  );
};