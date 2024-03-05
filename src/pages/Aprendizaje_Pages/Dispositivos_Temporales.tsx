import { useEffect, useRef } from 'react';
import './CSSLector.css';

const Dispositivos_Temporales = () => {
    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializePDFViewer = async () => {
            if (viewerRef.current) {
                const { default: WebViewer } = await import('@pdftron/webviewer');

                WebViewer(
                    {
                        path: '/webviewer/lib',
                        initialDoc: '/pdfs/05_MVDUCT Cap 5 Dispositivos temporales para el control del transito.pdf',
                    },
                    viewerRef.current
                ).then((instance) => {
                    instance.UI.setTheme('dark');
                    instance.UI.hideFormFieldIndicators();
                    instance.UI.disableElements(['downloadButton', 'viewControlsButton', 'searchButton', 'leftPanelButton', 'annotationCommentButton', 'toolsButton', 'menuButton', 'ribbons']);
                });
            }
        };

        initializePDFViewer();
    }, []);

    return (
        <div className="w-full px-5 z-20" style={{
            height: 'calc(100vh - 4.5rem)'
        }} ref={viewerRef} />
    );
};

export default Dispositivos_Temporales;