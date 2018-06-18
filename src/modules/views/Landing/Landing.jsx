import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import './Landing.scss';
import Collapse from '../../core/transitions/Collapse';
import Slide from '../../core/transitions/Slide';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    width: '50vw'
  }
});

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(){
    this.setState({
      open: false
    });
  }

  handleClick () {
    this.setState({
      open: true
    });
  }

  render() {
    const {classes} = this.props;
    const {open} = this.state;

    return (
      <div className={`landingContainer ${classes.root}`}>
        <Paper className={classes.paper} elevation={4}>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
              OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="display1" gutterBottom>
          Material-UI
          </Typography>
          <Typography variant="subheading" gutterBottom>
          example project
          </Typography>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Super Secret Password
          </Button>
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <Collapse/>
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <Slide />
        </Paper>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);


