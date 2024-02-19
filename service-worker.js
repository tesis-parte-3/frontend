const isLocalhost = process.env.NODE_ENV === "development";

export function register() {
    if ("serviceWorker" in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }

        window.addEventListener("load", () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                checkValidServiceWorker(swUrl);
            } else {
                registerValidSW(swUrl);
            }
        });
    }
}

function registerValidSW(swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            console.log("Service Worker registrado con éxito:", registration);
        })
        .catch((error) => {
            console.error("Error durante la registración del Service Worker:", error);
        });
}

function checkValidServiceWorker(swUrl) {
    fetch(swUrl)
        .then((response) => {
            if (
                response.status === 404 ||
                response.headers.get("content-type").indexOf("javascript") === -1
            ) {
                console.log("No se encontró el Service Worker. Recargando...");
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                console.log("Service Worker encontrado. Registrando...");
                registerValidSW(swUrl);
            }
        })
        .catch(() => {
            console.log(
                "No hay conexión a Internet. La aplicación se cargará en modo sin conexión."
            );
        });
}

export function unregister() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error("Error al desregistrar el Service Worker:", error);
            });
    }
}