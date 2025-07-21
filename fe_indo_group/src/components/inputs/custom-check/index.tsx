import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";

interface CustomCheckboxGroupProps {
  label: string;
  options: { value: string; label: string }[];
  name: string;
}

const CustomCheckboxGroup = ({
  label,
  options = [],
  ...props
}: CustomCheckboxGroupProps) => {
  const [field, meta, helpers] = useField(props.name);
  const selectedValues = field.value || [];

  const handleChange = (value: string): void => {
    if (selectedValues.includes(value)) {
      helpers.setValue(selectedValues.filter((val: string) => val !== value));
    } else {
      helpers.setValue([...selectedValues, value]);
    }
  };

  return (
    <FormControl
      component="fieldset"
      error={meta.touched && Boolean(meta.error)}
    >
      <FormLabel>{label}</FormLabel>
      <FormGroup row>
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            control={
              <Checkbox
                checked={selectedValues.includes(opt.value)}
                onChange={() => handleChange(opt.value)}
              />
            }
            label={opt.label}
          />
        ))}
      </FormGroup>
      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomCheckboxGroup;
