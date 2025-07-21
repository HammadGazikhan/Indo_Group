import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface CustomRadioGroupProps {
  name: string;
  label: string;
  options: Option[];
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  name,
  label,
  options,
}) => {
  const [field] = useField(name);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup {...field}>
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio />}
            label={opt.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
