const fontSizeApp = {
  subTitulo: { base: 24 },
  textoBase: { base: 16 },
  textoMenor: { base: 14 },
  textoPequeno: { base: 12 },
  textoMini: { base: 10 },
}

const fontFamilyRoboto = 'Roboto, sans-serif'

export const textoSubTituloUi = {
  fontFamily: fontFamilyRoboto,
  fontWeight: '600',
  fontSize: {
    base: `${fontSizeApp.subTitulo.base}px`,
  },
  lineHeight: {
    base: `${fontSizeApp.subTitulo.base * 1.2}px`,
  },
}

export const textoBaseUi = {
  fontFamily: fontFamilyRoboto,
  fontWeight: '400',
  fontSize: {
    base: `${fontSizeApp.textoBase.base}px`,
  },
  lineHeight: {
    base: `${fontSizeApp.textoBase.base * 1.2}px`,
  },
}

export const textoMenorUi = {
  fontFamily: fontFamilyRoboto,
  fontWeight: '500',
  fontSize: {
    base: `${fontSizeApp.textoMenor.base}px`,
  },
  lineHeight: {
    base: `${fontSizeApp.textoMenor.base * 1.2}px`,
  },
}

export const textoPequenoUi = {
  fontFamily: fontFamilyRoboto,
  fontWeight: '400',
  fontSize: {
    base: `${fontSizeApp.textoPequeno.base}px`,
  },
  lineHeight: {
    base: `${fontSizeApp.textoPequeno.base * 1.2}px`,
  },
}

export const textoMiniUi = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '400',
  fontSize: {
    base: `${fontSizeApp.textoMini.base}px`,
  },
  lineHeight: {
    base: `${fontSizeApp.textoMini.base * 1.2}px`,
  },
}
