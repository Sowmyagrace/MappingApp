import * as React from 'react';
import {View,Text,SafeAreaView,StatusBar,Platform,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import MapView, {Marker} from 'react-native-maps';

import { Entypo } from '@expo/vector-icons';


let locations=require("./Dummylocations.json")
export default class HomeScreen extends React.Component{
constructor(){
    super();
    this.state={
        dummyLocation:locations,
        userlat:0,
        userlong:0
    }
}
    callMarker=()=>{
      return this.state.dummyLocation.map((item,index)=>
         
        <Marker key={index} coordinate={{latitude:item.latitude,longitude:item.longitude}} title={item.name}
        >
            <Entypo name="location-pin" size={24} color="red" />
            </Marker>
          
      )  
        
    }
    pinLocation=()=>{
      console.log(this.state.userlong);
   
      <Marker coordinate={{latitude:this.state.userlat,longitude:this.state.userlong}} 
      image={require("../assets/location.png")}>
       <Entypo name="location-pin" size={24} color="green" />
      </Marker>
      
    }
    
    render(){
     return(
    <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea}/>
            <View style={{...StyleSheet.absoluteFillObject}}>
              <MapView style={styles.map} 
               initialRegion=
                {{
                latitude:20.5937, 
                longitude:78.9629,
                latitudeDelta:100,
                longitudeDelta:100   
               }}>
       {this.callMarker()}            
        </MapView>        
      <View style={{ position: 'absolute', top: 10, width: '100%',flexDirection:'row' }}>
      <TextInput
      style={styles.inputText}
      placeholder={'latitude'}
      placeholderTextColor={'#666'}
      keyboardType={'numeric'}
      
      onChangeText={(text)=>this.setState({userlat:Number(text)})}
     
      
    />
    <TextInput
      style={styles.inputText}
      placeholder={'longitude'}
      keyboardType={'numeric'}
      placeholderTextColor={'#666'}
      
      onChangeText={(text)=>this.setState({userlong:Number(text)})}
      
    />
     <TouchableOpacity style={styles.pinButton}
     onPress={()=>{
       locations=[...locations,{"latitude":this.state.userlat,"longitude":this.state.userlong,"name":""}];
       console.log(locations);
      <MapView  style={styles.map} 
      
      region=
      {{
          latitude:this.state.userlat, 
          longitude:this.state.userlong,
          latitudeDelta:100,
          longitudeDelta:100  
           
      }}> 
      this.pinLocation()
      </MapView>
      }}>
     <Text style={styles.pinText}>Pin it</Text>
     </TouchableOpacity>
  </View>
 </View>
</View>
  )
}
componentWillUnmount(){

}
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    titleContainer: {
      flex:0.1,
      justifyContent:'center',
      alignItems: 'center'
    },
    mapContainer: {
      flex:0.6,
    },
    map: {
      width:"100%",
      height:"100%"
       
      },
    inputText:{
        borderRadius: 10,
        
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 45,
        paddingLeft:10,
        fontSize: 18,
        flex:0.4
    },
    
    pinButton:
        {backgroundColor: '#FBC02D',
         width: 70,
         flex:0.2,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:10,
         
         height:40
          },
    pinText:{
            textAlign: 'center',
             fontSize: 24, 
             
             fontWeight:"bold",
              color: 'white' ,
             
          }
    
})