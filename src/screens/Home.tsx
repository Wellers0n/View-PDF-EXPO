import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import iconPDF from './../images/icon-pdf.png'

function greeter(person: string) {
    return "Hello, " + person;
  }
  
  const Home = ({navigation}: any) => {
    
    return (
      <View style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom: 15, textAlign: 'center'}}>{greeter('Home')}</Text>
        <Image source={iconPDF} style={{height: 400, width: 300}} />
        <Button color={'#f4511e'} title={'Go see PDF'} onPress={() => navigation.navigate('About')}/>
      </View>
    )
  }

  export default Home