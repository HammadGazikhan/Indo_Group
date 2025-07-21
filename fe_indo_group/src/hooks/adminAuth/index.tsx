import { useMutation } from "@tanstack/react-query";
import api from "../../utils/api";
import { AdminLoginData } from "../../interface/auth";

export const useAdminLogin = () =>
  useMutation({
    mutationFn: async (data: AdminLoginData) => {
      const res = await api.post("/admin/login", data);
      return res.data;
    },
  });
