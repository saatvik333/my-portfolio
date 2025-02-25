export interface RateLimiterOptions {
  interval: number;
  uniqueTokenPerInterval: number;
}

interface RateLimiterResponse {
  check: (limit: number, token: string) => Promise<void>;
}

export function rateLimit(options: RateLimiterOptions): RateLimiterResponse {
  const tokenCache = new Map();
  const { interval, uniqueTokenPerInterval } = options;

  return {
    check: (limit: number, token: string) =>
      new Promise((resolve, reject) => {
        const now = Date.now();
        const windowStart = now - interval;

        // Clean old entries
        tokenCache.forEach((timestamp, key) => {
          if (timestamp < windowStart) {
            tokenCache.delete(key);
          }
        });

        // Check cache size
        if (tokenCache.size >= uniqueTokenPerInterval) {
          reject(new Error('Rate limit exceeded'));
          return;
        }

        // Count existing tokens for this IP
        const tokenCount = [...tokenCache.entries()]
          .filter(([key]) => key.startsWith(token))
          .filter(([, timestamp]) => timestamp > windowStart).length;

        if (tokenCount >= limit) {
          reject(new Error('Rate limit exceeded'));
          return;
        }

        // Add new token
        tokenCache.set(`${token}_${now}`, now);
        resolve();
      }),
  };
}
