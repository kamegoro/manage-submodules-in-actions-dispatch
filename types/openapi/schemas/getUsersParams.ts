/**
 * Test OpenAPI
 * Test OpenAPI Specification.</br>
It works for me!.
 * OpenAPI spec version: 1.0.0
 * 
 * Orvalで自動生成したファイルです。
 * 手動で編集した内容は再生成時に削除されてしまうので直接編集しないでください
 */
import type { LimitParameterParameter } from "./limitParameterParameter";
import type { OffsetParameterParameter } from "./offsetParameterParameter";

export type GetUsersParams = {
  /**
   * User mail address.
   */
  email?: string;
  /**
   * User name.
   */
  name?: string;
  /**
   * Limit one page.
   */
  limit?: LimitParameterParameter;
  /**
   * Offset page.
   */
  offset?: OffsetParameterParameter;
};
