import hasCycle from './index'

interface ListNodeType {
  next: null | ListNodeType
  val: number
}

const arrToCodeList = (arr: number[], isCycle?: boolean) => {
  let head: ListNodeType | null = null
  let tail: ListNodeType | null = null

  const productionlistNode = (val: number) => {
    return {
      val,
      next: null,
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const workInProgressNode = productionlistNode(arr[i])

    if (head) {
      tail!.next = workInProgressNode
      tail = tail!.next
    }
    else {
      head = workInProgressNode
      tail = workInProgressNode
    }
  }
  if (isCycle)
    tail!.next = head

  return head
}

describe('hasCycleTest', () => {
  test('notHasCycle', () => {
    expect(hasCycle(arrToCodeList([1, 2, 3]))).toBe(false)
  })
  test('hasCycle', () => {
    expect(hasCycle(arrToCodeList([1, 2, 3, 2], true))).toBe(true)
  })
})
