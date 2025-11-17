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

This project uses [Alchemy](https://alchemy.run/) for infrastructure-as-code deployment to Cloudflare Pages.

### Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Cloudflare API Token**: Create an API token with the following permissions:
   - Account > Cloudflare Pages > Edit
   - Account > Account Settings > Read
   - Zone > Zone > Read (if using custom domains)

   Create a token at: https://dash.cloudflare.com/profile/api-tokens

3. **Environment Variables**: Create a `.env` file in the project root:

   ```sh
   CLOUDFLARE_API_TOKEN=your_api_token_here
   CLOUDFLARE_ACCOUNT_ID=your_account_id_here
   ```

   Find your Account ID in the Cloudflare dashboard under Account Home.

### Deploying

Deploy to Cloudflare Pages:

```sh
npm run deploy
# or
mise run deploy
```

This will:
1. Build your SvelteKit application
2. Create/update the Cloudflare Pages project
3. Deploy your site to Cloudflare's edge network

### Managing Deployments

**View deployment status**: Check the Cloudflare dashboard or the terminal output after running deploy.

**Destroy infrastructure**: To remove all Cloudflare resources:

```sh
npm run destroy
# or
mise run destroy
```

**Configuration**: Edit `alchemy.run.ts` to add Cloudflare resources like:
- KV Namespaces (key-value storage)
- R2 Buckets (object storage)
- D1 Databases (SQLite at the edge)
- Environment variables and secrets

See the [Alchemy documentation](https://alchemy.run/docs/) for more configuration options.
