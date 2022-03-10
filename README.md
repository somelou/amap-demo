# AmapDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 复现方法

### 环境

Angular12
node12.20
js apiv2.0（v1.4.5下正常）

在`src/app/app.component.ts`中调用`Map.clearMap()`方法后提示：

```bash
TypeError: undefined is not an object (evaluating 't._opts.innerOverlay')
```

（可点击页面右上角调用`clearMap()`)

经测试，**仅当自定义Array的后prototype方法出现上述错误**。

在 `src/extension/array.d.ts` 中增加 `Array` 的prototype方法，如：

```typescript
declare global {
  
  interface Array<T> {

    /**
     * 数组去重
     */
    unique(): Array<T>;
  }
}

export {};
```

并在`src/extension/implement/array.ts`实现：

```typescript
Array.prototype.unique = function <T>(): Array<T> {
  return Array.from(new Set(this));
};
```

在`main.ts`中引入`arrays.ts`:

```typescript
import 'src/extension/implement/array';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
