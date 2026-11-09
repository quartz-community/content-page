# @quartz-community/content-page

The default page type for regular content pages. It matches every page that no more specific page type (such as folder-page or tag-page) claims first. Its layout can be adjusted under `layout.byPageType.content` in `quartz.config.yaml`.

## Installation

```bash
npx quartz plugin add @quartz-community/content-page
```

It is already included (and enabled) in the default `quartz.config.yaml`.

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: "@quartz-community/content-page"
    enabled: true
```

## Configuration

This plugin has no configuration options.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/ContentPage) for more information.

## License

MIT
