import React, { useState, useRef, useCallback } from 'react';

type SearchBarProps = { 
    onChange: (value: string) => void 
}

const SearchBar = ({ onChange }: SearchBarProps) => {
    const delay = useDelay();

    const handleChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        const value = element.target.value;
        // Wywołuje opóźnienie o 1500ms (1.5s) po wprowadzeniu ostatnich zmian. Jeśli nie dbasz o optymalizacje a chcesz dać wrażenie szybkiego wyszukiwania, ustaw 1.
        delay(() => handleDelay(value), 1);
    }

    const handleDelay = (val: string) => {
        onChange(val);
    };

    return <div className="SearchBar">
        <input placeholder="Search for something..." onChange={handleChange} />
    </div>
}

/**
 * Zwraca funkcję opóźniającą wywołanie callbacku.
 */
const useDelay = () => {
    type RefFn = (fn: Function, ms: number) => void
    const ref = useRef<RefFn | null>(null);

    if(ref.current === null) {
        let t = -1;
        const delay = (fn: Function, ms: number) => { 
            clearTimeout(t);
            t = setTimeout(fn, ms); 
        }
        
        ref.current = delay;
    }

    return ref.current as RefFn;
}

export default SearchBar;