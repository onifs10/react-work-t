import "../styles/input.style.css"
const Input = ({ name, type, required, value, onChange}) => {
    return (
         <label htmlFor={name}>
        <input
          type={type}
          name={name}
          placeholder={name}
          required={required}
          value={value}
          onChange={(evt) =>  onChange && onChange(evt) }
        />
          </label>
          
    )
}

export default Input