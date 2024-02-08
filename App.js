import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> Lívia Macedo de Oliveira | armário 02 - notebook 02 |</Text>
      
      <Text style={styles.text2}> By: Lívia Macedo </Text>
      
      <Text style={styles.text3}> References: Eniac . Blog do EAD . Unit  </Text>
      
      <Text style={styles.text4}> Vivemos em um mundo, onde a tecnologia vem se tornando cada vez mais utilizada em diversas áreas. Alguns trabalhos manuais, estão passando por um processo de adaptação, para que possam aderir o uso de aparelhos tecnológicos, e com isso, tornar o trabalho "mais produtivo e ativo".
     </Text>
     
     <Text style={styles.text5}> Entretanto, muitas pessoas podem não conseguir se adaptar à essas grandes mudanças, e poderão ser prejudicadas no futuro. Hoje em dia vivemos em uma sociedade, onde somente aqueles que tem condições finaceiras conseguem se adaptar a mudanças atuais. Muitos não possuem celular, computador, ou até mesmo uma casa para morar.
       </Text> 
       
     <Text style={styles.text6}> Por outro lado, o avanço tecnológico, vem implementando várias possibilidades. Diversas áreas de trabalho hoje em dia contratam aqueles que possuem especialidade em TI, que se tornou uma das áreas mais concorridas hoje em dia. Mas, ainda é complicado buscar por pessoas que tenham conhecimento em desenvolver sistemas, visto que ainda é algo novo pro mundo. </Text>
      
      <Text style={styles.title}> Desenvolvimento de Sistemas </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    text1: {
    flex: 1,
    border:'1px solid orange',
    backgroundColor: '#ffff99',
    fontSize: '15px',
    top: '20%',
    marginLeft: '0px',
  },
  
      text2: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: '15px',
    marginLeft: '90px',
    top: '120%',
    justifyContent: 'center',
  },
  
      text3: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: '15px',
    marginLeft: '700px',
    top: '113%',
    justifyContent: 'center',
  },
  
        text4: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: '15px',
    marginLeft: '20px',
    top: '130%',
    justifyContent: 'center',
  },
  
          text5: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: '15px',
    marginLeft: '20px',
    top: '140%',
    justifyContent: 'center',
  },
  
            text6: {
    flex: 1,
    backgroundColor: '#ffffff',
    fontSize: '15px',
    marginLeft: '20px',
    top: '150%',
    justifyContent: 'center',
  },
  
  
  
      title: {
    flex: 1,
    border:'1px solid lightgreen',
    backgroundColor: '#ffffff',
    fontSize: '40px',
    marginLeft: '0px',
    top: '1%',
    justifyContent: 'center',
  },
});
