module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // -------------------------
    // TYPES
    // -------------------------
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'docs',
        'test',
        'build',
        'ci',
        'chore',
        'style',
        'internal',
        'meta',
        'design',
      ],
    ],

    // -------------------------
    // SCOPES
    // -------------------------
    'scope-enum': [
      2,
      'always',
      [
        // Core app
        'app',
        'ui',
        'api',
        'hooks',
        'utils',
        'config',

        // Next.js style
        'router',
        'app-router',
        'server',
        'middleware',

        // Tooling / build
        'build',
        'deps',
        'turbo',
        'lint',
        'format',
        'release',

        // Infra / DevOps
        'ci',
        'docker',
        'vercel',

        // Docs
        'readme',
        'docs',
      ],
    ],

    // -------------------------
    // MESSAGE RULES
    // -------------------------
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 100],

    'header-max-length': [2, 'always', 120],

    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],

    'scope-case': [2, 'always', ['kebab-case', 'lower-case']],

    // BREAKING CHANGE
    'body-max-line-length': [1, 'always', 120],
    'footer-max-line-length': [1, 'always', 120],
  },
};
