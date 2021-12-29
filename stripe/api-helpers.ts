/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetchGetJSON(url: string): Promise<unknown> {
  try {
    const data = await fetch(url).then(res => res.json());
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchPostJSON(url: string, data?: Record<string, unknown>): Promise<any> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data || {}),
    });
    return await response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
}
