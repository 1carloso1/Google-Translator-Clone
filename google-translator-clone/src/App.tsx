import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AUTO_LANGUAJE } from './constants';
import { ArrowsIcon } from './components/icons';
import { LanguajeSelector } from './components/languajeSelector';




function App() {
  const { fromLanguaje, toLanguaje, setFromLanguaje, setToLanguaje, interchangeLanguaje} = useStore()
  return (
  <Container fluid>
    <h1>Google Translator</h1>
    <Row>
      <Col>
        <LanguajeSelector
          type='from'
          value={fromLanguaje}
          onChange={setFromLanguaje}/>
      </Col>
      <Col>
      <Button variant='link' disabled = {fromLanguaje == AUTO_LANGUAJE} onClick={() => {
      interchangeLanguaje()
    }}><ArrowsIcon /> </Button>
      </Col>
      <Col>
      <LanguajeSelector 
        type='to'
        value={toLanguaje}
        onChange={setToLanguaje}/>
      </Col>
    </Row>
  </Container>
 )
}

export default App
