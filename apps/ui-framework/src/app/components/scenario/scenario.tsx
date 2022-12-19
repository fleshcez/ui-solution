import {
  ActionType,
  API_URL,
  INavigate,
  INavigationInstruction,
  IPanel,
  IScenario,
  SCENARIO_URL,
} from '@ui-solution/ui-framework-api-interface';
import { useContext, useEffect, useState } from 'react';
import {
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
} from 'react-router-dom';

import { scenarioId } from '../../app-router';
import { INavigateProps } from '../../services/action-handler/navigation';
import { RootServiceContext } from '../../services/root-service';
import { IVmResolver } from '../../services/vm-resolver';
import { evaluator } from '../../utils/evaluator';

export interface IScenarioLoaderArgs
  extends IVmResolver<IScenario>,
    LoaderFunctionArgs {
  scenarioResolver: IVmResolver<IScenario>;
}

export async function loader({
  params,
  scenarioResolver,
}: IScenarioLoaderArgs) {
  const id = params[scenarioId];
  if (!id) {
    console.error('No id found for scenarioId param');
    return;
  }
  const scenario = await scenarioResolver.getVm({ id, route: SCENARIO_URL });
  const model = await fetch(
    `${API_URL}${SCENARIO_URL}/${params[scenarioId]}/${scenario?.modelFetch.path}`
  ).then((r) => r.json());
  return {
    scenario,
    model,
  };
}

function useScenario(scenario: IScenario, model: Record<string, unknown>) {
  const location = useLocation();
  const instructions = location.state
    ?.instructions as unknown as INavigationInstruction[];
  const [visiblePanels, setVisiblePanels] = useState<IPanel[]>();
  const rootService = useContext(RootServiceContext);

  useEffect(() => {
    const filtered = scenario.panels.filter((p) =>
      p.isVisible ? evaluator(p.isVisible, model) : true
    );
    setVisiblePanels(filtered);
  }, [model, scenario]);

  useEffect(() => {
    if (instructions && instructions.length) {
      const navigate: INavigate = {
        type: ActionType.navigation,
        instructions: [...instructions],
      };
      rootService?.actionHandler.execute({
        action: navigate,
        options: { startingPath: location.pathname + '/' },
      } as INavigateProps);
    }
  }, [instructions]);
  return { visiblePanels };
}

export function Scenario() {
  const { scenario, model } = useLoaderData() as {
    scenario: IScenario;
    model: Record<string, unknown>;
  };

  const { visiblePanels } = useScenario(scenario, model);

  useScenario(scenario, model);

  return (
    <div>
      <Outlet />
    </div>
  );
}
