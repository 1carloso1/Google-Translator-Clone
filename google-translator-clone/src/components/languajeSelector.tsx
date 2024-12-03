import {Form} from 'react-bootstrap';
import { AUTO_LANGUAJE, SUPPORTED_LANGUAJES } from '../constants';
import {type FromLanguaje, Languaje, SectionType } from '../types/types.d';

type Props =
    | {type: SectionType.From, value: FromLanguaje, onChange: (languaje: FromLanguaje) => void}
    | {type: SectionType.To, value: Languaje, onChange: (languaje: Languaje) => void}


export const LanguajeSelector: React.FC<Props> = ({ onChange, type, value }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Languaje)
    }
    return(
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
            {type == SectionType.From && <option value={AUTO_LANGUAJE}>Detectar Idioma</option>}
            {Object.entries(SUPPORTED_LANGUAJES).map(([key, literal]) => ( //se saca tanto la key como el value
            <option key={key} value={key}>
                {literal}
            </option>
            ))}
        </Form.Select>
    )
}