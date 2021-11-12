import React from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap1({height}) {
  return (
    <Map height={height} defaultCenter={[50.8148343979395, 6.365991235667754]} defaultZoom={11}>
      <Marker width={50} anchor={[50.8148343979395, 6.365991235667754]} />
    </Map>
  )
}

export function MyMap2({height}) {
  return (
    <Map height={height} defaultCenter={[69.65397714235206, 18.957141918365565]} defaultZoom={11}>
      <Marker width={50} anchor={[69.65397714235206, 18.957141918365565]} />
    </Map>
  )
}

export function MyMap3({height}) {
  return (
    <Map height={height} defaultCenter={[7.482424635160299, 99.08969810670442]} defaultZoom={11}>
      <Marker width={50} anchor={[7.482424635160299, 99.08969810670442]} />
    </Map>
  )
}

export function MyMap4({height}) {
  return (
    <Map height={height} defaultCenter={[-13.53168572658282, -71.96671533144338]} defaultZoom={11}>
      <Marker width={50} anchor={[-13.53168572658282, -71.96671533144338]} />
    </Map>
  )
}

