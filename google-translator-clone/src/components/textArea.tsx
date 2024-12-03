import { Form } from "react-bootstrap"
import { SectionType } from "../types/types.d"

interface Props {
    type: SectionType 
    loading?: boolean 
    onChange: (value: string) => void
    value: string
}

const commonStyles = {border: 0, height: '200px', resize: 'none'}

const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
    if(type == SectionType.From) return 'Introducir Texto'
    if(loading == true) return 'Cargando...'
    return 'Traducción'
    

}
    

export const TextArea: React.FC<Props> = ({loading, type, value, onChange}) => {
    const styles = type == SectionType.To
    ? {...commonStyles, backgroundColor: '#f5f5f5'} : commonStyles
    
    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control
          as='textarea'
          autoFocus={type == SectionType.From}
          placeholder={getPlaceholder({type,loading})}
          style={styles}
          value={value}
          onChange={handleChange}
          />
    )
}