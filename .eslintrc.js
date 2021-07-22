module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  env: { es2021: true, browser: true, jest: true, node: true },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    'no-var-requires': 'off',
    // 単なるconsole.logはエラーにする
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    // enumの使用をエラーにする(ユニオン型を推奨)
    'no-restricted-syntax': [
      'error',
      { selector: 'TSEnumDeclaration', message: "Don't declare enums" },
    ],
    // コールバック関数は必ずarrow-functionにする
    'prefer-arrow-callback': 'error',
    // functin宣言はエラー
    'func-style': 'error',
    // arrow-functionの記法
    'arrow-body-style': 'off',
    'no-restricted-imports': ['error', { paths: [{ name: 'react', importNames: ['default'] }] }],
    // prop types を使っていないので off
    'react/prop-types': 'off',
    // Next.js では React を import しなくてもよいので off にする
    'react/react-in-jsx-scope': 'off',
    // イベントハンドラの命名を統一する
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'on',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    // React Hooks のための設定
    'react-hooks/rules-of-hooks': 'error',
    // hooksの依存配列の設定
    'react-hooks/exhaustive-deps': 'warn',
    // <Component {...props}>を許可する
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'import/newline-after-import': 'error',
    // default-exportを許容しない
    'import/no-default-export': 'error',
    // importとexportの順番に関するルール
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // 明示的なanyは許容する
    '@typescript-eslint/no-explicit-any': 'off',
    // 関数の引数や返り値に必ず型をつけるルールを off にする
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 型は明示的にtype-importする
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    // 未使用の変数がある場合エラーにする（デフォルトは warning）
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // next/linkのchildのaタグの空hrefを許容する
    'jsx-a11y/anchor-is-valid': 'off',
    // 命名に関するルール
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'] },
      { selector: ['property', 'parameterProperty', 'method'], format: ['camelCase'] },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'should'],
      },
    ],
  },
  overrides: [
    // pages配下とsbファイルのみdefault-exportを許容
    {
      files: ['src/pages/**/*.tsx', 'src/pages/**/*.ts', 'src/**/*.stories.@(js|jsx|ts|tsx)'],
      rules: { 'import/no-default-export': 'off' },
    },
    // themeのセッティングでコンポーネント名のPascalCaseを許容
    {
      files: ['src/theme/**/*.ts'],
      rules: { '@typescript-eslint/naming-convention': 'off' },
    },
  ],
}
