import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setReminder(timestamp: number, message: string): void;
}

export default TurboModuleRegistry.get<Spec>('NativeCalendar') || null;
