import { useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './CSSLector.css';

import { useRef } from 'react';

function Ciclorruta() {

    const viewerDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        WebViewer({
            path: 'lib',
            initialDoc: '/pdfs/07_MVDUCT Cap 7 Ciclorruta.pdf',
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

export default Ciclorruta;