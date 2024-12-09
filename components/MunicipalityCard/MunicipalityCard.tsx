import React from 'react'
import { Municipality } from '@/models/interfaces'

export default function MunicipalityCard({id, district_name, name}: Municipality) {
  return (
    <article className="text-sm bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white p-2 m-2 font-bold">
      {name} ({district_name})
    </article>
  )
}
