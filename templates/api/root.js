// *******************************************************
// API Index File
// -------------------------------------------------------
// NOTES: This file is generated automatically when a new
// api end point is built it added via the generator function. #magic
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
{{#each routes}}
import * as {{constantCase this}}_ from './{{lowerCase this}}';
{{/each}}
// --------------------------------

// *******************************************
// Exports
// -------------------------------------------
{{#each routes}}
export const {{constantCase this}} = {{constantCase this}}_;
{{/each}}
// --------------------------------
