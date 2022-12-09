import { API_URL } from "@ui-solution/ui-framework-api-interface";
import { Nullable } from '@ui-solution/ui-framework-api-interface';
import { IScenario } from "@ui-solution/ui-framework-api-interface";
import { scenarioRoute } from "../../app-router";

export interface IScenarioResolver {
    getScenario(id: string): Promise<Nullable<IScenario>>;
}

class ScenarioResolver {
    private _cache = new Map<string, IScenario>();

    public async getScenario(id: string): Promise<Nullable<IScenario>> {
         if (this._cache.has(id)) {
            return Promise.resolve(this._cache.get(id));
         }

         return fetch(`${API_URL}/${scenarioRoute}/${id}`).then(async (r) => {
            const scenario: IScenario = await r.json();
            this._cache.set(id, scenario);
            return scenario;
        });
    }
}

export const scenarioResolver = new ScenarioResolver();