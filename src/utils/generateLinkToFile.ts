export function generateLink(name: string | undefined) {
  return name ? `${process.env.HOST}:${process.env.PORT}/resized-${name}` : '';
}
