import { tvModule } from './tv';
import { SmartHomeModule } from './smart-home';
import { serverModule } from './server';

serverModule.run();
tvModule.run();
SmartHomeModule.run();