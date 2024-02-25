import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';

function LicenciaG3() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Transition
                mounted={isMounted}
                transition="fade"
                duration={500}
                timingFunction="ease"
            >{(styles) => <div style={styles}>
                <h1>Aqui van las listas de examenes de G3</h1>
                </div>}
            </Transition>
        </>
    )
}

export default LicenciaG3;