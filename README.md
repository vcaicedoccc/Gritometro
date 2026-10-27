# Gritómetro

Juego de Halloween: mide con el micrófono quién grita más fuerte. Sitio estático, sin
dependencias ni paso de compilación. El audio se procesa en el navegador y no se graba ni se
envía; el ranking vive en el `localStorage` del equipo.

Se usa en dos pestañas del mismo navegador, que se comunican con `BroadcastChannel`:

- `index.html` — pantalla principal para el público: el barril se llena con el nivel del grito y
  arriba a la derecha se ven el participante, la cuenta regresiva y el puntaje. Doble clic o
  tecla F: pantalla completa.
- `configuracion.html` (`/configuracion` en Vercel) — operador: micrófono, calibración, nombre
  del participante, ronda, sensibilidad y ranking. Esta pestaña mide el audio (`medidor.js`, en
  el hilo de audio), así que sigue funcionando aunque quede en segundo plano.

## Probar en local

```bash
python3 -m http.server 8080
```

Abrir http://localhost:8080/configuracion.html en Chrome o Edge, dar permiso de micrófono y usar
«Abrir pantalla principal».

## Despliegue

Vercel lo sirve tal cual (preset «Other», sin comando de build). `vercel.json` solo agrega
cabeceras: el micrófono queda permitido únicamente para el propio sitio y la página no se puede
incrustar en otro.
