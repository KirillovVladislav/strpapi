import { api } from "./api";
import { IGenericResponse } from "./types";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    //   TODO change any on ZOD Schema
    registerUser: build.mutation<IGenericResponse, any>({
      query(data) {
        return {
          body: data,
          method: "POST",
          url: "register",
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
