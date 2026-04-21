import type { Exercise } from './exercisesexamples';
import { exercisesBySubModule as examplesBySubModule } from './exercisesexamples';

export type { Exercise };

export const exercisesBySubModule: { [key: string]: Exercise[] } = examplesBySubModule;

// Helper para obtener ejercicios de un submodulo.
export function getExercisesForSubModule(subModuleId: string): Exercise[] {
  return exercisesBySubModule[subModuleId] || [];
}
