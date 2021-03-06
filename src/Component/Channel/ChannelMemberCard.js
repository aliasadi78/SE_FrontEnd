import React, { Component } from "react";
import {makeStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {Close, Done} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

class ChannelMemberCard extends Component{
    handleDeleteMember = (event) => {

    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const classes = this.props.classes;

        return(
            <ListItem button divider dense >
                <ListItemAvatar>
                    <Avatar alt={this.props.name} src={this.props.imageSource} className={classes.memberAvatar}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText disableTypography primary={<Typography component={"h3"} variant={"body1"} align={"left"} gutterBottom className={classes.blueFontStyle} >{this.props.name}</Typography>}
                               />
                <IconButton
                    //style={{padding: '0px', color: '#3f407d'}}
                    onClick={this.handleDeleteMember}
                    // onMouseDown={this.handleMouseDownPassword}
                >
                    <Close style={{ fontSize: 35 }} />
                </IconButton>
                {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.channelNumberMessage}>{this.props.number}</Avatar>*/}
            </ListItem>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global':{
        '.MuiFormHelperText-root.Mui-error' : {
            fontFamily: 'IRANSansWeb',
        },
    },
    // rootDiv:{
    //     padding:theme.spacing(2),
    //     flexGrow: 1,
    // },
    memberAvatar:{
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    channelNumberMessage:{
        width: theme.spacing(4),
        height: theme.spacing(3),
    },
    blueFontStyle:{
        fontFamily: 'IRANSansWeb',
        color: '#3f407d',
    }
}));
export default (props) =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <ChannelMemberCard classes={classes} p={p} name={props.name} imageSource={props.imageSource} />
    )
}