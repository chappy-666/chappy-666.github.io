# ベースイメージ: Node.js 22 の slim 版
FROM node:22-slim

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    bash \
    ca-certificates \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# node ユーザーに sudo 権限を与える（VS Code devcontainer で推奨）
RUN echo "node ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/node

# 作業ディレクトリの設定
WORKDIR /workspaces/app

# node ユーザーに切り替え（非 root）
USER node

# 開発用ポート（必要に応じて調整）
EXPOSE 3000