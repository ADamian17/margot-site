import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_BUILDER_GQL_ENDPOINT,
  generates: {
    "types/builder-types.d.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        noExport: true,
        dedupeOperationSuffix: true,
        skipTypename: true,
        omitOperationSuffix: true,
        typesPrefix: "Builder",
        avoidOptionals: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;
