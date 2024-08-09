function checkWebContainerSupport(): boolean {
  try {
    new RegExp('(?<=.).') // Check lookbehind assertion
  } catch {
    return false
  }

  if (!Atomics || !('waitAsync' in Atomics)) return false // Check Atomics.waitAsync

  return true
}

function choosePlayground(webContainer: string, simple: string) {
  return checkWebContainerSupport() ? webContainer : simple
}

export default choosePlayground