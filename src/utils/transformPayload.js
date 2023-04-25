export function transformPayload(payload) {
  const paredes = [];
  for (let i = 1; i <= 4; i++) {
    const altura = Number(payload[`alturaParede${i}`]);
    const largura = Number(payload[`larguraParede${i}`]);
    const quantidadeJanela = Number(payload[`quantidadeJanelasParede${i}`]);
    const quantidadePorta = Number(payload[`quantidadePortasParede${i}`]);
    paredes.push({ altura, largura, quantidadeJanela, quantidadePorta });
  }
  return paredes;
}
