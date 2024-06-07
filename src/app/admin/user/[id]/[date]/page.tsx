"use client"

export default function UserPage({ params }: { params: { id: string } }) {
    console.log(params)
    return <div>user page {JSON.stringify(params)}</div>
}