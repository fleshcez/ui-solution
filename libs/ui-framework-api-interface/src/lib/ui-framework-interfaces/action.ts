export enum ActionType {
    navigation = "navigation"
}

export interface INavigationInstruction {
    type: NavigationInstructionType;
    params?: string[];
}

export enum NavigationInstructionType {
    scenario = "scenario",
    panel = "panel"
}

export interface IAction {
    type: ActionType;
}

export interface INavigate extends IAction {
    type: ActionType.navigation;
    instructions: INavigationInstruction[];
}