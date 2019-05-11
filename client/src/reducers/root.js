/**
 * @file Combines all reducers into the root.
 */

import { combineReducers } from 'redux';

import contributors from './contributors';

// TODO(brianch): Figure out how to make redux work with proto3. Json format
// is too unstructured.

export default combineReducers({ contributors });
