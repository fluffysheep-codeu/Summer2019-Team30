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

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const GOOGLE_MAPS_APP_KEY = { key: 'AIzaSyAi9TMtkY74gzfmjPkD7w1Tu-zyABHYlww' };
const GOOGLEPLEX_COORD = { lat: 37.422, lng: -122.084 };
const DEFAULT_MAP_ZOOM = 16;

/** Renders the /home page. */
class Home extends Component {
  render() {
    return (
      <div className='container' style={{ height: '25vh', width: '100%' }}>
        <h1 className='center'>CodeU Starter Project</h1>
        <p>
          This is the CodeU starter project. Click the links above to login and
          visit your page. You can post messages on your page, and you can visit
          other user pages if you have their URL.
        </p>
        <p>
          This is your code now! Feel free to make changes, and don&apos;t be
          afraid to get creative! You could start by modifying this page to tell
          the world more about your team.
        </p>
        <p>
          Below you will find a map of Googleplex in Mountain View, California.
        </p>
        <GoogleMapReact
          bootstrapURLKeys={GOOGLE_MAPS_APP_KEY}
          defaultCenter={GOOGLEPLEX_COORD}
          defaultZoom={DEFAULT_MAP_ZOOM}
        />
      </div>
    );
  }
}

export default Home;
