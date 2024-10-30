import Cookies from 'js-cookie';
import { SHOPIFY_COOKIE_EXPIRE, SHOPIFY_CUSTOMER_TOKEN_COOKIE } from '@/const';

export const getCustomerToken = () => Cookies.get(SHOPIFY_CUSTOMER_TOKEN_COOKIE)
type CookieAttributes = {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
};
export const setCustomerToken = (
  token: string | null,
  options?: CookieAttributes
) => {
  if (!token) {
    Cookies.remove(SHOPIFY_CUSTOMER_TOKEN_COOKIE)
  } else {
    Cookies.set(
      SHOPIFY_CUSTOMER_TOKEN_COOKIE,
      token,
      options ?? {
        expires: SHOPIFY_COOKIE_EXPIRE,
      }
    )
  }
}
