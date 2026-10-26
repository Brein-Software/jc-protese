export const usePublicImage = () => {
  const baseURL = useRuntimeConfig().app.baseURL

  return (filename: string) => `${baseURL}${filename}`
}
