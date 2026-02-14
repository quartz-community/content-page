# @quartz-community/content-page

The default page type for regular content pages. Matches all pages except folder index pages and tag pages.

## Installation

```bash
npx quartz plugin add github:quartz-community/content-page
```

## Usage

```ts
// quartz.config.ts
import * as ExternalPlugin from "./.quartz/plugins";

const config: QuartzConfig = {
  plugins: {
    pageTypes: [ExternalPlugin.ContentPage()],
  },
};
```

```ts
// quartz.layout.ts
export const layout = {
  byPageType: {
    content: {
      beforeBody: [...],
      left: [...],
      right: [...],
    },
  },
}
```

## Configuration

This plugin has no configuration options.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/) for more information.

## License

MIT
