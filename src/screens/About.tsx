import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';


// function greeter(person: string) {
//     return "Hello, " + person;
//   }



  const About = () => {
  
    return (
      <PDFReader source={{uri: 'http://www.lagotzki.de/pdftk/beispiel_neu.pdf'}}
        style={styles.pdf}
      />
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width
    }
});

  export default About