function nodeEnvIs(expectedEnv: string) {
  const currentEnv = process.env.NODE_ENV

  return !!(currentEnv && currentEnv.toLowerCase() === expectedEnv.toLowerCase())
}

export default nodeEnvIs
