import { FormInputContainer, FormInputLabel, Group } from "./form-input.styles";

const FormInput = ({label, ...otherProps}) =>{
    return(
        <Group>
        <FormInputContainer {...otherProps}/>
        {label && (
        <FormInputLabel shrink={otherProps.value.length} >
            {label}
        </FormInputLabel>
        )}
        </Group>
    )
}

export default FormInput;