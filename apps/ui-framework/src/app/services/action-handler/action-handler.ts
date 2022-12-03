import { ActionType, IAction, INavigate } from "@ui-solution/ui-framework-api-interface";
import { NavigateFunction } from "react-router-dom";
import { execute as navigate } from "./navigation";


export interface IActionHandlerDeps {
    navigate: NavigateFunction;
}

export interface IActionHandlerProps {
    action: IAction;
}

export class ActionHandler {
    private _navigate: NavigateFunction;

    constructor({navigate}: IActionHandlerDeps) {
        this._navigate = navigate;
    }

    public execute({action}: IActionHandlerProps) {
        this._execute(action);
    }

    private _execute(action: IAction) {
        switch(action.type) {
            case ActionType.navigation:
                return navigate({navigate: this._navigate, action: action as INavigate});
                break;
        }
    }
}