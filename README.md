# Captura en piso

App web (PWA) para registrar en tablet las etapas de una orden y exportarlas a CSV.
Funciona sin internet después de instalarla.

## Privacidad

- No tiene servidor ni cuentas. Lo capturado se guarda solo en el dispositivo (localStorage).
- La única salida de datos es el botón **Exportar**, que genera un CSV.
- Este repositorio contiene solo el código, con catálogos vacíos. No se suben CSV ni JSON.

## Instalar

- **iPad (Safari):** abrir la dirección → Compartir → **Agregar a pantalla de inicio**.
  Capturar siempre desde el ícono: Safari y el ícono guardan datos por separado.
- **Android (Chrome):** abrir la dirección → menú ⋮ → **Instalar app**.

Borrar el ícono borra los datos. Exportar al final de cada recorrido.

## Actualizar

Cambiar `VERSION` en `index.html` y en `sw.js`, publicar, y abrir la app una vez con internet
en cada dispositivo. La versión nueva queda activa al volver a abrirla.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La app completa (HTML, CSS y JS) |
| `sw.js` | Guarda la app para usarla sin internet |
| `manifest.webmanifest` | Nombre e íconos para instalarla |
| `icon-*.png` | Íconos |
