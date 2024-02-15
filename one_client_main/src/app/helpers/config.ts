import { environment } from "src/environments/environment";

export class Url {
    public getGlobalUrl(): any {
        return environment.apiDomain
    }
}