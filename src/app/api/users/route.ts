import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const USERS_BACKEND_URL = 'https://jsonplaceholder.typicode.com/users';
async function fetchUsers() {
    const { data } = await axios.get<{ name: string }[]>(USERS_BACKEND_URL);
    return data.map(user => user.name);
}

export async function GET(request: NextRequest) {
    console.log("start fetch")
    const userNames = await fetchUsers();
    console.log("response parsed return " + userNames)
    return new Response(JSON.stringify(userNames), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 200
    });
} 