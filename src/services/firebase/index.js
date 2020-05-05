import * as base from './base.js';
import * as email from './email.js';
import * as db from './db.js';

export default ({ ...base, ...email, ...db });
