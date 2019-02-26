// *******************************************************
// Tables Database Components
// -------------------------------------------------------
// NOTES: This file is generated automatically when a new
// table is built it added via the generator function. #magic
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
{{#each tables}}
import * as {{constantCase this}}_ from './{{lowerCase this}}';
{{/each}}
// --------------------------------

// *******************************************
// Exports
// -------------------------------------------
{{#each tables}}
export const {{constantCase this}} = {{constantCase this}}_;
{{/each}}
// --------------------------------
