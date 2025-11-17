# Justin's Personal Site

This is yet another incarnation of my personal site. I've taken a bit of a different tack this time. The design is inspired by a TUI (text-based user interface). That means I'm using a single, monospace font and a single font size. Spacing is (mostly) constrainted to the character grid.

I'm building everything with SvelteKit and trying to reduce the number of dependencies.

## Setup

This project uses [mise](https://mise.jdx.dev/) for development tooling. Install it with:

```sh
curl https://mise.run | sh
```

Then install project dependencies:

```sh
mise install
```

## Development

Start the development server:

```sh
mise run dev
```

## Building

Create a production build:

```sh
mise run build
```

Preview the production build:

```sh
mise run preview
```

## Deployment

This project uses the Cloudflare adapter and can be deployed to Cloudflare Pages.
