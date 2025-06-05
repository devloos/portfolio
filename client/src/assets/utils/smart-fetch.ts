import * as qs from 'qs';

interface FetchOptions {
  url: string;
  method: string;
  params?: object;
  data?: object;
  notifyOnSuccess?: boolean;
  notifyOnFailure?: boolean;
}

export async function smartFetch(opt: FetchOptions) {
  if (opt.url === null) {
    throw new Error('Url must be provided.');
  }

  if (opt.params) {
    opt.url += '?' + qs.stringify(opt.params);
  }

  const response = await fetch(opt.url, {
    method: opt.method,
    ...(opt.data && { headers: { 'Content-Type': 'application/json' } }),
    ...(opt.data && { body: JSON.stringify(opt.data) }),
  });

  const jsonData = await response.json();

  if (response.ok) {
    if (opt.notifyOnSuccess) {
      console.log(jsonData.message);
    }
  } else {
    // todo: analytics, log, etc...
    if (opt.notifyOnFailure) {
      console.log(jsonData.message);
    }
  }

  return jsonData;
}
