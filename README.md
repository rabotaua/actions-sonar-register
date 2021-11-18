# actions-sonar-register

GitHub Action to Register Repository in SonarCloud.

This action should be used with projects that cannot be automatically analyzed by sonar.

It will register new project in sonar and make sure that it has correct main branch.

## Inputs

| name  | required | default     | description                                       |
| ----- | -------- | ----------- | ------------------------------------------------- |
| token | true     | `undefined` | sonar token, usually `${{ secrets.SONAR_TOKEN }}` |
| org   | false    | `"rua"`     | sonar organization                                |

## Usage

```yml
- uses: rabotaua/actions-sonar-register@main
  with:
    token: ${{ secrets.SONAR_TOKEN }}
```
