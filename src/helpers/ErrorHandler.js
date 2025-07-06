const getErrorHandler = (error) => {
  console.error('[Error] =>', error)
  return {
    message: error.message || 'Error al procesar la solicitud',
    error: error.code
  }
}

export default getErrorHandler
