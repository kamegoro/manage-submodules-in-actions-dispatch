/**
 * Test OpenAPI
 * Test OpenAPI Specification.</br>
It works for me!!.
 * OpenAPI spec version: 1.0.0
 * 
 * Orvalで自動生成したファイルです。
 * 手動で編集した内容は再生成時に削除されてしまうので直接編集しないでください
 */
import type { PaginationModel } from "./paginationModel";
import type { GetUsersResponseResponseAllOf } from "./getUsersResponseResponseAllOf";
import type { GetUsersResponseResponseAllOfTwo } from "./getUsersResponseResponseAllOfTwo";

export type GetUsersResponseResponse = PaginationModel &
  unknown &
  GetUsersResponseResponseAllOf &
  GetUsersResponseResponseAllOfTwo;
