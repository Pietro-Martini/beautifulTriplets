function beautifulTriplets (d, arr) {
  let i = 0
  let map = {}

  for (i = 0; i < arr.length; i += 1) {
    const el = arr[i]
    map[el] = map[el] ? map[el] += 1 : 1
  }

  i = arr[0]
  const max = arr[arr.length - 1]

  let beautifulCount = 0

  while (i <= max) {
    let j = i + d
    let k = j + d

    if (map[i] && map[j] && map[k]) {
      beautifulCount += Math.max(map[i], map[j], map[k])
    }

    i += 1
  }

  return beautifulCount
}
