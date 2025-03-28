// src/gapi.d.ts
declare module 'gapi-script' {
  interface GapiClient {
    init: (options: any) => Promise<void>;
    sheets: {
      spreadsheets: {
        values: {
          get: (params: any) => Promise<any>;
          update: (params: any) => Promise<any>;
        };
      };
    };
  }

  interface GapiAuth2 {
    getAuthInstance: () => any;
  }

  interface Gapi {
    client: GapiClient;
    auth2: GapiAuth2;
    load: (name: string, callback: () => void) => void;
  }

  // This is to match the named export of 'gapi' in 'gapi-script'
  export const gapi: Gapi;
}
