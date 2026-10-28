# Gritómetro

Juego de Halloween: mide con el micrófono quién grita más fuerte. Sitio estático, sin
dependencias ni paso de compilación. El audio se procesa en el navegador y no se graba ni se
envía; el ranking vive en el `localStorage` del equipo.

Se usa en dos pestañas del mismo navegador, que se comunican con `BroadcastChannel`:

- `index.html` (`/`) — ajustes del operador, lo primero que se ve: guía de juego, micrófono
  (encender y apagar), calibración, ronda, sensibilidad y ranking. Esta pestaña mide el audio
  (`medidor.js`, en el hilo de audio), así que sigue funcionando aunque quede en segundo plano.
- `pantalla.html` (`/pantalla` en Vercel) — pantalla para el público: el barril baila con
  cualquier sonido y se llena con el nivel del grito; arriba a la derecha van la cuenta
  regresiva y el puntaje. Tocar a Boo inicia cada ronda y ella responde con un mensaje; Sulley,
  Randall y Mike reaccionan al puntaje (hasta 40 tristes, de 41 a 69 «puede mejorar», desde 70
  celebran). El logo de Monsters, Inc. vuelve a los ajustes. Doble clic o tecla F: pantalla
  completa.

`/configuracion` (dirección anterior de los ajustes) redirige a `/`.

## Probar en local

```bash
python3 -m http.server 8080
```

Abrir http://localhost:8080/ en Chrome o Edge, dar permiso de micrófono y usar
«Abrir pantalla principal».

## Despliegue

Vercel lo sirve tal cual (preset «Other», sin comando de build). `vercel.json` solo agrega
cabeceras: el micrófono queda permitido únicamente para el propio sitio y la página no se puede
incrustar en otro.
