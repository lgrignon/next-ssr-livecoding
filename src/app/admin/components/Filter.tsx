
export interface UserFiltersProps {
    onUsernameFilterChanged: (filterText: string) => void;
}

export function UserFilters({ onUsernameFilterChanged }: UserFiltersProps) {
    return <div>
        <input type="text" onKeyUp={(event) => onUsernameFilterChanged((event.target as HTMLInputElement).value)} />
    </div>
}