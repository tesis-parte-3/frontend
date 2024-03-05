import { useEffect, useRef } from 'react';
import './CSSLector.css';

const Empresas_TransporteUrbano = () => {
    const viewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializePDFViewer = async () => {
            if (viewerRef.current) {
                const { default: WebViewer } = await import('@pdftron/webviewer');

                WebViewer(
                    {
                        path: '/webviewer/lib',
                        initialDoc: '/pdfs/NVC 3270-1996 Empresas de transporte publico urbano Requisitos.pdf',
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

export default Empresas_TransporteUrbano;