
import React from 'react'
import {Grid,Icon,Paper,Step,StepLabel,Stepper,Typography} from '@material-ui/core'
import {createMuiTheme,ThemeProvider,withStyles} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#2196f3',
        }
    }
})


const styles=(theme)=>({
    root:{
        // marginLeft:200,
        // marginTop:80,
        // marginRight:40
    },
    info:{
        backgroundColor:'#2196f3'
    },
    paper:{
       
    }
})

class Onboarding extends React.Component{
    render(){

        const { classes } = this.props

        let steps = ["Submit docs","Contributions","Goals","Complete"]

        return(
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div style={{ width: '100%', borderRadius: 5, color: 'white', fontSize: 13}} className={classes.info}>
                                <p className='text-center'>You are sharing your screen with a prudential reprsentative. Please <a style={{textDecoration:'none',color:'white'}} href="prudential">Click here</a> to stop sharing</p>
                            </div>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Typography variant="h3">Onboarding</Typography>
                        </Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12} justify="flex-start">
                            <Stepper style={{backgroundColor:"transparent",marginLeft:'-10%'}} color="" alternativeLabel={true} >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>

                         {/* seperate grid for each card            */}

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Paper>

                                <div style={{width:'100%',height:40,backgroundColor:'gainsboro'}}>
                                    <Typography variant="h6" style={{paddingTop:5,paddingLeft:10}}>Employee Information</Typography>
                                </div>
                
                                <div style={{display:'flex',flexDirection:'column',padding:15,backgroundColor:'whitesmoke'}}>
                                    
                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-check-circle" style={{ color: 'green', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Employee Identification</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-download" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Download</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-check-circle" style={{ color: 'green', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Employee social security number</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-download" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Download</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </Paper>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Paper>

                                <div style={{width:'100%',height:40,backgroundColor:'gainsboro'}}>
                                    <Typography variant="h6" style={{paddingTop:5,paddingLeft:10}}>Tax Documents</Typography>
                                </div>
                
                                <div style={{display:'flex',flexDirection:'column',padding:15,backgroundColor:'whitesmoke'}}>
                                    
                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-exclamation-triangle" style={{ color: 'red', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Employer corporation</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left ">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-upload" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Upload</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-check-circle" style={{ color: 'green', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Employer tax filings for 2015-2020</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-download" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Download</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-exclamation-triangle" style={{ color: 'red', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Employer banking contract</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-upload" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Upload</p>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Paper>

                                <div style={{width:'100%',height:40,backgroundColor:'gainsboro'}}>
                                    <Typography variant="h6" style={{paddingTop:5,paddingLeft:10}}>Insurance Documents</Typography>
                                </div>
                
                                <div style={{display:'flex',flexDirection:'column',padding:15,backgroundColor:'whitesmoke'}}>
                                    
                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-exclamation-triangle" style={{ color: 'red', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Health insurance contract</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-upload" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Upload</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-exclamation-triangle" style={{ color: 'red', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Disability insurance contract</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-upload" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Upload</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                        
                                        <div style={{display:'flex',flexDirection:'row'}}>
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-check-circle" style={{ color: 'green', fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Employer banking contract</p>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex',flexDirection:'row',marginRight:10,width:100}} className="text-left float-left">
                                            <div style={{ paddingRight: 10 }}>
                                                <Icon className="fa fa-download" style={{ fontSize: 15 }}></Icon>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15 }}>Download</p>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </Paper>
                        </Grid>

                    </Grid>
                </div>
            </ThemeProvider>
        )
    }

}

export default withStyles(styles)(Onboarding);