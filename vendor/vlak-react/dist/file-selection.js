/** Shared browser-file validation for file upload and message composition. */

export const fileSelectionKey = file => `${file.name}:${file.size}:${file.lastModified}`;
export function acceptsFile(file, accept) {
  if (!accept?.trim()) return true;
  return accept.split(",").some(entry => {
    const rule = entry.trim().toLowerCase();
    if (!rule) return false;
    if (rule.startsWith(".")) return file.name.toLowerCase().endsWith(rule);
    if (rule.endsWith("/*")) return file.type.toLowerCase().startsWith(rule.slice(0, -1));
    return file.type.toLowerCase() === rule;
  });
}
export function selectFiles(incoming, {
  files,
  accept,
  multiple = true,
  maxFiles,
  maxSize
}) {
  const accepted = multiple ? [...files] : [];
  const added = [];
  const rejected = [];
  const limit = multiple ? maxFiles : 1;
  for (const file of incoming) {
    if (accepted.some(entry => fileSelectionKey(entry) === fileSelectionKey(file))) continue;
    const code = !acceptsFile(file, accept) ? "accept" : maxSize != null && file.size > maxSize ? "max_file_size" : limit != null && accepted.length >= limit ? "max_files" : undefined;
    if (code) rejected.push({
      file,
      code,
      reason: code === "accept" ? "File type is not accepted" : code === "max_file_size" ? `File exceeds ${maxSize} bytes` : `Choose at most ${limit} ${limit === 1 ? "file" : "files"}`
    });else {
      accepted.push(file);
      added.push(file);
    }
  }
  return {
    accepted,
    added,
    rejected
  };
}
//# sourceMappingURL=file-selection.js.map
