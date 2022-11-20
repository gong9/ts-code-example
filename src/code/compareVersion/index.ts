const compareVersion = (version1: string, version2: string) => {
  const version1Arr = version1.split('.')
  const version2Arr = version2.split('.')

  const maxLength = Math.max(version1Arr.length, version2Arr.length)

  for (let i = 0; i < maxLength; i++) {
    const cur = version1Arr[i] || 0
    const next = version2Arr[i] || 0

    if (Number(cur) === Number(next))
      continue

    if (Number(cur) > Number(next))
      return 1

    else if (Number(cur) < Number(next))
      return -1
  }
  return 0
}

export default compareVersion

