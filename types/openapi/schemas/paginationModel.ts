/**
 * Test OpenAPI
 * Test OpenAPI Specification.
It works.
 * OpenAPI spec version: 1.0.0
 * 
 * Orvalで自動生成したファイルです。
 * 手動で編集した内容は再生成時に削除されてしまうので直接編集しないでください
 */

/**
 * Pagination model
 */
export interface PaginationModel {
  /** @minimum 1 */
  page: number;
  /** @minimum 0 */
  total: number;
}
