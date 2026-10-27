# Gritómetro

Juego de Halloween: mide con el micrófono quién grita más fuerte. Es una sola página estática
(`index.html`), sin dependencias ni paso de compilación. El audio se procesa en el navegador y
no se graba ni se envía; el ranking vive en el `localStorage` del equipo.

## Probar en local

```bash
python3 -m http.server 8080
```

Abrir http://localhost:8080 en Chrome o Edge y dar permiso de micrófono.

## Despliegue

Vercel lo sirve tal cual (preset «Other», sin comando de build). `vercel.json` solo agrega
cabeceras: el micrófono queda permitido únicamente para el propio sitio y la página no se puede
incrustar en otro.
