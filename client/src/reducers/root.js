/**
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Combines all reducers into the root reducer. Newly created reducers
 * should be combined here.
 */

import { combineReducers } from 'redux';

import contributors from 'reducers/contributors.js';
import userData from 'reducers/userData.js';

// Note: combineReducers will call each reducer 3 times at the start to probe
// for errors. This really only affects debugging via breakpoints.
// See https://github.com/reduxjs/redux/issues/729.
export default combineReducers({ userData, contributors });
