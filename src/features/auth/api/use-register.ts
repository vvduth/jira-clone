import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.auth.register)["$post"]>;
type ResquestType = InferRequestType<(typeof client.api.auth.register)["$post"]>["json"];

export const useregister = () => {
  const mutation = useMutation<ResponseType, Error, ResquestType>({
    mutationFn: async (json) => {
      const response = await client.api.auth.register["$post"]({ json });
      return await response.json()
    },
  });

  return mutation;
};
