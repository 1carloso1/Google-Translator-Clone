import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { AUTO_LANGUAJE } from './constants';
import { ArrowsIcon } from './components/icons';
import { LanguajeSelector } from './components/languajeSelector';
import { SectionType } from './types/types.d';
import { TextArea } from './components/textArea';


function App() {
  const { 
    loading, 
    fromLanguaje, 
    toLanguaje, 
    fromText, 
    result, 
    setResult, 
    setFromText, 
    setFromLanguaje, 
    setToLanguaje, 
    interchangeLanguaje
  } = useStore()

  return (
  <Container fluid>
    <h2>Google Translator</h2>
    <Row>
      <Col>
        <Stack gap={2}>
          <LanguajeSelector
            type= {SectionType.From}
            value={fromLanguaje}
            onChange={setFromLanguaje}/>
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
          />
        </Stack>
      </Col>

      <Col xs='auto'>
        <Button variant='link' disabled = {fromLanguaje == AUTO_LANGUAJE} onClick={() => {
        interchangeLanguaje()
        }}><ArrowsIcon /> </Button>
      </Col>

      <Col>
        <Stack gap={2}>
          <LanguajeSelector 
            type= {SectionType.To}
            value={toLanguaje}
            onChange={setToLanguaje}/>
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
        </Stack>
      </Col>
    </Row>
  </Container>
 )
}

export default App
