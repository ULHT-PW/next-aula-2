'use client'
import React from 'react'; import useSWR from "swr";
import MunicipalityCard from '@/components/MunicipalityCard/MunicipalityCard';
import { Municipality } from '@/models/interfaces'

export default function Municipalities() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR<Municipality[], Error>('/api/municipalities', fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return <>
        <h1 className="text-4xl font-bold">Municípios</h1>
        <section className="">
        {data.sort((a,b) => a.name.localeCompare(b.name)).map((municipality) => (
            <MunicipalityCard
                key={municipality.id}
                id={municipality.id}
                name={municipality.name}
                district_name={municipality.district_name}
            />
        ))}
        </section>
    </>
}
