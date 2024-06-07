"use client"

import { useEffect, useState } from "react";
import { UserFilters } from "./Filter";
import axios from "axios";


export function UsersList() {

    const [availableUsers, setAvailableUsers] = useState<string[]>([]);
    const [users, setUsers] = useState<string[]>([]);

    async function fetchUsers() {
        const { data } = await axios.get<string[]>('/api/users');
        setAvailableUsers(data);
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    function filterUsers(filterText: string) {
        setUsers(availableUsers.filter(user => user.toLowerCase().includes(filterText.toLowerCase())));
    }

    return <div>
        <UserFilters onUsernameFilterChanged={filterUsers} />

        <ul>
            {users.map((user, i) => <li key={i}>{user}</li>)}
        </ul>
    </div>
}