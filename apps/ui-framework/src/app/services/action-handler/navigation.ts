import { INavigate, Nullable } from '@ui-solution/ui-framework-api-interface';
import { NavigateFunction } from 'react-router-dom';
import { IActionHandlerProps } from './action-handler';

export interface INavigateProps extends IActionHandlerProps {
  action: INavigate;
  navigate: NavigateFunction;
  options?: {
    startingPath: string;
  };
}

export function execute({
  navigate,
  action,
  options,
}: INavigateProps): Promise<void> {
  const instructionsClone = [...action.instructions];
  const firstInstruction = instructionsClone.shift();

  if (!firstInstruction) {
    throw Error(`No navigation instruction provided for action: ${action}`);
  }
  const startPath = options?.startingPath ?? '';

  return Promise.resolve(
    navigate(
      `${startPath}${startPath ? '/' : ''}${
        firstInstruction.type
      }/${parseParams(firstInstruction.params)}`,
      { state: { instructions: instructionsClone } }
    )
  );
}

function parseParams(params: Nullable<string[]>) {
  return params
    ? params.reduce((acc, cur) => `${acc}${acc ? '/' : ''}${cur}`, '')
    : '';
}
