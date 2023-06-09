/**
 * Test OpenAPI
 * Test OpenAPI Specification.
It works.
 * OpenAPI spec version: 1.0.0
 * 
 * Orvalで自動生成したファイルです。
 * 手動で編集した内容は再生成時に削除されてしまうので直接編集しないでください
 */
import type { UserModelAddress } from "./userModelAddress";
import type { UserModelHobbiesItem } from "./userModelHobbiesItem";

/**
 * User model
 */
export interface UserModel {
  readonly id: string;
  name: string;
  email: string;
  address?: UserModelAddress;
  hobbies?: UserModelHobbiesItem[];
}
