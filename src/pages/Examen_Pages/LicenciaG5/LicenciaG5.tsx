import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import QuizzCard from '../../../components/Examen/QuizzCard';

function LicenciaG5() {
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
                <QuizzCard level="grado5" />
                </div>
                }
            </Transition>
        </>
    )
}

export default LicenciaG5;