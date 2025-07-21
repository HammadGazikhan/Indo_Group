// hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import { LoginData, RegisterData } from "../../interface/auth";
import api from "../../utils/api";

export const useRegister = () =>
  useMutation({
    mutationFn: async (data: RegisterData) => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value) && value.length) {
          formData.append(key, value[0]); // Assuming one file per field
        } else if (value instanceof File) {
          formData.append(key, value);
        } else if (value !== null && value !== undefined) {
          formData.append(key, value as string);
        }
      });

      const res = await api.post("/employee/register", formData);

      return res.data;
    },
  });

// hooks/useLogin.ts
export const useLogin = () =>
  useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await api.post("/employee/login", data);
      return res.data;
    },
  });
