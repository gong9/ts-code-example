function convert(list: any[]) {
  let res: any

  for (let i = 0; i < list.length; i++) {
    if (!list[i].pid)
      res = list[i]

    if (list[i].pid) {
      const parent = list.filter(item => item.id === list[i].pid)[0]
      if (parent.children)
        parent.children.push(list[i])

      else
        parent.children = []
    }
  }

  return res
}

export default convert

