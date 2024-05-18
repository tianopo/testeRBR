export interface AplicarOpacidadeCor {
  cor: string
  opacidade: number
  isSolido?: boolean
}

export function opacityColor({ cor, opacidade, isSolido }: AplicarOpacidadeCor): string {
  if (isSolido) {
    // Aplicar opacidade sem tornar a cor transparente
    const r = parseInt(cor.slice(1, 3), 16)
    const g = parseInt(cor.slice(3, 5), 16)
    const b = parseInt(cor.slice(5, 7), 16)

    const rComOpacidade = Math.round(r + (255 - r) * (1 - opacidade))
    const gComOpacidade = Math.round(g + (255 - g) * (1 - opacidade))
    const bComOpacidade = Math.round(b + (255 - b) * (1 - opacidade))

    return `#${((rComOpacidade << 16) | (gComOpacidade << 8) | bComOpacidade).toString(16).padStart(6, '0')}`
  } else {
    // Aplicar opacidade tornando a cor transparente
    const rgbaArray = cor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
    if (!rgbaArray) {
      throw new Error('Formato de cor inválido')
    }

    const r = parseInt(rgbaArray[1], 16)
    const g = parseInt(rgbaArray[2], 16)
    const b = parseInt(rgbaArray[3], 16)

    return `rgba(${r}, ${g}, ${b}, ${opacidade})`
  }
}
