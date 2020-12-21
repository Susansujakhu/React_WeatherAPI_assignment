import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import WeatherCard from './weatherCard';
import ErrorHandle from './ErrorHandle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import background from './images/bg.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';



class CallingApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: "",
            weather_data: {},
            loading: false,
            error: 3
        }
    }

    handleChange=(event)=>{
       
        this.setState({
            [event.target.name]:event.target.value
        })
  
      };

    getRemoteData = () => {
        this.loading_screen();
        let self = this;
        let city = this.state.address;
        let API_Key = "7d56bea189c09a1f40f88c0925cade55";
        if (city === ""){
            this.stop_loading_screen();
            this.setState({
                error: 1
            })
           console.log("wrong"); 
           return;
        }
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid="+ API_Key;
        axios.get(url)
            .then(function (response) {
                //console.log(response.data);
                self.setState({
                    weather_data: response.data,
                    loading: false,
                    error:0
                })

            }
            ).catch(function (error){
                self.setState({
                    loading:false,
                    error:2
                })
                console.log("Something went wrong");
                return;
            });

    };

    loading_screen(){
        this.setState({
            loading: true
        })
    }

    stop_loading_screen(){
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div style={{height:'100vh',backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} >
            
                <AppBar position="static" style={{color:'primary'}}>
                    <Toolbar>
                        <Typography variant="h6">
                            Current Weather
                        </Typography>
                        <TextField style={{marginLeft: 30, backgroundColor: 'whitesmoke', borderRadius: 20, }} id="outlined-basic" label="Enter City Name" variant="outlined" name="address" onChange={this.handleChange}/>           
                        <Button variant="outlined" color="inherit" style={{marginLeft: 30, padding: 10, borderRadius: 20}} onClick={this.getRemoteData} >
                            Check Weather
                        </Button>
                    </Toolbar>
                </AppBar>
                <div style={{textAlign:'center'}}>
                {
                    this.state.loading ? <div><CircularProgress color="secondary" /></div> : <div>
                    </div>
                }
                {
                    this.state.error === 0 ? <div>{
                            <WeatherCard data={this.state.weather_data} />
                        }</div>:<div>
                            <ErrorHandle data = {this.state.error}/>
                        </div>
                }
                </div>
            </div>
        );
    }
}

export default CallingApi;