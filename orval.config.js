module.exports = {
  all: {
    input: {
      target: "kamegoro-openapi/openapi/specification.bundled.yaml",
      validation: false,
    },
    output: {
      target: "types/openapi/openapi.ts",
      schemas: "types/openapi/schemas",
      mode: "tags-split",
      clean: true,
      mock: false,
      override: {
        header: info => [
          ...(info.title ? [info.title] : []),
          ...(info.description ? [info.description] : []),
          ...(info.version ? [`OpenAPI spec version: ${info.version}`] : []),
          "",
          "Orvalで自動生成したファイルです。",
          "手動で編集した内容は再生成時に削除されてしまうので直接編集しないでください",
        ],
      },
    },
    hooks: {
      afterAllFilesWrite: ["npm run prettier"],
    },
  },
};
