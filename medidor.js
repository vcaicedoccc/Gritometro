// Corre en el hilo de audio: no lo frena el navegador cuando la pestaña de configuración
// queda en segundo plano. Envía el RMS de cada bloque de ~21 ms.
class Medidor extends AudioWorkletProcessor {
  constructor(){ super(); this.sum = 0; this.n = 0; }
  process(inputs){
    const ch = inputs[0] && inputs[0][0];
    if (ch){
      for (let i = 0; i < ch.length; i++) this.sum += ch[i]*ch[i];
      this.n += ch.length;
    }
    if (this.n >= 1024){
      this.port.postMessage(Math.sqrt(this.sum/this.n));
      this.sum = 0; this.n = 0;
    }
    return true;
  }
}
registerProcessor('medidor', Medidor);
