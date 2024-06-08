FROM node:18.17.1

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY /front/package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY /front/ ./

# アプリケーションをビルド
RUN npm run build
