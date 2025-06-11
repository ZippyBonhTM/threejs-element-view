export default function convertElectronConfig(config: string): number[] {
  const shells = config.trim().split(' ');
  const result: number[] = [];
  let currentShell = 0;
  let count = 0;

  for (const shell of shells) {
    const [, subshell, electrons] = shell.match(/(\d+[spdf])(\d+)/) || [];
    if (!subshell || !electrons) continue;

    const shellNumber = parseInt(subshell.match(/\d+/)![0]);
    const electronCount = parseInt(electrons);

    if (shellNumber > currentShell) {
      if (count > 0) {
        result.push(count);
        count = 0;
      }
      currentShell = shellNumber;
    }
    count += electronCount;
  }

  if (count > 0) {
    result.push(count);
  }

  return result;
}