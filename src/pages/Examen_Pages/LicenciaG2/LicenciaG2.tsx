import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import QuizzCard from '../../../components/Examen/QuizzCard';

function LicenciaG2() {
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
                <QuizzCard level="grado2" />
                </div>
            }
            </Transition>
        </>
    )
}

export default LicenciaG2;