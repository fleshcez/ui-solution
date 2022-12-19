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

    public execute(props: IActionHandlerProps) {
        this._execute(props);
    }

    private _execute(props: IActionHandlerProps) {
        const { action } = props;
        switch(action.type) {
            case ActionType.navigation:
                return navigate({...props, navigate: this._navigate, action: action as INavigate});
                break;
        }
    }
}