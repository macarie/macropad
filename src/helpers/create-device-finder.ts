export const createDeviceFinder = (deviceToFind: string) => {
  const normalizedDeviceToFind = deviceToFind.toLocaleLowerCase()

  return (deviceFound: string) =>
    deviceFound.toLocaleLowerCase().includes(normalizedDeviceToFind)
}

export default createDeviceFinder
