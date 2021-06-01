import React, { Component } from "react";
import backgroundChannel from "../../Resource/backgroundChannel.jpg";
import DragAndDrop from "../Channel/DragAndDrop";
import {makeStyles} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import MuiMenuItem from "@material-ui/core/MenuItem/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Send} from "@material-ui/icons";
import {AssignmentSharp} from "@material-ui/icons";
import axios from "axios";
import serverURL from "../../RequestConfig/serverURL";
import TokenConfig from "../../RequestConfig/TokenConfig";
import ScrollArea from  'react-scrollbar';
import LoadingOverlay from 'react-loading-overlay';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileUpload} from "@fortawesome/free-solid-svg-icons";
import ErrorDialog from "../../RequestConfig/ErrorDialog";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

const MenuItem = withStyles({
    root: {
        justifyContent: "flex-end"
    }
})(MuiMenuItem);

class DirectMessages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mouseX: null,
            mouseY: null,
            isTextSelected:false,
            editing:false,
            //needEndMessages:false,
            loading:true,
            //role:this.props.role,
            textOptions:[],
            fileOptions:[],
            enableDragAndDrop:true,
            setErrorDialog:false,
            DirectMessagesArray:[],
        };
        // console.log(this.state.role);
        this.myRef = [];
        this.initialization();
    }
    //this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    initialization = () => {
        this.state.DirectMessagesArray.push({
            message:"salam chetori khoobi",
            file:"",
            Owner:"riasati",
        });
        this.state.DirectMessagesArray.push({
            message:"",
            file:"",//"https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg",
            Owner:"riasati",
        });
        this.state.DirectMessagesArray.push({
            message:"سلام نه خوب نيستم",
            file:"",
            Owner:"hasan",
        });
        this.setState({});



        // axios.get(serverURL() + "channel-message/" + this.props.channelId + "/?query=" + "&page=" + 1,TokenConfig())
        //     .then(result => {
        //         console.log(result);
        //         // this.messageCount = result.data.count;
        //         //this.previousLink = result.data.previous;
        //         this.nextLink = result.data.next;
        //         this.newMessagesList = result.data.results;
        //         this.newMessagesList = [...this.newMessagesList].reverse();
        //         this.newMessageFile = this.newMessagesList.map((value,index) => {
        //             if (value?.message_type === "t") {
        //                 return <Typography
        //                     key={value?.id}
        //                     variant={"body1"}
        //                 >{value?.text}</Typography>
        //             } else if (value?.message_type === "i") {
        //                 return <img key={value?.id} src={value?.message_file}
        //                             height={"100%"} width={"100%"}/>
        //             } else if (value?.message_type === "a") {
        //                 return <audio key={value?.id} src={value?.message_file} controls
        //                               style={{
        //                                   height: "100%",
        //                                   width: "100%"
        //                               }}/>
        //             } else if (value?.message_type === "v") {
        //                 return <video key={value?.id} src={value?.message_file}
        //                               height={"100%"} width={"100%"}
        //                               controls/>
        //             }
        //         });
        //         this.state.needEndMessages = true;
        //         this.setState({loading:false});
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({loading:false});
        //         this.ErrorDialogText = error.response.data?.error;
        //         this.setState({setErrorDialog:true});
        //     })


    };
    getSocketNameFromUsernames = (username1,username2) => {
        const array = [username1,username2].sort((a, b) => a.localeCompare(b));
        const str = array[0] + "-" + array[1];
        return str;
    }
    handleDrop = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (!files[i].name) return;
            //console.log(files[i].type);
            let uri = URL.createObjectURL(files[i]);
            this.state.DirectMessagesArray.push({
                message:"",
                file:uri,
                Owner:this.username
            })
            // const formData = new FormData();
            // formData.append(
            //     "message_file",
            //     files[i]
            // );
            // this.setState({loading:true});
            // if (files[i].type.split("/")[0] === "audio"){
            //     formData.append(
            //         "message_type",
            //         "a"
            //     );
            //     axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
            //         .then(result => {
            //             //console.log(result);
            //             this.newMessageFile.push(
            //                 <audio key={result.data.id} src={uri} controls style={{height:"100%",width:"100%"}} />
            //             );
            //             this.setState({loading:false});
            //         })
            //         .catch(error =>{
            //             console.log(error);
            //             this.setState({loading:false});
            //             this.ErrorDialogText = error.response.data?.error;
            //             this.setState({setErrorDialog:true});
            //         });
            // }
            // else if (files[i].type.split("/")[0] === "image"){
            //     formData.append(
            //         "message_type",
            //         "i"
            //     );
            //     axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
            //         .then(result => {
            //             //console.log(result);
            //             this.newMessageFile.push(
            //                 //style={{maxHeight:"500px"}}
            //                 <img key={result.data.id} src={uri} height={"100%"} width={"100%"} />
            //             );
            //             this.setState({loading:false});
            //         })
            //         .catch(error =>{
            //             console.log(error);
            //             this.setState({loading:false});
            //             this.ErrorDialogText = error.response.data?.error;
            //             this.setState({setErrorDialog:true});
            //         });
            // }
            // else if (files[i].type.split("/")[0] === "video"){
            //     formData.append(
            //         "message_type",
            //         "v"
            //     );
            //     axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
            //         .then(result => {
            //             //console.log(result);
            //             this.newMessageFile.push(
            //                 <video key={result.data.id} src={uri} height={"100%"} width={"100%"} controls />
            //             );
            //             this.setState({loading:false});
            //         })
            //         .catch(error =>{
            //             console.log(error);
            //             this.setState({loading:false});
            //             this.ErrorDialogText = error.response.data?.error;
            //             this.setState({setErrorDialog:true});
            //         });
            // }
            // else if (files[i].type.split("/")[0] === "application" || files[i].type.split("/")[0] === "text"){
            //     formData.append(
            //         "message_type",
            //         "t"
            //     );
            //     axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
            //         .then(result => {
            //             //console.log(result);
            //             this.newMessageFile.push(
            //                 <div key={result.data.id} aria-label={uri}>
            //                     <IconButton disabled
            //                                 style={{padding: '0px', color: '#3f407d',display: "block", margin: "auto",}}
            //                     >
            //                         <AssignmentSharp style={{ fontSize: 35 }} />
            //                     </IconButton>
            //                     <Typography variant={"body1"} dir={"ltr"} className={this.classes.blueFontStyle}>{files[i].name}</Typography>
            //                 </div>
            //             );
            //             this.setState({loading:false});
            //         })
            //         .catch(error =>{
            //             console.log(error);
            //             this.setState({loading:false});
            //             this.ErrorDialogText = error.response.data?.error;
            //             this.setState({setErrorDialog:true});
            //         });
            //
            // }
        }
        this.setState({});
    };
    handleGetNewMessages = (value) => {
        if (value.topPosition === 0){
            if (this.counter === 0){
                this.counter++;
                // console.log("one time");
            }
            else {
                if (this.counter === 1){
                    this.counter++;
                    // console.log("two time");
                    this.setState({loading:true});
                    // axios.get(this.nextLink,TokenConfig())
                    //     .then(result => {
                    //         // console.log(result);
                    //         // this.messageCount = result.data.count;
                    //         // this.previousLink = result.data.previous;
                    //         this.nextLink = result.data.next;
                    //         if (this.nextLink === null){
                    //             this.counter = -1;
                    //         }
                    //         let newMessagesList2 = result.data.results;
                    //         this.newMessagesList = [...newMessagesList2].reverse();
                    //         let newMessageFile2 = this.newMessagesList.map((value,index) => {
                    //             if (value?.message_type === "t") {
                    //                 return <Typography
                    //                     key={value?.id}
                    //                     variant={"body1"}
                    //                 >{value?.text}</Typography>
                    //             } else if (value?.message_type === "i") {
                    //                 return <img key={value?.id} src={value?.message_file}
                    //                             height={"100%"} width={"100%"}/>
                    //             } else if (value?.message_type === "a") {
                    //                 return <audio key={value?.id} src={value?.message_file} controls
                    //                               style={{
                    //                                   height: "100%",
                    //                                   width: "100%"
                    //                               }}/>
                    //             } else if (value?.message_type === "v") {
                    //                 return <video key={value?.id} src={value?.message_file}
                    //                               height={"100%"} width={"100%"}
                    //                               controls/>
                    //             }
                    //         });
                    //         this.newMessageFile = newMessageFile2.concat(this.newMessageFile);
                    //         if (this.counter !== -1){
                    //             this.counter = 0;
                    //         }
                    //         //   this.messagesEnd2.scrollArea.refresh();
                    //         this.setState({loading:false});
                    //     })
                    //     .catch(error => {
                    //         console.log(error);
                    //         if (this.counter !== -1){
                    //             this.counter = 0;
                    //         }
                    //         this.setState({loading:false});
                    //         // this.ErrorDialogText = error?.response?.data?.error;
                    //         // this.setState({setErrorDialog:true});
                    //     })
                }
            }
        }
    };
    handleTextOptions = async (event,index) => {
        if (index === 0)
        {
            // console.log("here i have to copy");
            await this.copyToClipboard(event);
            this.indexSelected = -1;
        }
        if (index === 1)
        {
            // console.log("here i have to edit");
            this.state.editing = true;
            this.messageText = this.state.DirectMessagesArray[this.indexSelected].message;
            this.setState({});
        }
        if (index === 2)
        {
            // console.log("here i have to delete");
            this.state.DirectMessagesArray.splice(this.indexSelected, 1);
            this.indexSelected = -1;
            this.setState({});
            // axios.delete(serverURL() + "channel-message/" + this.props.channelId + "/" + this.newMessageFile[this.indexSelected].key +"/",TokenConfig())
            //     .then(result => {
            //         //console.log(result);
            //         this.newMessageFile.splice(this.indexSelected, 1);
            //         this.indexSelected = -1;
            //         this.setState({});
            //     })
            //     .catch(error =>{
            //         console.log(error);
            //         this.indexSelected = -1;
            //         this.ErrorDialogText = error.response.data?.error;
            //         this.setState({setErrorDialog:true});
            //     });
            //
            // this.setState({});
        }
        this.setState({mouseX: null, mouseY: null,})
    };
    handleFileOptions = (event,index) => {
        if (index === 0){
            ///console.log("here i have to download");
            // if (typeof this.newMessageFile[this.indexSelected].props.src === "undefined"){
            //     this.link = this.newMessageFile[this.indexSelected].props["aria-label"];
            // }
            // else{
            let link = this.state.DirectMessagesArray[this.indexSelected]?.file;
            // }
             window.open(link, "_blank",);

        }
        else if (index === 1){
            //console.log("here i have to delete");
            this.state.DirectMessagesArray.splice(this.indexSelected, 1);
            this.indexSelected = -1;
            this.setState({});
            // axios.delete(serverURL() + "channel-message/" + this.props.channelId + "/" + this.newMessageFile[this.indexSelected].key +"/",TokenConfig())
            //     .then(result => {
            //         console.log(result);
            //         this.newMessageFile.splice(this.indexSelected, 1);
            //         this.indexSelected = -1;
            //         this.setState({});
            //     })
            //     .catch(error =>{
            //         console.log(error);
            //         this.indexSelected = -1;
            //         this.ErrorDialogText = error.response.data?.error;
            //         this.setState({setErrorDialog:true});
            //     });
            //
            // this.setState({});
        }
        this.setState({mouseX: null, mouseY: null,})
    };
    handleTextFieldChange = (event) => {
        this.messageText = event.target.value;
        this.setState({})
    };
    handleSendIcon = (event) => {
        if (this.state.editing){
            // const formData = new FormData();
            // formData.append(
            //     "text",
            //     this.messageText
            // );
            // formData.append(
            //     "message_type",
            //     "t"
            // );
            let text = this.messageText;
            this.state.DirectMessagesArray[this.indexSelected].message = text;
            this.indexSelected = -1;
            //this.setState({});

            // axios.put(serverURL() + "channel-message/" + this.props.channelId + "/" + this.newMessageFile[this.indexSelected].key + "/",formData,TokenConfig())
            //     .then(result => {
            //         //console.log(result);
            //         const newElement = <Typography key={result.data.id} variant={"body1"}>{text}</Typography>;
            //         this.newMessageFile.splice(this.indexSelected, 1, newElement);
            //         this.setState({});
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         this.ErrorDialogText = error.response.data?.error;
            //         this.setState({setErrorDialog:true});
            //     });
            this.state.editing = false;
        }
        else{
            // const formData = new FormData();
            // formData.append(
            //     "text",
            //     this.messageText
            // );
            // formData.append(
            //     "message_type",
            //     "t"
            // );
            let text = this.messageText;
            this.state.DirectMessagesArray.push({message:text,file:"",Owner:this.username});
            // axios.post(serverURL() + "channel-message/" +this.props.channelId + "/",formData,TokenConfig())
            //     .then(result => {
            //         // console.log(result);
            //         this.newMessageFile.push(
            //             <Typography key={result.data.id} variant={"body1"} >{text}</Typography>
            //         );
            //         this.state.needEndMessages = true;
            //         this.setState({});
            //     })
            //     .catch(error =>{
            //         console.log(error);
            //         this.ErrorDialogText = error.response.data?.error;
            //         this.setState({setErrorDialog:true});
            //     });
        }
        this.messageText = "";
        this.setState({});
    };
    handleRightClick = (event,isText,index,isMyObject) => {
        event.preventDefault();
        if (isMyObject){
            this.state.textOptions = ['رونوشت','ویرایش','حذف'];
            this.state.fileOptions = ['دانلود','حذف'];
        }
        else{
            this.state.textOptions = ['رونوشت'];
            this.state.fileOptions = ['دانلود'];
        }

        this.setState({mouseX:event.clientX,mouseY:event.clientY});
        isText ? this.setState({isTextSelected:true}) : this.setState({isTextSelected:false});
        this.indexSelected = index;
    };
    copyToClipboard = async (e) => {
        window.getSelection().removeAllRanges();
        const range = document.createRange();
        range.selectNode(this.myRef[this.indexSelected]);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        this.setState({});
    };
    componentDidMount() {
        this.setState({loading:false});
    }
    handleStateErrorDialog = () =>{
        this.setState({setErrorDialog:!this.state.setErrorDialog})
    };
    messageText = "";
    username = localStorage.getItem('username');
    indexSelected = -1;

    render() {
        const classes = this.props.classes;
        const onFileChange = event => {
            this.handleDrop(event.target.files);
        };
        console.log(this.username);
        console.log(this.props.AddressUsername);
        return(
            <div className={classes.mainDiv}>
                {this.props.AddressUsername === undefined ? null :
                    <Typography variant={"body1"} align={"left"} style={{display:"flex",alignItems:"center"}}>
                        <Avatar alt={"ConsultantFirstName + ConsultantLastName"} src={"ConsultantAvatarAddress"} className={classes.titleAvatar}>
                        </Avatar>
                        مشاور
                        &nbsp;
                        {"ConsultantFirstName"} {"ConsultantLastName"}
                        {/*&nbsp;*/}
                    </Typography>
                }
                {/*<Typography variant={"body1"} align={"left"} style={{display:"flex",alignItems:"center"}}>*/}
                    {/*<Avatar alt={"ConsultantFirstName + ConsultantLastName"} src={"ConsultantAvatarAddress"} className={classes.titleAvatar}>*/}
                    {/*</Avatar>*/}
                    {/*مشاور*/}
                    {/*&nbsp;*/}
                    {/*{"ConsultantFirstName"} {"ConsultantLastName"}*/}
                    {/*/!*&nbsp;*!/*/}
                {/*</Typography>*/}
                <Divider className={classes.divider} />
                <div
                    style={{display: 'block', position: 'relative'}}
                >
                    {this.props.AddressUsername === undefined ?
                        <div
                            style={{
                                //      border: 'dashed grey 4px',
                                backgroundColor: 'rgba(255,255,255,.8)',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 9999
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: 0,
                                    left: 0,
                                    textAlign: 'center',
                                    color: 'grey',
                                    fontSize: 36
                                }}
                            >
                                <div style={{fontFamily:"IRANSansWeb"}}>لطفا يك گفت و گو را انتخاب كنيد</div>
                            </div>
                        </div>
                        : null}
                    <DragAndDrop handleDrop={this.handleDrop} enable={this.state.enableDragAndDrop}>
                        <LoadingOverlay active={this.state.loading} spinner text={""}>
                            <ScrollArea className={classes.pictureDiv} speed={0.5} horizontal={false} onScroll={this.handleGetNewMessages}>
                                {this.state.DirectMessagesArray.map((value,index) => (
                                    <div style={value.Owner === this.props.AddressUsername ? {display:"flex",flexDirection:"row-reverse",alignItems:"center"} : {display:"flex",flexDirection:"row",alignItems:"center"}}>
                                        <Avatar alt={"ConsultantFirstName + ConsultantLastName"} src={"ConsultantAvatarAddress"} className={classes.messageAvatar} />
                                        <Paper ref={(ref) => { this.myRef[index] = ref;}} style={value.Owner === this.props.AddressUsername ? {} : { backgroundColor:"#effdde"}}  className={value.message !== "" ? classes.textPaper : classes.filePaper} onContextMenu={(e) => this.handleRightClick(e, value.message !== "" , index ,value.Owner === this.username)} >
                                            {value.message === "" ? <img key={index} src={value?.file}
                                                                         height={"100%"} width={"100%"}/> : <Typography variant={"body1"} align={"left"}>{value.message}</Typography>}
                                        </Paper>
                                    </div>
                                ))}
                                {/*{this.newMessageFile.map((value,index) =>(*/}
                                    {/*<Paper ref={(ref) => { this.myRef[index] = ref;}} className={value.type.displayName === "WithStyles(ForwardRef(Typography))" ? classes.textPaper : classes.filePaper} onContextMenu={(e) => this.handleRightClick(e, value.type.displayName === "WithStyles(ForwardRef(Typography))",index)} >*/}
                                        {/*{value}*/}
                                    {/*</Paper>*/}
                                {/*))}*/}
                                <Menu
                                    keepMounted
                                    open={this.state.mouseY !== null}
                                    onClose={() => {this.setState({mouseX: null, mouseY: null,})}}
                                    anchorReference="anchorPosition"
                                    anchorPosition={
                                        this.state.mouseY !== null && this.state.mouseX !== null
                                            ? { top: this.state.mouseY, left: this.state.mouseX }
                                            : undefined
                                    }
                                    disableAutoFocusItem
                                    MenuListProps={{textAlign:"center"}}
                                >
                                    {this.state.isTextSelected ?
                                        this.state.textOptions.map((textOption, index) => (
                                            <MenuItem
                                                key={index}
                                                className={classes.blueFontStyle}
                                                //style={{fontFamily: 'IRANSansWeb',color: '#3f407d'}}
                                                onClick={(event) => this.handleTextOptions(event,index)}
                                            >
                                                {textOption}
                                            </MenuItem>
                                        ))
                                        :
                                        this.state.fileOptions.map((fileOption, index) => (
                                            <MenuItem
                                                key={index}
                                                className={classes.blueFontStyle}
                                                //style={{fontFamily: 'IRANSansWeb',color: '#3f407d',textAlign: "center"}}
                                                onClick={(event) => this.handleFileOptions(event,index)}
                                            >
                                                {fileOption}
                                            </MenuItem>
                                        ))
                                    }
                                </Menu>
                                <div style={{ clear: "both" }}
                                     ref={(el) => { this.messagesEnd = el; }}>
                                </div>
                            </ScrollArea>
                        </LoadingOverlay>
                    </DragAndDrop>
                    </div>
                <input
                    style={{display : 'none'}}
                    id='file' type="file" onChange={onFileChange} multiple/>
                <div>
                    <Divider className={classes.divider} />
                    {this.props.AddressUsername === undefined ? null :
                        <TextField id="standard-basic" multiline fullWidth
                                   placeholder={"پیام خود را وارد کنید"}
                                   value={this.messageText}
                                   onChange={this.handleTextFieldChange}
                                   InputProps={{
                                       style: {fontFamily: 'IRANSansWeb'},
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <label htmlFor='file'>
                                                   <IconButton
                                                       aria-label="upload picture"
                                                       component="span"
                                                       style={{margin:"2px",padding: '0px', color: '#3f407d'}}
                                                   >
                                                       {/*<CloudUpload style={{ fontSize: 35 }} />*/}
                                                       <FontAwesomeIcon icon={faFileUpload} style={{color: '#3f407d'}}/>
                                                   </IconButton>
                                               </label>
                                               <IconButton
                                                   style={{margin:"2px",padding: '0px', color: '#3f407d'}}
                                                   onClick={this.handleSendIcon}
                                               >
                                                   {/*<Done style={{ fontSize: 35}} />*/}
                                                   <Send style={{ fontSize: 30 ,transform: "rotate(-180deg)"}} />
                                               </IconButton>
                                           </InputAdornment>)
                                   }}
                        />
                    }
                </div>
            </div>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    '@global':{
        '.MuiFormHelperText-root.Mui-error' : {
            fontFamily: 'IRANSansWeb',
        },
    },
    mainDiv:{
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
    },
    pictureDiv:{
        width: "100%",
        overflowY:"hidden",
        overflowX:"hidden",
        // scrollBehavior: "smooth",
        height: "570px",
        backgroundPosition: 'center',
        backgroundAttachment: "fixed",
        backgroundImage: `url(${backgroundChannel})`,
    },
    titleAvatar:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        margin:"0px 4px",
    }, 
    messageAvatar:{
        width: theme.spacing(4),
        height: theme.spacing(4),
        margin:"0px 4px",
    },
    textPaper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: "center",
        margin: theme.spacing(1,0.5),
        width:"fit-content",
    },
    filePaper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
        alignItems: "center",
        margin: theme.spacing(1,0.5),
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(0),
        width:"fit-content",
    },
    blueFontStyle:{
        fontFamily: 'IRANSansWeb',
        color: '#3f407d',
    },
    divider:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));
export default (props) =>{
    const classes = useStyles();
    const p = React.useState(false);
    return(
        <DirectMessages classes={classes} p={p} AddressUsername={props.AddressUsername}/>
    )
}