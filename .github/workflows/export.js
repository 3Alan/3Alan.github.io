# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: automatic-deploy

on:
  push:
    branches: [ main ]

jobs:
  build-export:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '14'

    - run: npm i
    - run: npm run build
    - run: npm run export



# name: gitee-sync-deploy

# on:
#   push:
#     branches: [ main ]

# jobs:
#   build-and-sync-to-Gitee:
#     runs-on: ubuntu-latest
#     steps:
#     - uses: actions/checkout@v2
#     - uses: actions/setup-node@v2
#       with:
#         node-version: '14'
#     - run: npm i
#     - run: npm run build
#     - run: npm run export

#     - name: sync to Gitee
#       uses: wearerequired/git-mirror-action@master
#       env:
#         # 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY
#         SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}
#       with:
#         source-repo: git@github.com:3Alan/3Alan.github.io.git
#         destination-repo: git@gitee.com:alannum3/alannum3.git

#     - name: build Gitee Pages
#       uses: yanglbme/gitee-pages-action@main
#       with:
#         # 注意替换为你的 Gitee 用户名
#         gitee-username: 15797955960
#         # 注意在 Settings->Secrets 配置 GITEE_PASSWORD
#         gitee-password: ${{ secrets.GITEE_PASSWORD }}
#         # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
#         gitee-repo: 3Alan/alannum3
#         # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
#         branch: main