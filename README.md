# HOBBYLINKS

HOBBYLINKS は　同じ趣味興味や趣味を持つ人々のための、対面およびオンラインの活動 イベントを主催および組織するためのプラットフォームです。

## Demo: https://www.youtube.com/watch?v=ZcIopsjVeYU


![スクリーンショット 2023-07-28 112118](https://github.com/IESKA2KHobbyLink/HobbyLinks/assets/71120764/65006b19-e9ce-4889-bf73-efce03f27871)
![スクリーンショット 2023-07-28 112245](https://github.com/IESKA2KHobbyLink/HobbyLinks/assets/71120764/385936aa-98e4-4796-afc1-05fa0e51ae80)

## 技術スタック

<img align="left" alt="Git" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
<img align="left" alt="HTML" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
<img align="left" alt="CSS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
<img align="left" alt="JavaScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
<img align="left" alt="React" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img align="left" alt="Php" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
<img align="left" alt="Laravel" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />
<img  align="left" alt="tailwinds" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />  
<img align="left" alt="mySql" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          
<br/>

## インストール

リポジトリをクローンしてください。

```
git clone https://github.com/IESKA2KHobbyLink/HobbyLinks.git
```

## Client

#### Client の環境構築

```
cd client
npm install
```

MAPBOX API KEY を保存するため　.env ファイル作成

```
VITE_MAP_BOX_API=<あなたのMAPBOX API KEY>
```

#### CLient 　サーバー開始

```
npm run dev
```

## Server

### Server の環境構築

- env.example ファイルを.env にコピーして、データベースの認証情報を更新する
- MySQL は autocommit (自動コミットモード)を無効化する方は　 autocommit を設定してください。

```
cd server
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

#### Server 　サーバー開始

```
php artisan serve
```

### シーダーを使用してデータを設定する

```
php artisan db:seed
```

## webSocket

### webSocket サーバー環境構築

```
cd web-socket
npm install

```

#### webSocket サーバー開始

```
npm run dev
```
