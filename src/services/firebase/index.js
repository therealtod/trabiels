import * as base from './base.js';
import * as auth from './auth.js';
import * as db from './db.js';

export default ({ ...base, ...auth, ...db });
