declare module com {
    export module androidstudy {
        export module daraja {
            export interface DarajaListener<AccessToken>{
                onResult(accessToken: AccessToken): void;
                onError(error: string): void;
            }

            export class AccessToken{
                getAccess_token(): string;
            }
            export class Daraja{
                static with(consumerKey:string, consumerSecret:string, darajaListener: DarajaListener<AccessToken>): void;
            }
        }
    }
}  