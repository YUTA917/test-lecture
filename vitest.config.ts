import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'], // テストファイルのパターン
    exclude: ['node_modules', 'dist'], // 無視するディレクトリ
  },
});
