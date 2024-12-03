import React from 'react'

export default function MunicipalityCard({id, district_name, name}: Municipality) {
  return (
    <article className="text-sm bg-purple-500 hover:bg-purple-600 text-white p-4 m-2 font-bold">{name} ({district_name})</article>
  )
}
