import { useEffect, useState } from 'react';
import {Transition } from '@mantine/core';

function Estudios() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <>
            <Transition
                mounted={isMounted}
                transition="scale-y"
                duration={500}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}>
                    
                    </div>}
            </Transition>
        </>
    )
}

export default Estudios;