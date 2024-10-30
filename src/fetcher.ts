
import { API_TOKEN, API_URL } from './const';
import handleFetchResponse from './utils/handle-fetch-response';
interface Variables {
  locale?: string;
  [key: string]: any;
}
type Fetcher = (options: {
  url?: string;
  method?: string;
  variables?: Variables;
  query?: object;
}) => Promise<object>;
const fetcher: Fetcher = async ({
  url = API_URL,
  method = 'POST',
  variables,
  query,
}) => {
  const { locale, ...vars } = variables ?? {}
  return handleFetchResponse(
    await fetch(url, {
      method,
      body: JSON.stringify({ query, variables: vars }),
      headers: {
        'X-Shopify-Storefront-Access-Token': API_TOKEN!,
        'Content-Type': 'application/json',
        ...(locale && {
          'Accept-Language': locale,
        }),
      },
    })
  )
}

export default fetcher
