function* fastKSParser(s) {
  for (const match of s.matchAll(
    /\{\{\s*(\w+[\w-\.]*\w+)\s*(\((.*?)\)|)\s*\}\}/gms
  )) {
    const { index } = match;
    if (s.charAt(index - 1) === "\\") {
      continue;
    }

    const split = (match[3] || "").trim().split(",");
    yield {
      name: match[1],
      args: split,
    };
  }
}