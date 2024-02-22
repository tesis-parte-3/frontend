import { useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './CSSLector.css';

import { useRef } from 'react';

function Empresas_TransporteUrbano() {

    const viewerDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        WebViewer({
            path: 'lib',
            initialDoc: '/pdfs/NVC 3270-1996 Empresas de transporte publico urbano Requisitos.pdf',
        }, viewerDiv.current as HTMLDivElement).then((instance) => {
            instance.UI.setTheme('dark');
            instance.UI.hideFormFieldIndicators();
            instance.UI.disableElements(['downloadButton', 'viewControlsButton', 'searchButton', 'leftPanelButton', 'annotationCommentButton', 'toolsButton', 'menuButton', 'ribbons']);
        }

        );
    }, [])
    return (
        <>
            <div className="w-full px-5 z-20" style={{
                height: 'calc(100vh - 4.5rem)'
            }} ref={viewerDiv}></div>
        </>
    )
}

export default Empresas_TransporteUrbano;