# Reddit wiki Push action

This action will push the contents of your repo onto a reddit wiki
## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.


## Example usage

```yaml
name: upload to reddit

on:
  push:
    branches:
      - 'master'

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3.3.0
        with:
          fetch-depth: 0
      - name: push
        uses: redlukas/reddit_wiki_updater@v0.1
        with:
          sub_name: 'wifi'
          reddit_client_id: ${{ secrets.REDDIT_CLIENT_ID }}
          reddit_client_secret: ${{ secrets.REDDIT_CLIENT_SECRET }}
          reddit_user_name: ${{ secrets.REDDIT_USER_NAME }}
          reddit_user_password: ${{ secrets.REDDIT_USER_PASSWORD }}
```