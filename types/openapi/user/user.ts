/**
 * Test OpenAPI
 * Test OpenAPI Specification.</br>
It works for me!!!.
 * OpenAPI spec version: 1.0.0
 * 
 * Orvalで自動生成したファイルです。
 * 手動で編集した内容は再生成時に削除されてしまうので直接編集しないでください
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type {
  CreateUserResponseResponse,
  CreateUserRequestBodyBody,
  GetUsersResponseResponse,
  GetUsersParams,
  GetUserResponseResponse,
  UpdateUserRequestBodyBody,
  PutUsersIdParams,
  DeleteUsersIdParams,
} from ".././schemas";

/**
 * Create a user.
 * @summary CreateUser
 */
export const postUsers = <TData = AxiosResponse<CreateUserResponseResponse>>(
  createUserRequestBodyBody: CreateUserRequestBodyBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/users`, createUserRequestBodyBody, options);
};
/**
 * Search for a users and get a list.
 * @summary GetUsers
 */
export const getUsers = <TData = AxiosResponse<GetUsersResponseResponse>>(
  params?: GetUsersParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/users`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};
/**
 * Get user by logged in session.
 * @summary GetUserByMine
 */
export const getUsersMe = <TData = AxiosResponse<GetUserResponseResponse>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/users/me`, options);
};
/**
 * Get user by id.
 * @summary GetUserById
 */
export const getUsersId = <TData = AxiosResponse<GetUserResponseResponse>>(
  id: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/users/${id}`, options);
};
/**
 * Update user by id.
 * @summary UpdateUserById
 */
export const putUsersId = <TData = AxiosResponse<CreateUserResponseResponse>>(
  id: string,
  updateUserRequestBodyBody: UpdateUserRequestBodyBody,
  params: PutUsersIdParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.put(`/users/${id}`, updateUserRequestBodyBody, {
    ...options,
    params: { ...params, ...options?.params },
  });
};
/**
 * Delete user by id.
 * @summary DeleteUserById
 */
export const deleteUsersId = <
  TData = AxiosResponse<CreateUserResponseResponse>
>(
  id: string,
  params: DeleteUsersIdParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.delete(`/users/${id}`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};
