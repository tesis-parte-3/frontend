import { useEffect, useState } from 'react';
import { Transition } from '@mantine/core';
import QuizzCard from '../../../components/Examen/QuizzCard';
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
                <QuizzCard level="grado3" />
                </div>
                }
            </Transition>
        </>
    )
}

export default LicenciaG3;