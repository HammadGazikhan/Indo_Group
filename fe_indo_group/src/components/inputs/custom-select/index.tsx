import { TextField, MenuItem, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface Option {
  label: string;
  value: string | number;
}

type CustomSelectFieldProps = TextFieldProps & {
  name: string;
  options: Option[];
};

const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  name,
  options,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...props}
      select
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelectField;
