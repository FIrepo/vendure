import { devConfig } from '../dev-config';
import { bootstrap } from '../src';
import { VendureConfig } from '../src/config/vendure-config';

import { populate } from './populate';

/**
 * A CLI script which populates the dev database with deterministic random data.
 */
if (require.main === module) {
    // Running from command line
    const populateConfig: VendureConfig = {
        ...devConfig,
        customFields: {},
    };
    // tslint:disable
    populate(populateConfig, bootstrap, {
        logging: true,
        customerCount: 100,
        productCount: 200,
    })
        .then(app => app.close())
        .then(() => process.exit(0));
}