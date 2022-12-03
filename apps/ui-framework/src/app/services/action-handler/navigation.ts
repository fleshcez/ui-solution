import { INavigate } from "@ui-solution/ui-framework-api-interface";
import { NavigateFunction } from "react-router-dom";


export interface INavigateDeps {
    action: INavigate;
    navigate: NavigateFunction;
}

export function execute({navigate, action}: INavigateDeps): Promise<void> {
    return Promise.resolve(navigate(`${action.instructions[0].type}/${action.instructions[0].params && action.instructions[0].params[0]}`));
}