export const formatByte = (byte: number) => {
  const KiByte = Math.round(byte / 1024)
  return KiByte <= 1000 ? `${KiByte} KiB` : `${Math.round(KiByte / 10.24) / 100} MiB`
}
