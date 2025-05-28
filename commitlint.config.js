const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      [
        'FEATURE',
        'REFACTOR',
        'FORMAT',
        'FIX',
        'HOTFIX',
        'DOCUMENTATION'
      ]
    ],
    'type-case': [2, 'always', 'upper-case']
  }
}

module.exports = Configuration
