/*
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

package com.google.codeu.data;

import java.util.UUID;

/** A single message posted by a user. */
public class Restaurant {

  private UUID id;
  private String name;
  private String address;
  private double lat;
  private double lng;


  /**
   * Construct a new Restaurant and convert an address to a latitude and longnitude
   *
   * @param restAddress
   */
  public Restaurant(String restAddress) {
    /** Convert Address into Latitude and Longitude  */
    id = UUID.randomUUID();
    name = "";
    address = restAddress;
    lat = 0.0;
    lng = 0.0;
  }

  public UUID getId() {
    return id;
  }

  public String getAddress() {
    return address;
  }

  public double getLat() {
    return lat;
  }

  public double getLng() {
    return lng;
  }
}