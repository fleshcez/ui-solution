import { API_URL } from "@ui-solution/ui-framework-api-interface";
import { Nullable } from '@ui-solution/ui-framework-api-interface';


export interface IVmResolver<T> {
    getVm({id, route}: {id: string, route: string}): Promise<Nullable<T>>;
}

export interface IGetVmOptions {
    id: string;
    route: string;
}

export class VmResolver<T> implements IVmResolver<T> {
    private _cache = new Map<string, T>();

    public async getVm({id, route}: IGetVmOptions): Promise<Nullable<T>> {
         if (this._cache.has(id)) {
            return Promise.resolve(this._cache.get(id));
         }

         return fetch(`${API_URL}/${route}/${id}`).then(async (r) => {
            const vm: T = await r.json();
            this._cache.set(id, vm);
            return vm;
        });
    }
}