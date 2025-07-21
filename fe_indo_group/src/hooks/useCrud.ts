// hooks/api/useApiHooks.ts
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryKey,
} from "@tanstack/react-query";
import api from "../utils/api";

// -----------------------------------------
// ✅ GET Hook
// -----------------------------------------
export const useGetQuery = <T = any>(
  key: QueryKey,
  url: string,
  enabled = true
) => {
  return useQuery<T>({
    queryKey: key,
    queryFn: async () => {
      const { data } = await api.get(url);
      return data;
    },
    enabled,
  });
};

// -----------------------------------------
// ✅ POST Hook
// -----------------------------------------
export const usePostMutation = <T = any, D = any>(
  url: string,
  onSuccess?: (data: T) => void,
  onError?: (err: any) => void
) => {
  const queryClient = useQueryClient();
  return useMutation<T, any, D>({
    mutationFn: async (data: D) => {
      const response = await api.post(url, data);
      return response.data;
    },
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.invalidateQueries(); // you can scope to a key
    },
    onError,
  });
};

// -----------------------------------------
// ✅ PUT Hook
// -----------------------------------------
export const usePutMutation = <T = any, D = any>(
  url: string,
  onSuccess?: (data: T) => void,
  onError?: (err: any) => void
) => {
  const queryClient = useQueryClient();
  return useMutation<T, any, D>({
    mutationFn: async (data: D) => {
      const response = await api.put(url, data);
      return response.data;
    },
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.invalidateQueries();
    },
    onError,
  });
};

// -----------------------------------------
// ✅ DELETE Hook
// -----------------------------------------
// ✅ hooks/api/useApiHooks.ts

export const useDeleteMutation = <T = any>(
  onSuccess?: (data: T) => void,
  onError?: (err: any) => void
) => {
  const queryClient = useQueryClient();
  return useMutation<T, any, string>({
    mutationFn: async (url: string) => {
      const response = await api.delete(url);
      return response.data;
    },
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.invalidateQueries();
    },
    onError,
  });
};
