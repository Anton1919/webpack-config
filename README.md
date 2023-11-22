## Запуск проекта

```
yarn install - устанавливаем зависимости
yarn run start - запуск проекта в dev
```

## Скрипты

- `yarn run build:dev` - сборка в dev
- `yarn run build:prod` - сборка в prod
- `yarn run build:prod:analyzer` - анализ бандла в prod сборке


## Что реализовано:

- На данный момент в проекте исползуется модули scss.
  Для изменения на обычный css или просто scss необходимо
  внести изменения в файле global.d.ts и изменить эту
  строчку declare module '*.module.scss' на '*.css'


- Svg в проекте настроены как компоненты и изменять их можно в формате:
  <Insta width={150} height={150} fill={'green'} stroke={'red'} />


- Загрузка страниц чанками, lazy загрузка. Позволяет сократить размер
главного файлика, и загружать страницы только по необходимости. При 
первой загрузки у нас не будут загружаться все страницы стразу.


- Настроен hot module для реакта - FastRefreshPlugin.
- 

- Настроен babel loader, 
все options вынес в отдельный файл babel.config.json.


- Наш typescript транспилируется отдельным процессом, данную настройку 
можно отключить в файле buildLoaders или сделать только для dev режима.
Также есть плагин который показывает ошибки ts при сборке ForkTsCheckerWebpackPlugin.
Без этой фичи выглядит так:  
const tsLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
  }

  Если хотим typescript транспилировать отдельным процессом, то:
  const tsLoader = {{
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
  {
  loader: 'ts-loader',
  options: {
  transpileOnly: true | isDevMode
  },
  }
  ],
  }



----
