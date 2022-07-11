import { ThemeProvider } from 'styled-components';
import { Container } from './components/style/Container.styled';
import Header from './components/Header';
import GlobalStyles from './components/style/Global';
import { contents } from './content'
import { StyledFlex } from './components/style/Flex.style';
import Card from './components/Card'
import ConnectedAward from './images/connected-awards.png'
import Footer from './components/Footer';




const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {contents.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>

  );
}

export default App;
